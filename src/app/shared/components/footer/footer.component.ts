import { Component } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { DialogService } from 'primeng/dynamicdialog';
import { DividerModule } from 'primeng/divider';

@Component({
	selector: 'app-footer',
	standalone: true,
	imports: [
		SharedModule,
		DividerModule,
	],
	providers: [ DialogService ],
	templateUrl: './footer.component.html',
	styleUrl: './footer.component.scss'
})
export class FooterComponent {
	public isDev:boolean = true;

	constructor(
		private dialog: DialogService,
	) { }

}
