import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';

const components = [
	CommonModule,
];

@NgModule({
	imports: components,
	declarations: [
	],
	providers: [
		LayoutService,
	],
	exports: components,

})
export class SharedModule { }
