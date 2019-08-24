import {Directive, HostBinding, HostListener, ElementRef} from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;  //to default value tha ine false (den ine anixto to dropdown)
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {  //@HostListener  gia to click
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
