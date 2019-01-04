import { Component, OnInit,Input } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-page2',
	templateUrl: './page2.component.html',
	styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

	constructor(private modalService: NgbModal) { }
	closeResult: string;

	ngOnInit() {
	}

	open(content) {
		this.modalService.open(content, { centered: true, backdropClass: 'lunar-image', size: 'lg' , ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
		  this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	  }
	
	  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
		  return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		  return 'by clicking on a backdrop';
		} else {
		  return  `with: ${reason}`;
		}
	  }
}
