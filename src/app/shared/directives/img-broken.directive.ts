import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement
    console.log('♦ Esta imagén está rota', this.elHost)
    elNative.src='../../../assets/images/broken-img.jpg'
  }


  constructor( private elHost: ElementRef)
  {
    console.log(elHost)
  }

}
