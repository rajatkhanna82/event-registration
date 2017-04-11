import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantDataService {
  participants = [];

  constructor() { }

  createParticipantObj(val) {
    return {
      firstName: val.Name.split(' ')[0],
      lastName : val.Name.split(' ')[1],
      email: val.EMail,
      seating: val.Seating,
      id: val.ID,
      txnId: val.TxnId,
      venueId: val['Venue Id']
    }
  }

  setParticipantData (data) {
    this.participants = data.map((val)=>{
      return this.createParticipantObj(val);
    });
  }

  getAllParticipants() {
    return this.participants;
  }

  getParticipantsByCategory(category) {
    return this.participants.filter((val)=> {
      return val.seating === category;
    });
  }

  getListOfCategories() {
    return this.participants
      .map((val)=>{
        return val.seating;}
      ).filter((item, i, ar)=>{
        return ar.indexOf(item) === i;
      });
  }
}
