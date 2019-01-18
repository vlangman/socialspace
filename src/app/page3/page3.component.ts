import { Component, OnInit } from '@angular/core';
import { WebpService } from '../services/webp.service';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  WebpSupported: boolean;


  constructor(private webpService : WebpService) { }

  ngOnInit() {
    this.WebpSupported = this.webpService.webpSupport();
  }

}
