import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit {

  imagesArrow = [
    '../../../assets/img/animation/arrow/arrow_1.svg',
    '../../../assets/img/animation/arrow/arrow_2.svg',
    '../../../assets/img/animation/arrow/arrow_3.svg',
    '../../../assets/img/animation/arrow/arrow_4.svg',
    '../../../assets/img/animation/arrow/arrow_5.svg'
  ];

  currentImage: string = '';
  animationIntervalId: any;
  currentImageIndex = 0;

  constructor () { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.showArrowAnimation();
  }

  showArrowAnimation () {
      this.animationIntervalId = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.imagesArrow.length;
    }, 200);
  }

}
