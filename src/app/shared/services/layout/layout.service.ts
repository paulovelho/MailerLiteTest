import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LayoutService {

	public menuDisplayed: boolean = false;

	constructor(
	) { }

	isMobile = () => window.innerWidth < 640;
	isDesktop = () => window.innerWidth > 1024;
	isTablet = () => {
		const width = window.innerWidth;
		return width <= 1024 && width > 640;
	}

}
