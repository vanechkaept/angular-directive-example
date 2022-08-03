import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[dir]',
  host: {
    '(mouseover)': 'onHover($event)',
  },
})
export class CustomDirective {
  @Input() textSize = '20px';
  @Input() defaultTextSize = '1rem';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    console.log('sdsdad');
    // this.elementRef.nativeElement.style.fontWeight = 'bold';
    setTimeout(() => this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      this.defaultTextSize
    ));
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
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      this.textSize
    );
  }

  @HostListener('mouseout', ['$event'])
  onOut(event: KeyboardEvent) {
    console.log(event);
    this.changeFontWeight('normal');
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontSize',
      this.defaultTextSize
    );
  }

  private changeFontWeight(newValue: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'fontWeight',
      newValue
    );
  }
}
