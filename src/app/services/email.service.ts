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
				'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type,  X-Requested-With, Access-Control-Allow-Headers, Authorization, Origin',				
				'Access-Control-Allow-Origin': '*',
			})
		};

		const baseUrl1 = "127.0.0.1:3000/validate_captcha";
		const baseUrl2 = "127.0.0.1:3000/email";
		
		this.http.post(baseUrl1, {'response': captchaResponse}, httpOptions).subscribe(data=>{
			console.log("sending mail");
			if (data['success'] == true){
				if (this.canSend){
					this.http.post(baseUrl2,obj, httpOptions).subscribe(data=>{
						console.log(data);
					});
				}
			
			}else{
				console.log("captcha failed");
			}
		})

	

	

	
	}
}
