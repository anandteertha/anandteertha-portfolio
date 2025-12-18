import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = [
    { name: 'Rust', level: 90, icon: '🦀' },
    { name: 'Clap', level: 85, icon: '⚙️' },
    { name: 'TOML', level: 80, icon: '📝' },
    { name: 'CLI Development', level: 85, icon: '💻' },
    { name: 'React', level: 80, icon: '⚛️' },
    { name: 'FastAPI', level: 75, icon: '🚀' },
    { name: 'Python', level: 85, icon: '🐍' },
    { name: 'TypeScript', level: 80, icon: '📘' }
  ];
}

