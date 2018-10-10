import { Injectable } from '@angular/core';

@Injectable()
export class ParticipantDataService {
  participants = [];

  constructor() { }

  createParticipantObj(val) {

    console.log(val);
     return {
      category: val.BSPID.substr(0, 1) === 'V' ? 'vol' : 'part',
      FirstName: val.FirstName,
      LastName : val.LastName,
      Sex: val.Sex,
      LodgeName: val.LodgeName,
      ID: val.ID || '',
      BSPID: val.BSPID,
      Room: val.Room,
      LodgeBedNumber: val.LodgeBedNumber,
      ContactID: val.ContactID
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
