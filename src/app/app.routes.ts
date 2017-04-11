import { IdPrintComponent } from './id-print/id-print.component';
import { FileReaderComponent } from './file-reader/file-reader.component';
import { Routes } from "@angular/router";

export const ROUTES: Routes = [
   {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    pathMatch: 'full',
    component: FileReaderComponent
  },
  {
    path: 'print',
    pathMatch: 'full',
    component: IdPrintComponent
  }

]