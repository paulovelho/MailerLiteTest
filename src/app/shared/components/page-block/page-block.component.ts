import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { PanelModule } from 'primeng/panel';

@Component({
	selector: 'app-page-block',
	standalone: true,
	imports: [
		CommonModule,
		PanelModule,
	],
	templateUrl: './page-block.component.html',
	styleUrl: './page-block.component.scss',
	animations: [
		trigger('slideUpDown', [
			transition('void => *', [
				style({ height: 0, margin: 0, padding: 0, opacity: 0, overflow: 'hidden' }),
				animate(500, style({ height: '*', margin: '*', padding: '*', opacity: 1, overflow: 'visible' }))
			]),
			transition('* => void', [
				style({ height: '*', margin: '*', padding: '*', opacity: 1, overflow: 'visible' }),
				animate(500, style({ height: 0, margin: 0, padding: 0, opacity: 0, overflow: 'hidden' }))
			])
		])
	],
})
export class PageBlockComponent {
	@Input() title: string = "";
	@Input() icon: string = "";

	constructor(
	) {
	}

}
