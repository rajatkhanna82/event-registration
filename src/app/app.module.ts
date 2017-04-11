import { ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { IdPrintComponent } from './id-print/id-print.component';
import { RouterModule } from "@angular/router";
import { ParticipantDataService } from './participant-data.service';
import { HallPassPrintComponent } from './hall-pass-print/hall-pass-print.component';

@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    IdPrintComponent,
    HallPassPrintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ParticipantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
