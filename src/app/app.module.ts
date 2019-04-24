import { ValuablesPrintComponent } from './valuables-print/valuables-print.component';
import { HallPassPrintComponent } from './hall-pass-print/hall-pass-print.component';
import { SharedModule } from './shared/shared.module';
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
import { LuggageIdComponent } from './luggage-id/luggage-id.component';
import { BeddingTagComponent } from './bedding-tag/bedding-tag.component';


@NgModule({
  declarations: [
    AppComponent,
    FileReaderComponent,
    IdPrintComponent,
    HallPassPrintComponent,
    ValuablesPrintComponent,
    LuggageIdComponent,
    BeddingTagComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [ParticipantDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
