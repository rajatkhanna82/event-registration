import { HallPassPrintComponent } from './hall-pass-print/hall-pass-print.component';
import { IdPrintComponent } from './id-print/id-print.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', pathMatch: 'full', component: FileReaderComponent},
  { path: 'printId', pathMatch: 'full', component: IdPrintComponent },
  { path: 'printHallEntry', pathMatch: 'full', component: HallPassPrintComponent }
]