import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userValue: string;
  @ViewChild('paraRef') paraRef: ElementRef;

  addText(element) {
    console.log(element.value)
    this.userValue = element.value
  }

  changeColor() {
    console.log(this.paraRef)
    this.paraRef.nativeElement.style.color = 'red';
  }



  






  
  getElement(element) {
    console.log(element.height);
    element.src = 'assets/angular.png';
  }
}
