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
		const obj2 = {
			secret: '6Lepj4YUAAAAAAkRXCXD5fJqLLvkFju6zlMsGvhz',
			response: captchaResponse,
		}	

	
		const httpOptions = {
			headers: new HttpHeaders({
				'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type,  X-Requested-With, Access-Control-Allow-Headers, Authorization, Origin',				
				'Access-Control-Allow-Origin': 'https://socialspace.co.za',
				'Content-Type':'application/x-www-form-urlencoded'
			})
		};

		const baseUrl1 = "https://www.google.com/recaptcha/api/siteverify";
		const baseUrl2 = "https://us-central1-socialspace-9c07d.cloudfunctions.net/sendEmail/email";

	
		// this.http.post(baseUrl1, obj2, httpOptions).subscribe(data=>{
			// console.log("sending mail2");
			// if (data['success'] == true){
				if (this.canSend){
					console.log("sending mail");
					this.http.post(baseUrl2,obj, httpOptions).subscribe(data=>{
						console.log(data);
					});
				}
			// }
		// })

	

	

	
	}
}
