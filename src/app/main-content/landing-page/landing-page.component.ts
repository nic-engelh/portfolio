import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent implements OnInit, OnDestroy {
  arrowImages = [
    'assets/img/animation/arrow/arrow_1.svg',
    'assets/img/animation/arrow/arrow_2.svg',
    'assets/img/animation/arrow/arrow_3.svg',
    'assets/img/animation/arrow/arrow_4.svg',
    'assets/img/animation/arrow/arrow_5.svg',
  ];

  currentImageIndex = 1;

  intervalId: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentImageIndex =
            (this.currentImageIndex + 1) % this.arrowImages.length;
        }, 5000);
      });
    });

  }



  startAnimation() {

  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
}
