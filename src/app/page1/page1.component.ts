import { Component, OnInit } from '@angular/core';
import { ScrollLinkService } from '../services/scroll-link.service';
import { ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { WebpService } from '../services/webp.service';

const packages: ScrollToConfigOptions = {
  // container: 'packagesContainer',
  target: 'PackagesPage',
  duration: 2000,
  easing: 'easeOutElastic',
  offset: 20
};

@Component({
  selector: 'app-page1',
  providers: [ScrollLinkService],
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  WebpSupported: boolean;

  constructor(private scrollService: ScrollLinkService, private webpService: WebpService) { }

  ngOnInit() {
    this.WebpSupported = this.webpService.webpSupport();
  }
  

    
  public scrollToPackages(){
    this.scrollService.triggerScrollTo(packages);
  }

}
