import { Component } from '@angular/core';
import { WebpService } from './services/webp.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'SocialSpace';
	WebglSupported: Boolean;



	constructor(private webpService : WebpService) {
		console.log(webpService.detectDevice())
	}




}
