import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[dir]',
  host: {
    '(mouseover)': 'onHover($event)',
  },
})
export class CustomDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
  }

  @HostBinding('style.cursor') get getCursor() {
    return 'pointer';
  }

  @HostBinding('style.color') get getColor() {
    return 'red';
  }

  onHover(event: KeyboardEvent) {
    console.log(event);
    this.changeFontWeight('bold');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'green');
  }

  @HostListener('mouseout', ['$event'])
  onOut(event: KeyboardEvent) {
    console.log(event);
    this.changeFontWeight('normal');
  }

  private changeFontWeight(newValue: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontWeight',
      newValue
    );
  }
}
