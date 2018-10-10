import { ValuablesPrintComponent } from './valuables-print/valuables-print.component';
import { HallPassPrintComponent } from './hall-pass-print/hall-pass-print.component';
import { IdPrintComponent } from './id-print/id-print.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { LuggageIdComponent } from './luggage-id/luggage-id.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  { path: 'app', pathMatch: 'full', component: FileReaderComponent},
  { path: 'NameTag', pathMatch: 'full', component: IdPrintComponent },
  { path: 'ProgramPass', pathMatch: 'full', component: HallPassPrintComponent },
  { path: 'Valuables', pathMatch: 'full', component: ValuablesPrintComponent },
  { path: 'LuggageTag', pathMatch: 'full', component: LuggageIdComponent }
]