import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-image-block',
	standalone: true,
	imports: [],
	templateUrl: './image-block.component.html',
	styleUrl: './image-block.component.scss'
})
export class ImageBlockComponent {
	@Input() data: any;
}
