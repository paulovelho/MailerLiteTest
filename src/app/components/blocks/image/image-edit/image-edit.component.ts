import { Component } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ImageService } from '../image.service';

@Component({
	selector: 'app-image-edit',
	standalone: true,
	imports: [
		SharedModule,
		ButtonModule,
	],
	templateUrl: './image-edit.component.html',
	styleUrl: './image-edit.component.scss'
})
export class ImageEditComponent {
	public image: string = "";
	public availableImages: string[] = [];

	constructor(
		public ref: DynamicDialogRef,
		public config: DynamicDialogConfig,
	) {
	}

	ngOnInit(): void {
		this.availableImages = ImageService.getAvailableImages();
		const data = this.config.data;
		this.image = data.image;
	}

	public selectImage(sel:string) {
		this.image = sel;
	}

	public escape(): void {
		this.ref.close();
	}
	public save(): void {
		this.ref.close({ image: this.image });
	}
}
