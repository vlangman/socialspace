import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AngularFireFunctions } from '@angular/fire/functions';
import { contactRequest } from "../models/contact.model";

@Injectable()
export class EmailService {

  constructor(
	  	private http: HttpClient,
		private fns: AngularFireFunctions
	) { 
  }
  canSend: Boolean = false;

  	sendQuote(quoteReq: contactRequest, captchaResponse: string){


		if (captchaResponse != ""){
			this.canSend = true;
		} else {
			this.canSend = false;
		}
		


		if (!quoteReq.name || !quoteReq.emailAddress  || !quoteReq.instagram){
			console.log('ERROR: incorrect information for email  request form. no email sent');
			return null;
		}

		const obj = {
			name : quoteReq.name,
			emailAddress : quoteReq.emailAddress,
			details : quoteReq.details,
			instagram : quoteReq.instagram,
		}

		const httpOptions = {
			headers: new HttpHeaders({
				'Content-Type': 'application/x-www-form-urlencoded'
			})
		};
		
		// const httpOptions2 = {
		// 	headers: new HttpHeaders({
		// 		'Content-Type': 'application/json'
		// 	})
		// }

		let body = new URLSearchParams();
		body.set('response', captchaResponse);

		let body2 = new URLSearchParams();
		body2.append('name', quoteReq.name);
		body2.append('emailAddress',quoteReq.emailAddress);
		body2.append('details', quoteReq.details);
		body2.append('instagram', quoteReq.instagram);


		const baseUrl1 = "https://ec2-18-216-55-184.us-east-2.compute.amazonaws.com:3000/validate_captcha";
		const baseUrl2 = "https://ec2-18-216-55-184.us-east-2.compute.amazonaws.com:3000/email";

		//testing urls
		// const baseUrl1 = "http://127.0.0.1:3000/validate_captcha";
		// const baseUrl2 = "http://127.0.0.1:3000/email";
		
		this.http.post(baseUrl1, body.toString(),httpOptions).subscribe(data=>{
			console.log("captcha check ");
			if (data['success'] == true){
				if (this.canSend){
					console.log("sending mail");
					this.http.post(baseUrl2, body2.toString(), httpOptions).subscribe(data=>{
						console.log(data);
					});
				}
			
			}else{
				console.log("captcha failed");
			}
		})

	

	

	
	}
}
