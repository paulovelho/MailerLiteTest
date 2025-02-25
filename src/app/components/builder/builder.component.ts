import { Component, OnInit } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';
import { SharedModule } from '@app/shared/shared.module';
import { ImagePlaceholderComponent } from '../blocks/image/image-placeholder/image-placeholder.component';
import { TextPlaceholderComponent } from '../blocks/text/text-placeholder/text-placeholder.component';
import { ImageBlockComponent } from "../blocks/image/image-block/image-block.component";
import { TextBlockComponent } from "../blocks/text/text-block/text-block.component";
import { PageBlockComponent } from "../blocks/page-block/page-block.component";
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImageEditComponent } from '../blocks/image/image-edit/image-edit.component';
import { TextEditComponent } from '../blocks/text/text-edit/text-edit.component';
import { TextService } from '../blocks/text/text.service';
import { ButtonModule } from 'primeng/button';
import { ImageService } from '../blocks/image/image.service';

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
		ButtonModule,
		DragDropModule,
		PageBlockComponent,
		TextBlockComponent,
		ImageBlockComponent,
		TextPlaceholderComponent,
		ImagePlaceholderComponent,
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
	public page: pageItem[] = [];

	constructor(
		private dialog: DialogService,
	) { }

	ngOnInit(): void {
		this.addPageItem("image");
		this.addPageItem("text");
	}

	private addPageItem(type: blockType) {
		this.page.push(this.getPageItem(type));
	}
	private getPageItem(type: blockType, position?: number) {
		let data = {};
		if (type == "text") {
			data = { content: TextService.getRandomQuote() };
		} else {
			data = { image: ImageService.getRandomImage() };
		}
		return {
			type, data,
			order: position ?? this.page.length,
		};
	}

	public addItemAtPosition(item: pageItem, position: number) {
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

	private getModalData() {
		return {
			modal: true,
			draggable: true,
			resizable: true,
			maximizable: true,
			closeOnEscape: true,
			closable: false,
			width: '720px',
		};
	}
	public openModalText = (item: pageItem): DynamicDialogRef => this.dialog.open(TextEditComponent, { data: item.data, ...this.getModalData() });
	public openModalImage = (item: pageItem): DynamicDialogRef => this.dialog.open(ImageEditComponent, { data: item.data, ...this.getModalData() });
	public edit(position: number) {
		const item: pageItem = this.page[position];
		const dialog = item.type == "image" ? this.openModalImage(item) : this.openModalText(item);
		dialog.onClose.subscribe(rs => {
				if (!rs) return;
				this.page[position].data = rs;
			});
	}

	private normalize() {
		this.page = this.page.map((c, index) => { c.order = index; return c; });
	}

	public remove(position: number) {
		this.page.splice(position, 1);
		this.normalize();
	}

	public clone(position: number) {
		const item = this.page[position];
		let newItem = { ...item };
		const newPosition = position + 1;
		newItem.order = newPosition;
		this.addItemAtPosition(newItem, newPosition);
	}

	public changeOrder(from: number, to: number) {
		this.page.splice(to, 0, this.page.splice(from, 1)[0]);
		this.normalize();
	}

	public moveUp(pos: number) {
		if (pos == 0) return;
		this.changeOrder(pos, pos - 1);
	}
	public moveDown(pos: number) {
		if (pos == this.page.length) return;
		this.changeOrder(pos, pos + 1);
	}


	public newElementStart(type: blockType) {
		this.newElementType = type;
	}
	public moveElementStart(index: number) {
		this.moveElementIndex = index;
	}
	public clearDrag() {
		this.newElementType = null;
		this.moveElementIndex = null;
	}

	public clear = () => this.page = [];
	public save = () => console.log("saving: ", this.page);
}
