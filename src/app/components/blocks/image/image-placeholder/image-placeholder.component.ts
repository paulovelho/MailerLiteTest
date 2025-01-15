import { Component } from '@angular/core';
import { DragDropModule } from 'primeng/dragdrop';

@Component({
	selector: 'app-image-placeholder',
	standalone: true,
	imports: [
		DragDropModule,
	],
	templateUrl: './image-placeholder.component.html',
	styleUrl: './image-placeholder.component.scss'
})
export class ImagePlaceholderComponent {
	public blockType:string = "image";

	public dragStart(component:any) {
		console.info("drag start", component);
	}
}
