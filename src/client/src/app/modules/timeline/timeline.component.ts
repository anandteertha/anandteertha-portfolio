import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  imports: [CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements AfterViewInit {

  milestones = [
    {
      year: '2025',
      title: 'M.S. Computer Science',
      subtitle: 'NC State University',
      icon: '🎓',
      color: '#ff007c',
      description: 'Pursuing advanced studies in Computer Science',
      skills: ['DBMS', 'Algorithms', 'Software Engineering', 'Foundations of Data Science', 'Automated Learning & Data Analysis', 'IoT: Analytics']
    },
    {
      year: '2022-2025',
      title: 'Software Development Engineer',
      subtitle: 'Raychem (Chemelex)',
      icon: '💼',
      color: '#00ffff',
      description: '3 years building scalable solutions',
      skills: ['Angular', 'Three.js', 'Python', '.NET', 'AWS']
    },
    {
      year: '2020-2021',
      title: 'SDE Intern',
      subtitle: 'Outrider.live',
      icon: '🚀',
      color: '#39ff14',
      description: 'Full-stack development & team leadership',
      skills: ['Node.js', 'Socket.io', 'MongoDB']
    },
    {
      year: '2021-2022',
      title: 'IoT Developer',
      subtitle: 'Lung Capacity Check',
      icon: '🔬',
      color: '#7f00ff',
      description: 'Healthcare IoT solution',
      skills: ['IoT', 'Arduino', 'Android', 'Deep Learning']
    },
    {
      year: '2021',
      title: 'Research Publication',
      subtitle: 'Faculty Attendance System',
      icon: '📚',
      color: '#f5ff00',
      description: 'Published in Turkish Journal',
      skills: ['Facial Recognition', 'OpenCV', 'Node.js']
    }
  ];

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.observeMilestones();
  }

  observeMilestones() {
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      });

      const milestones = document.querySelectorAll('.milestone');
      milestones.forEach(milestone => observer.observe(milestone));
    }
  }

  navigateToProjects() {
    this.router.navigate(['/projects']);
  }

  navigateToExperience() {
    this.router.navigate(['/experience']);
  }
}

