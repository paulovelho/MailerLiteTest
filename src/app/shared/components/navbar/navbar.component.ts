import { Component, Input } from '@angular/core';
import { environment } from '@environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
	@Input() showUser: boolean = true;
	@Input() title: string = environment.title;

	constructor(
	) { }

}
