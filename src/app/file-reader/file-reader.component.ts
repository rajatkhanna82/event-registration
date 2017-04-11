import { ParticipantDataService } from './../participant-data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.css']
})
export class FileReaderComponent {
   categoryList: any;
   filesToUpload: Array<File>;

   constructor(
      private participantService : ParticipantDataService,
      private router: Router) {
      this.filesToUpload = [];
  }

  upload() {
    this.readCSV(this.filesToUpload).then((result) => {
      var array = this.csvToArray(result);
      // var arrayFormatado = this.formatarResultado(array);
      // console.log(arrayFormatado);
      this.participantService.setParticipantData(array);
      this.categoryList = this.participantService.getListOfCategories();
      console.log(array);

    }, (error) => {
      console.error(error);
    });
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  readCSV(files: Array<File>) {
    return new Promise((resolve, reject) => {
      var fileReader = new FileReader();

      fileReader.onload = function (e) {
        resolve(fileReader.result);
        return;
      };

      fileReader.readAsText(files[0]);
    });
  }

  csvToArray(csv: any) {
    var array = csv.split("\n");
    var lines = this.removeEmptyRows(array);
    var result = [];

    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");

      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = currentline[j];
      }

      result.push(obj);
    }

    return result;
  }

  removeEmptyRows(array: any) {
    return array.filter(line => line !== "");
  }

  print(cat) {
     this.router.navigate(['/print'], {queryParams: {category: cat}});
  }

}
