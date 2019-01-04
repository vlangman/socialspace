import { Component, OnInit } from '@angular/core';
import { ScrollLinkService } from '../services/scroll-link.service';
import { ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
 
const packages: ScrollToConfigOptions = {
  // container: 'packagesContainer',
  target: 'PackagesPage',
  duration: 2000,
  easing: 'easeOutElastic',
  offset: 20
};

const about: ScrollToConfigOptions = {
  // container: 'packagesContainer',
  target: 'AboutUsPage',
  duration: 2000,
  easing: 'easeOutElastic',
  offset: 20
};

const contact: ScrollToConfigOptions = {
  // container: 'packagesContainer',
  target: 'ContactUsPage',
  duration: 2000,
  easing: 'easeOutElastic',
  offset: 20
};

@Component({
  selector: 'app-navbar',
  providers: [ScrollLinkService],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  test : boolean = true;
  constructor(public scrollService: ScrollLinkService) { }

  ngOnInit() {
  }

  public scrollToPackages(){
    this.scrollService.triggerScrollTo(packages);
  }

  
  public scrollToAboutUs(){
    this.scrollService.triggerScrollTo(about);
  }

  
  public scrollToContactUs(){
    this.scrollService.triggerScrollTo(contact);
  }
}
