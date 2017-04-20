import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantDataService {
  participants = [];

  constructor() { }

  createParticipantObj(val) {
    let name = val.Name.split(' ');
    let firstName = name[0];
    let lastName = name.length > 2 ? name.slice(1,name.length).join(' '): name[1];

    return {
      firstName: firstName,
      lastName : lastName,
      seating: val.Seating,
      id: val.ID,
      txnId: val.TxnId,
      venueId: val['Venue Id']
    }
  }

  setParticipantData (data) {
    data.forEach((val)=>{
       this.participants.push(this.createParticipantObj(val));
    });
  }

  deleteParticipantData () {
    this.participants.splice(0, this.participants.length);
  }

  appendToParticipantData (data) {
    data.forEach(val => {
      this.participants.push(this.createParticipantObj(val));
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
