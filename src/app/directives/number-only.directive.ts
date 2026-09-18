// numbers-only.directive.ts
import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {
  private el = inject(ElementRef);

  @HostListener('input')
  onInput() {
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.replace(/[^0-9]/g, '');
  }
}