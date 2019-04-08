import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { RecaptchaModule } from 'ng-recaptcha';

import { AngularFireModule }   from '@angular/fire';
import { AngularFireFunctions } from '@angular/fire/functions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FacebookModule } from 'ngx-facebook';

import { DeviceDetectorService } from 'ngx-device-detector';


var  config = {
  apiKey: "AIzaSyDOcEYXrbtgSZvalIrsEfYZB2t5EdhSyLQ",
  authDomain: "socialspace.co.za",
  projectId: "SocialSpace",
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    FooterComponent,
  ],
  imports: [
    RecaptchaModule,
    AngularFireModule.initializeApp(config),
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ScrollToModule.forRoot(),
    FacebookModule.forRoot(),
  ],
  providers: [AngularFireFunctions,DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
