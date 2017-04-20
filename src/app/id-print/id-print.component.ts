import { ParticipantDataService } from './../participant-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-id-print',
  templateUrl: './id-print.component.html',
  styleUrls: ['./id-print.component.css']
})
export class IdPrintComponent implements OnInit {
   sub: Subscription;
   category: string;
   participants: any[];
   pages: number[];

   constructor(
      private participantService : ParticipantDataService,
      private route: ActivatedRoute,
      private router: Router
   ) { }

   ngOnInit() {
      this.sub = this.route
         .queryParams
         .subscribe(params => {
            this.category = params['category'];
            this.participants = this.participantService.getParticipantsByCategory(this.category);
            this.pages = Array.from(Array(Math.ceil(this.participants.length / 6)).keys());
         })
   }

   fontSizeVW (fontSize) {
      if(typeof fontSize === 'number') {
        return fontSize;
      }

      let fontUnit = fontSize.slice(-2);

      if(fontUnit.toLowerCase() === 'vw') {
        return +fontSize.slice(0,-2)
      } else if(fontUnit.toLowerCase() === 'px') {
        return +fontSize.slice(0,-2)/window.innerWidth *100;
      }
   }
   participantsOfPage(page) {
     return this.participants.slice(page * 6, (page+1)*6);
   }



}
