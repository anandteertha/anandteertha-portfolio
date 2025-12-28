import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumService, MediumArticle } from '../../services/medium.service';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  articles: MediumArticle[] = [];
  loading = true;
  error: string | null = null;
  mediumProfileUrl = 'https://medium.com/@raoanandteertha';

  constructor(private mediumService: MediumService) {}

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.loading = true;
    this.error = null;

    this.mediumService.getArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading articles:', err);
        this.error = 'Failed to load articles. Please try again later.';
        this.loading = false;
      }
    });
  }

  formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  }

  openArticle(link: string) {
    window.open(link, '_blank', 'noopener,noreferrer');
  }

  handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img) {
      img.style.display = 'none';
    }
  }
}

