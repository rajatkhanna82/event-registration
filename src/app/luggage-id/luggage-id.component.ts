import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ParticipantDataService } from 'app/participant-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-luggage-id',
  templateUrl: './luggage-id.component.html',
  styleUrls: ['./luggage-id.component.css']
})
export class LuggageIdComponent implements OnInit {
  sub: Subscription;
  category: string;
  day: string;
  participants: any[];
  qrSize: number = 100;
  pages: number[];
  maxInPage: number = 8;
  constructor(
    private participantService : ParticipantDataService,
    private route: ActivatedRoute,

  ) { }

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


}
