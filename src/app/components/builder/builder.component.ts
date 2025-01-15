import { Component, OnInit } from '@angular/core';
import { ImagePlaceholderComponent } from '../blocks/image/image-placeholder/image-placeholder.component';
import { TextPlaceholderComponent } from '../blocks/text/text-placeholder/text-placeholder.component';
import { DragDropModule } from 'primeng/dragdrop';
import { SharedModule } from '@app/shared/shared.module';
import { ImageBlockComponent } from "../blocks/image/image-block/image-block.component";
import { TextBlockComponent } from "../blocks/text/text-block/text-block.component";

interface pageItem {
	type: "image" | "text";
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
    TextBlockComponent
],
	templateUrl: './builder.component.html',
	styleUrl: './builder.component.scss'
})
export class BuilderComponent implements OnInit {
	public selected?:"image"|"text";
	public page:pageItem[] = [];

	constructor(

	) { }

	ngOnInit(): void {
	}

	private addPageItem(type:"image"|"text") {
		this.page.push(this.getPageItem(type));
	}
	private getPageItem(type:"image"|"text", position?:number) {
		return {
			type,
			data: {},
			order: position ?? this.page.length,
		};
	}

	public dragStart(type:"image"|"text") {
		this.selected = type;
	}

	public addBlock(component: any, position: number) {
		this.page = [
			...this.page?.slice(0, position),
			this.getPageItem(this.selected!, position),
			...this.page?.slice(position),
		].map((c, index) => { c.order = index; return c; });
		console.info(this.page);
	}



}
