import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;   //@HostBinding() import apo to angular/core

  constructor( private elRef: ElementRef, private render: Renderer2) { } //tha t oxrisimopiso me to Renderer

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }


  @HostListener ('mouseenter') mouseover(eventData: Event) {
    //prepi na gini import apo to angular/core , xrisimopio event mouseenter k kalo funciton
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener ('mouseleave') mouseleave(eventData: Event) {
    //prepi na gini import apo to angular/core , xrisimopio event mouseenter k kalo funciton
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
