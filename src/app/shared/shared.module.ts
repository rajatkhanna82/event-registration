import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyQrcodeGeneratorComponent } from './my-qrcode-generator/my-qrcode-generator.component';
import { FitTextDirective } from './fit-text.directive';
@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FitTextDirective, MyQrcodeGeneratorComponent],
  declarations: [ MyQrcodeGeneratorComponent, FitTextDirective]
})
export class SharedModule { }
