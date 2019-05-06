import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit, ViewChildren, ElementRef, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ParticipantDataService } from '../participant-data.service';

@Component({
  selector: 'app-hall-pass-print',
  templateUrl: './hall-pass-print.component.html',
  styleUrls: ['./hall-pass-print.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class HallPassPrintComponent implements OnInit, AfterViewInit {
sub: Subscription;
   category: string;
   day: string;
   participants: any[];
   qrSize: number = 100;
   pages: number[];
   maxInPage: number = 8;
   dates: string[] = ['20171014', '20171015'];


   constructor(
      private participantService : ParticipantDataService,
      private route: ActivatedRoute,
      private router: Router,
      private el: ElementRef
   ) { }
   ngAfterViewInit() {
     //Called after ngAfterContentInit when the component's view has been initialized.
     //Applies to components only. Add 'implements AfterViewInit' to the class.
     console.log(this.el);
   }
   ngOnInit() {

      this.sub = this.route
         .queryParams
         .subscribe(params => {
            this.category = params['category'];
            this.day = params['day'];
            this.participants = this.participantService.getParticipantsByCategory(this.category);
            this.pages = Array.from(Array(Math.ceil(this.participants.length / this.maxInPage)).keys());

         })
   }

   participantsOfPage(page) {
     return this.participants.slice(page * this.maxInPage, (page+1)*this.maxInPage);
   }

   textForQRCode(participant) {
      let qrCode = {
         participantID: participant.ID,
         contactID: participant.ContactID
      }
      return  JSON.stringify(qrCode);
   }


}
