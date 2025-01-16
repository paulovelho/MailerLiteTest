import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
	public static imageFolder:string = "./assets/images/";
  constructor() { }

	public static getAvailableImages() {
		const images = [
			"guia_1.jpg",
			"guia_2.jpg",
			"guia_3.jpg",
			"guia_4.jpg",
			"guia_5.jpg",
		];
		return images.map(i => ImageService.imageFolder + i);
	}

	public static getRandomImage() {
		const imgs = ImageService.getAvailableImages();
		const randomI = Math.floor(Math.random() * imgs.length);
		return imgs[randomI];
	}

}
