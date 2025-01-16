import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'
import { PanelModule } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
	selector: 'app-page-block',
	standalone: true,
	imports: [
		CommonModule,
		PanelModule,
		TooltipModule,
	],
	encapsulation: ViewEncapsulation.None,
	templateUrl: './page-block.component.html',
	styleUrl: './page-block.component.scss',
})
export class PageBlockComponent {
	@Input() position?: number;
	@Input() showMoveUp: boolean = true;
	@Input() showMoveDown: boolean = true;
	@Output() moveUp: EventEmitter<null> = new EventEmitter();
	@Output() moveDown: EventEmitter<null> = new EventEmitter();
	@Output() trash: EventEmitter<null> = new EventEmitter();
	@Output() clone: EventEmitter<null> = new EventEmitter();
	@Output() edit: EventEmitter<null> = new EventEmitter();

	constructor(
	) {
	}

}
