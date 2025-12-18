import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  showScrollIndicator = true;
  indicatorBottom = '2rem';

  private resizeHandler = () => this.updateIndicatorPosition();

  ngOnInit() {
    this.updateIndicatorPosition();
    this.checkScrollPosition();
    window.addEventListener('resize', this.resizeHandler);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScrollPosition();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateIndicatorPosition();
  }

  private updateIndicatorPosition() {
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Hide indicator on very small screens (less than 480px width)
      if (viewportWidth < 480) {
        this.showScrollIndicator = false;
        return;
      }
      
      // Position indicator at bottom of viewport, but ensure it's within hero section
      // On mobile, use a smaller bottom value
      if (viewportWidth < 768) {
        // Small mobile: position at bottom with minimal padding
        this.indicatorBottom = '1rem';
      } else if (viewportWidth < 1024) {
        // Tablet: medium spacing
        this.indicatorBottom = '2rem';
      } else {
        // Desktop: standard spacing
        this.indicatorBottom = '2rem';
      }
    }
  }

  private checkScrollPosition() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      // Show indicator only when at the top of the page (within first 100px of scroll)
      // and hero section is still mostly visible
      this.showScrollIndicator = scrollY < 100 && rect.bottom > window.innerHeight * 0.5;
    }
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  }
}

