
import { Directive, ElementRef, Renderer, Input, AfterViewInit, HostListener, OnInit, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[fittext]'
})
export class FitTextDirective implements AfterViewChecked, OnInit {

  @Input('fittext') fittext: any;
  @Input('container') container: any;
  @Input('activateOnResize') activateOnResize: boolean;
  @Input('maxFontSize') maxFontSize: number;
  @Input('minFontSize') minFontSize: number;
  private fontSize: number;
  private speed: number = 1.05;

  constructor(public el: ElementRef, public renderer: Renderer) {
  }

  setFontSize(fontSize: number) {

      this.fontSize = fontSize ;
      return this.el.nativeElement.style.setProperty('font-size', this.fontSize.toString()+'vw');
  }

  calculateFontSize(fontSize, speed){
    // TODO Do with Gauss
    return Math.max(Math.floor(fontSize*10/speed)/10,this.minFontSize) ;
  }

  checkOverflow(parent:any, children:any) {
    let overflowX = children.scrollWidth - parent.clientWidth;
    let overflowY = children.clientHeight - parent.clientHeight;
    console.log(" width ",children.innerText ,children.scrollWidth, parent.clientWidth);
    console.log("height ",children.clientHeight, parent.clientHeight);

    return (overflowX > 1 || overflowY > 1);
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(this.activateOnResize && this.fittext) {
      this.setFontSize(this.container.clientWidth);
      this.ngAfterViewChecked();
    }
  }

  ngOnInit() {


    if (this.fittext) {
      let compFontSizePX = window.getComputedStyle(this.el.nativeElement).fontSize;
      let fontSizeVW = +compFontSizePX.slice(0, compFontSizePX.length-2) *100 / window.innerWidth;
      this.maxFontSize = +this.maxFontSize || fontSizeVW;
      this.minFontSize = +this.minFontSize || this.maxFontSize/2;
      this.setFontSize(this.maxFontSize);
      this.el.nativeElement.style.setProperty('will-change', 'content');
    }
  }

  ngAfterViewChecked() {
    if (this.fittext) {
      let overflow = this.checkOverflow(this.container, this.el.nativeElement);
      if(overflow && this.fontSize > this.minFontSize) {
        this.setFontSize(this.calculateFontSize(this.fontSize, this.speed));
        this.ngAfterViewChecked();
      }
    }
  }
}