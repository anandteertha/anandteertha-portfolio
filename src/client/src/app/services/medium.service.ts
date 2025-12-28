import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError } from 'rxjs';
import { of } from 'rxjs';

export interface MediumArticle {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  content: string;
  image?: string;
  author: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class MediumService {
  private readonly mediumRssUrl = 'https://medium.com/feed/@raoanandteertha';
  private readonly corsProxy = 'https://api.rss2json.com/v1/api.json?rss_url=';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<MediumArticle[]> {
    // Using rss2json API to convert RSS to JSON and handle CORS
    const apiUrl = `${this.corsProxy}${encodeURIComponent(this.mediumRssUrl)}`;
    
    return this.http.get<any>(apiUrl).pipe(
      map((response) => {
        if (response.status === 'ok' && response.items) {
          return response.items.map((item: any) => this.parseArticle(item));
        }
        return [];
      }),
      catchError((error) => {
        console.error('Error fetching Medium articles:', error);
        return of([]);
      })
    );
  }

  private parseArticle(item: any): MediumArticle {
    // Extract image from thumbnail, content, or description
    const content = item.content || item.description || '';
    let image = item.thumbnail || item.enclosure?.link;
    
    if (!image) {
      const imageMatch = content.match(/<img[^>]+src="([^"]+)"/i);
      image = imageMatch ? imageMatch[1] : this.extractImageFromContent(content);
    }
    
    // Clean HTML from description
    const description = this.stripHtml(item.description || content.substring(0, 300));
    
    // Extract categories/tags
    const categories = item.categories || [];

    return {
      title: item.title || 'Untitled',
      link: item.link || '',
      pubDate: item.pubDate || new Date().toISOString(),
      description: description.length > 200 ? description.substring(0, 200) + '...' : description,
      content: content,
      image: image,
      author: item.author || 'Anandteertha Rao',
      categories: categories
    };
  }

  private extractImageFromContent(content: string): string | undefined {
    // Try multiple patterns to find images
    const patterns = [
      /<img[^>]+src="([^"]+)"/i,
      /<img[^>]+src='([^']+)'/i,
      /https?:\/\/[^\s<>"]+\.(jpg|jpeg|png|gif|webp)/i
    ];

    for (const pattern of patterns) {
      const match = content.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }

    return undefined;
  }

  private stripHtml(html: string): string {
    if (!html) return '';
    
    // Remove HTML tags
    let text = html.replace(/<[^>]*>/g, '');
    
    // Decode HTML entities
    const textarea = document.createElement('textarea');
    textarea.innerHTML = text;
    text = textarea.value;
    
    // Clean up whitespace
    text = text.replace(/\s+/g, ' ').trim();
    
    return text;
  }
}

