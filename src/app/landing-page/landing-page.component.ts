import { Component, OnInit } from '@angular/core';
import { WebpService } from '../services/webp.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  WebpSupported: boolean;


  constructor(private webp: WebpService) { }

  
  ngOnInit() {
   
    this.WebpSupported = this.webp.webpSupport();
  }

}
