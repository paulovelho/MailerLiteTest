import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { SharedModule } from '@app/shared/shared.module';
import { ImagePlaceholderComponent } from '../blocks/image/image-placeholder/image-placeholder.component';
import { TextPlaceholderComponent } from '../blocks/text/text-placeholder/text-placeholder.component';
import { ImageBlockComponent } from "../blocks/image/image-block/image-block.component";
import { TextBlockComponent } from "../blocks/text/text-block/text-block.component";
import { PageBlockComponent } from "../blocks/page-block/page-block.component";
import { DialogService } from 'primeng/dynamicdialog';
import { ImageEditComponent } from '../blocks/image/image-edit/image-edit.component';
import { TextEditComponent } from '../blocks/text/text-edit/text-edit.component';

type blockType = "image" | "text";
interface pageItem {
	type: blockType;
	order: number;
	data: any;
}

@Component({
	selector: 'app-builder',
	standalone: true,
	imports: [
    SharedModule,
    TextPlaceholderComponent,
    ImagePlaceholderComponent,
    DragDropModule,
    ImageBlockComponent,
    TextBlockComponent,
    PageBlockComponent,
	],
	providers: [
		DialogService,
	],
	templateUrl: './builder.component.html',
	styleUrl: './builder.component.scss'
})
export class BuilderComponent implements OnInit {
	public newElementType?: blockType | null;
	public moveElementIndex?: number | null;
	public page:pageItem[] = [];

	constructor(
		private dialog: DialogService,
	) { }

	ngOnInit(): void {
		this.addPageItem("image");
		this.addPageItem("text");
		this.addPageItem("text");
		this.addPageItem("image");
		this.addPageItem("text");
	}

	private addPageItem(type:blockType) {
		this.page.push(this.getPageItem(type));
	}
	private getPageItem(type:blockType, position?:number) {
		return {
			type,
			data: {},
			order: position ?? this.page.length,
		};
	}

	public addItemAtPosition(item:pageItem, position:number) {
		this.page = [
			...this.page?.slice(0, position),
			item,
			...this.page?.slice(position),
		];
		this.normalize();
	}

	public addBlock(component: any, position: number) {
		this.addItemAtPosition(
			this.getPageItem(this.newElementType!, position),
			position
		);
	}

	public edit(position:number) {
		const item:pageItem = this.page[position];
		const component = item.type == "image" ? ImageEditComponent : TextEditComponent;

		this.dialog.open(component, {
			data: item.data,
			modal: true,
			draggable: true,
			resizable: true,
			maximizable: true,
			closeOnEscape: true,
			width: '650px',
		})
		.onClose.subscribe(rs => {
			console.info("rs: ", rs);
		});
	}

	private normalize() {
		this.page = this.page.map((c, index) => { c.order = index; return c; });
		console.info("normalized: ", this.page);
	}

	public remove(position:number) {
		this.page.splice(position, 1);
		this.normalize();
	}

	public clone(position: number) {
		const item = this.page[position];
		console.info("cloning ", item);
		let newItem = {...item};
		const newPosition = position + 1;
		newItem.order = newPosition;
		this.addItemAtPosition(newItem, newPosition);
	}

	public changeOrder(from:number, to:number) {
		this.page.splice(to,0,this.page.splice(from,1)[0]);
		this.normalize();
	}

	public moveUp(pos:number) {
		if(pos == 0) return;
		this.changeOrder(pos, pos-1);
	}
	public moveDown(pos:number) {
		if(pos == this.page.length) return;
		this.changeOrder(pos, pos+1);
	}


	public newElementStart(type:blockType) {
		this.newElementType = type;
	}
	public moveElementStart(index:number) {
		this.moveElementIndex = index;
	}
	public clearDrag() {
		this.newElementType = null;
		this.moveElementIndex = null;
	}
}
