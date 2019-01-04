import { Component, OnInit } from '@angular/core';
import { ScrollLinkService } from '../services/scroll-link.service';
import { ScrollToConfigOptions, ScrollToService } from '@nicky-lenaers/ngx-scroll-to';


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

  constructor(private scrollService: ScrollLinkService) { }

  ngOnInit() {
  }

    
  public scrollToPackages(){
    this.scrollService.triggerScrollTo(packages);
  }

}
