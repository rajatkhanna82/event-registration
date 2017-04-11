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
         })
   }

}
