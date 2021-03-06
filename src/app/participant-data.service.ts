import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantDataService {
  participants = [];

  constructor() { }

  createParticipantObj(val) {
    const firstName = val.Name.substr(0,val.Name.indexOf(' ')),
      lastName = val.Name.substr(val.Name.indexOf(' ') + 1);
     return {
      firstName: firstName || '',
      lastName : lastName || '',
      seating: val.Seating,
      id: val.ID || ''
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
