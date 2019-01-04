import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentFaq: number = -1;

  faqQuestions: string[] = [
	  'What type of growth should I expect?',
	  'How can you guarantee I will gain followers and increase engagement?',
	  'Do you sell fake followers?',
	  'Isn’t it cheaper to buy fake followers?',
	  'How do I cancel?',
	  'How does it work?',
	  'Is it safe?',
	  'Will you be posting content on my behalf?',
	]

	faqAnswers: string[] = [
		'The growth ratio of your account truly depends on the quality of the content your account produces. Content is king and truly dictates performance and growth. We promote you account across Instagram by exposing it to thousands of targeted users who might be Interested in it, if they like what they see, they will then choose to follow you. Our experts will consult with you and help you achieve maximum results.',

		'Results can vary from account to account, as we are dealing with the decisions of real people whether or not to follow you back. The quality of your content has a significant impact. However, currently, on average, our clients are gaining 250-1000+ highly targeted followers per month.',

		'WE DO NOT. In fact, we highly advice against it. We focus on organically growing your account with 100% real active Instagram users. They will interact, like, and comment on your posts because they are targeted towards what your business offers. These are not random users from foreign countries. We are able to target your people by location, interests, and gender.',

		'Buying fake followers is one of the worst things you can do for your business on Instagram. When you purchase “fake” followers or “bots” you merely purchase bogus accounts created by a computer which Instagram will eventually delete. These “followers” will not interact with your brand or purchase from you. In fact, it looks bad for your business or blog when you have a high number of followers but very few likes and comments on your posts. Anyone can tell that those followers are fake and were purchased and therefore lose trust and respect for your business.',

		'You can click the cancel account link on your dashboard at anytime. It is 100% hassle free and immediate. If you don’t feel our services are increasing your sales and providing a positive ROI for your business, you can cancel anytime without any fees.',

		'Our account managers use our custom software to automate actions you allow (liking, following, unfollowing), on your account’s behalf to help you grow your audience organically.The platform works 24/7 to interact with relevant users and get them to follow you. All the growth is 100% real, organic and targeted. By implementing audience filtering & targeting options we are able to focus on the audiences you specify and consider relevant.',

		'Our service is 100% we make sure we always operate within Instagram rate limits, thus keeping your account safe at all times, while still providing you fast growth! We help thousands of amazing brands and influencers grow their audience organically using unique automated marketing techniques and we’ve never had any reports related to account suspensions or banning.',

		'No. This is not included in any of our growth service packages. You will be in charge of creating the content for your account. However, we do offer these services starting at R5000/mo. Please contact us at info@socialspace.co.za for additional information.',
	  ]

  constructor() { }

  ngOnInit() {
  }

  openFaq(faqNum: number){
	if (this.currentFaq == faqNum){
		this.currentFaq = -1;
	} else{
		this.currentFaq = faqNum;
	}
  }

}
