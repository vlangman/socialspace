import { Injectable } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';


@Injectable()
export class ScrollLinkService {
 
  constructor(private _scrollToService: ScrollToService) { }



	public triggerScrollTo(config: ScrollToConfigOptions) {
		this._scrollToService.scrollTo(config).subscribe(
			value => { },
			err => console.error(err) // Error is caught and logged instead of thrown
		);
	}
}