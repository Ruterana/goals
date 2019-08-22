
// import { Directive } from '@angular/core';

// @Directive({
//   selector: '[appStrikethrough]'
// })
// export class StrikethroughDirective {

//   constructor() { }

// }
// import { Directive,ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appStrikethrough]'
// })
// export class StrikethroughDirective {
//   constructor(private elem:ElementRef){
//     this.elem.nativeElement.style.textDecoration='line-through';
//   }

// }

// import { Directive,ElementRef} from '@angular/core';

// @Directive({
//   selector: '[appStrikethrough]'
// })
// export class StrikethroughDirective {

//   constructor(private elem:ElementRef){ }
  
//   private textDeco(action:string){
//     this.elem.nativeElement.style.textDecoration=action;

//   }
// }

import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}
//this is for pipes




