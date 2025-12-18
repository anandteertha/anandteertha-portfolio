import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
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
      period: '2024 - Present',
      type: 'part-time',
      isCurrent: true,
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
      location: 'Remote',
      period: 'July 2022 - April 2025',
      type: 'full-time',
      description: [
        'Led the development of a smart Python code editor, allowing users to run custom scripts securely',
        'Worked on a 3D piping system renderer using Three.js for interactive visualization',
        'Developed full-stack solutions using TypeScript, Angular, and Python with comprehensive testing',
        'Managed AWS infrastructure and CI/CD pipelines using GitLab',
        'Conducted code reviews and maintained high code quality standards'
      ],
      technologies: ['TypeScript', 'JavaScript', 'Angular', 'Three.js', 'Python', '.NET', 'AWS', 'GitLab', 'JIRA', 'pytest', 'Jasmine/Karma', 'Jest', 'Cypress', 'XUnit Test']
    },
    {
      id: 'outrider',
      title: 'Software Developer Intern',
      company: 'Outrider.live',
      location: 'Remote',
      period: 'September 2020 - June 2021',
      type: 'internship',
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
    document.body.style.overflow = 'auto';
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

