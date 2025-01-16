import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
	selector: 'app-text-edit',
	standalone: true,
	imports: [
		SharedModule,
		ButtonModule,
		EditorModule,
	],
	templateUrl: './text-edit.component.html',
	styleUrl: './text-edit.component.scss'
})
export class TextEditComponent implements OnInit {
	public content:string = "";

	constructor(
		public ref: DynamicDialogRef,
		public config: DynamicDialogConfig,
	) {
	}

	ngOnInit(): void {
		const data = this.config.data;
		this.content = data.content;
	}

	public escape(): void {
		this.ref.close();
	}
	public save(): void {
		this.ref.close({ content: this.content.replaceAll("&nbsp;", " ") });
	}
}
