import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: 'full-time' | 'part-time' | 'internship';
  description: string[];
  technologies: string[];
  isCurrent?: boolean;
  logo?: string;
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      id: 'khayrallah',
      title: 'Software Developer',
      company: 'Khayrallah Center for Lebanese Diaspora Studies',
      location: 'NC State University',
      period: '2025 - Present',
      type: 'part-time',
      isCurrent: true,
      logo: 'assets/ncstate-logo.svg',
      description: [
        'Developing and maintaining web applications for research and data management',
        'Building responsive frontend interfaces using React with modern best practices',
        'Creating robust backend APIs using FastAPI with comprehensive test coverage using pytest',
        'Implementing stress testing and performance analysis using Locust to ensure system reliability under load',
        'Collaborating with research teams to translate requirements into scalable software solutions'
      ],
      technologies: ['React', 'FastAPI', 'Python', 'pytest', 'Locust', 'Stress Testing', 'Web Development']
    },
    {
      id: 'raychem',
      title: 'Full Stack Developer',
      company: 'Raychem (Chemelex)',
      location: 'Mumbai, India',
      period: 'July 2022 - April 2025',
      type: 'full-time',
      logo: 'assets/chemelex.png',
      description: [
        'Developed a .NET microservice to parse PCF files for 3D pipe design, eliminating reliance on costly legacy software and reducing 3D renderer parsing and generation time by 2 days, resulting in significant cost savings',
        'Built a 3D renderer in Three.js to visualize entire factory piping systems, improving the speed and clarity of design reviews',
        'Developed and published multiple Angular libraries on MyGet Package Manager, enabling cross-team reusability',
        'Implemented calculation formulas and mapper services while leveraging design patterns like Proxy, Abstract Factory, and Strategy to ensure scalability, maintainability, and consistency in business logic',
        'Optimized complex UI, improving application performance and UX by reducing loading time by 20% through API and database query optimizations',
        'Integrated a Python-based scripting editor within an Angular application, allowing users to write, execute, and customize real-time validations (\'Smart Scripts\'), which enabled on-the-fly modifications and automated warnings',
        'Enabled scripts to dynamically modify input fields and automate repetitive tasks, which reduced manual effort, minimized errors, and enhanced design efficiency',
        'Deployed on AWS Lambda for scalability and serverless execution, providing an efficient alternative to Flask running in a Docker container on EC2, which improved system performance and reduced operational costs',
        'Wrote automated tests, achieving 100% test coverage in pytest, Jest, and Cypress'
      ],
      technologies: ['TypeScript', 'JavaScript', 'Angular', 'Three.js', 'Python', '.NET', 'AWS', 'AWS Lambda', 'Docker', 'EC2', 'GitLab', 'MyGet', 'JIRA', 'pytest', 'Jasmine/Karma', 'Jest', 'Cypress', 'XUnit Test', 'Design Patterns', 'Microservices']
    },
    {
      id: 'outrider',
      title: 'Software Developer Intern',
      company: 'Outrider.live',
      location: 'Remote',
      period: 'September 2020 - June 2021',
      type: 'internship',
      logo: 'assets/outrider.png',
      description: [
        'Integrated Google Maps Drawing API to display live salesman locations and building backend APIs for seamless data exchange',
        'Oversaw task assignments, conducted code reviews, and coordinated directly with stakeholders',
        'Implemented real-time features using Socket.io for live updates',
        'Served as Scrum Master, facilitating agile development processes'
      ],
      technologies: ['Node.js', 'JavaScript', 'Socket.io', 'SQL', 'Google Maps API', 'Scrum', 'Leadership']
    }
  ];

  selectedExperience: Experience | null = null;
  showModal = false;

  openDetail(exp: Experience) {
    this.selectedExperience = exp;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedExperience = null;
    document.body.style.overflow = '';
  }

  getTypeBadgeClass(type: string): string {
    switch (type) {
      case 'full-time':
        return 'badge-fulltime';
      case 'part-time':
        return 'badge-parttime';
      case 'internship':
        return 'badge-internship';
      default:
        return '';
    }
  }
}

