import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutService } from './services/layout/layout.service';
import { provideAnimations } from '@angular/platform-browser/animations';

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
