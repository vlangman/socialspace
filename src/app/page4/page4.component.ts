import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,  Validators, FormBuilder } from '@angular/forms';
import { EmailService } from '../services/email.service';
import { WebpService } from '../services/webp.service';

@Component({
  selector: 'app-page4',
  providers: [EmailService],
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {
  submitted = false;
  captchaValid: string = "";
  showGalaxy:  boolean = false;

  contactForm: FormGroup;

  nameValid: boolean = true;
  emailValid: boolean = true;
	instagramValid: boolean = true;
	
	WebpSupported: boolean;

  constructor(private formbuilder: FormBuilder, private emailService: EmailService,private webpService : WebpService) { }

  ngOnInit() {
		this.WebpSupported = this.webpService.webpSupport();
    this.contactForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('',[Validators.required, Validators.email]),
      details: new FormControl(''),
      instagram: new FormControl('',[Validators.required]),
    });
  }
  

  resolved(captchaResponse: string) {
    this.captchaValid = captchaResponse;
  }

  onSubmit(){
	var canSubmit: Boolean = true;	

    var	contactform = {
		name: this.contactForm.value.name,
		emailAddress: this.contactForm.value.emailAddress,
		details: this.contactForm.value.details,
		instagram: this.contactForm.value.instagram,
   }

  	if (this.contactForm.controls.name.invalid){
		this.nameValid = false;
		canSubmit = false;
	}else{
		this.nameValid = true;
	}

	if (this.contactForm.controls.instagram.invalid){
		this.instagramValid = false;
		canSubmit = false;
	}else{
		this.instagramValid = true;
	}

	if (this.contactForm.controls.emailAddress.invalid){
		this.emailValid = false;
		canSubmit = false;
	}else{
		this.emailValid = true;
	}

    // stop here if form is invalid
    if (this.contactForm.invalid == true) {
			return;
		}


   	console.log(this.contactForm.value);
	   if (canSubmit)
	   {
			this.emailService.sendQuote(contactform, this.captchaValid);
			this.submitted = true;
	   }
 }
  

}
