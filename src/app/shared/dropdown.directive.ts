import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.show') isShow = false;

  @HostListener('click') toggleopen() {
    this.isShow = !this.isShow;

  }
  constructor() { }

}
