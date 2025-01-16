import { Component, Input, ViewEncapsulation } from '@angular/core';
import { PageBlockComponent } from "../../page-block/page-block.component";

@Component({
	selector: 'app-text-block',
	standalone: true,
	imports: [
	],
	encapsulation: ViewEncapsulation.None,
	templateUrl: './text-block.component.html',
	styleUrl: './text-block.component.scss'
})
export class TextBlockComponent {
	@Input() data?:any;
}
