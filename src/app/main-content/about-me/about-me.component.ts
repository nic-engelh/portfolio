import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { clearInterval } from 'node:timers';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy {

  arrowImages = [
    'src/assets/img/animation/arrow-left/arrow-left-1.svg',
    'src/assets/img/animation/arrow-left/arrow-left-2.svg',
    'src/assets/img/animation/arrow-left/arrow-left-3.svg'
  ]
  currentImageIndex: number = 0;
  intervalId: any;

  constructor (private ngZone: NgZone) { };

  ngOnInit(): void {
    this.startAnimation();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.intervalId);
  }

  startAnimation () {
    this.ngZone.runOutsideAngular(() => {
      this.intervalId = setInterval(() => {
        this.ngZone.run(() => {
          this.currentImageIndex =
            (this.currentImageIndex + 1) % this.arrowImages.length;
        });
      }, 350);
    });


  }



}
