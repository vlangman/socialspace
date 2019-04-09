import { Component, OnInit } from '@angular/core';
import { WebpService } from './services/webp.service';
// import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	title = 'SocialSpace';
	WebglSupported: Boolean;

	ngOnInit(){
		// this.initFacebookService();
	}

	constructor(private webpService : WebpService) {
		console.log(webpService.detectDevice())
	}

	// private initFacebookService(): void {
	// 	const initParams: InitParams = { xfbml: true, version: 'v3.2' };
	// 	this.facebookService.init(initParams);
	// }



}
