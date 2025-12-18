import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/anandteertha',
      icon: 'assets/github.png',
      color: '#24292e'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anandteertha-rao-0a25ba189/',
      icon: 'assets/linkedin.png',
      color: '#0077b5'
    },
    {
      name: 'Email',
      url: 'mailto:raoanandteertha@gmail.com',
      icon: 'assets/gmail.png',
      color: '#ea4335'
    }
  ];
}

