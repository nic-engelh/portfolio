import { Component, OnInit, Inject } from '@angular/core';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { setInterval } from 'timers';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit{
  arrowImages = [
    'assets/img/animation/arrow/arrow_1.svg',
    'assets/img/animation/arrow/arrow_2.svg',
    'assets/img/animation/arrow/arrow_3.svg',
    'assets/img/animation/arrow/arrow_4.svg',
    'assets/img/animation/arrow/arrow_5.svg',
  ];

  currentImageIndex = 1;

  componentActive = true;

  intervalId: any;

  constructor(){ }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.startAnimation();
  }

  startAnimation () {
    setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.arrowImages.length;
      }, 500);
  }

  ngOnDestroy() {
  }
}
