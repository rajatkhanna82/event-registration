import { Injectable } from '@angular/core';

@Injectable()
export class FileReaderService {
  participants: any[];
  constructor() { }

  saveLocally (participants) {
    this.participants = JSON.parse(JSON.stringify(participants));
  }

  removeLocally() {
    this.participants = [];
  }

  addToList (participants) {
    this.participants.concat(participants);
  }

  getList () {
    return this.participants;
  }
}
