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

  ngOnInit() {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollY = window.scrollY || window.pageYOffset;
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      const rect = heroSection.getBoundingClientRect();
      const heroHeight = heroSection.offsetHeight;
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
    // Cleanup if needed
  }
}

