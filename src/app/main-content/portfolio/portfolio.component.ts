import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProjectComponent } from './project/project.component';
import { ArrowComponent } from '../../shared/components/arrow/arrow.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TranslateService,TranslateModule} from '@ngx-translate/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, ArrowComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  animations:[
    trigger('slideAnimation', [
      state('hidden-large', style({
        transform: 'translateX(-25%)',
        opacity: 0
      })),
      state('visible-large', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      state('hidden-small', style({
        transform: 'translateY(-25%)',
        opacity: 0,
      })),
      state('visible-small', style({
        transform: 'translateY(0)',
        opacity: 1
      })),
      transition('hidden-large <=> visible-large', [
        animate('0.3s ease-in-out')
      ]),
      transition('hidden-small <=> visible-small',[
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class PortfolioComponent {
  isHovered: boolean = false;
  isSmallScreen: boolean = false;
  isMobile: boolean = false;
  isTablet: boolean = false;
  private destroy$ = new Subject<void>();

  projects: {name: string, imagePath: string, isHovered: boolean}[] = [
    {name: "Pokedex", imagePath: "/assets/img/portfolio/portfolio-pokedex-hover.svg", isHovered: false},
    {name: "Join", imagePath: "/assets/img/portfolio/portfolio-join-hover.svg", isHovered: false},
    {name: "Sharky", imagePath: "/assets/img/portfolio/portfolio-sharky-hover.svg", isHovered: false},
  ]

  constructor (private breakpointObserver: BreakpointObserver, public translate: TranslateService, private deviceService: DeviceDetectorService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isMobile = this.deviceService.isMobile();
    this.isTablet = this.deviceService.isTablet();

    this.breakpointObserver
      .observe(['(max-width: 700px)'])
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      })
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.destroy$.next();
    this.destroy$.complete();
    this.isMobile = false;
    this.isTablet = false;
  }

  onHover(hoveredProject: number) {
   this.projects[hoveredProject].isHovered = true;
  }

  onLeave(hoveredProject: number) {
    this.projects[hoveredProject].isHovered = false;
  }

  onMobile(hoveredProject: number) {
    this.projects[hoveredProject].isHovered = true;
  }

  getAnimationState(projectIndex: number): string {
    const isVisible = this.projects[projectIndex].isHovered === true;
    const screenSize = this.isSmallScreen ? 'small' : 'large';
    return isVisible ? `visible-${screenSize}` : `hidden-${screenSize}`;
  }
}
