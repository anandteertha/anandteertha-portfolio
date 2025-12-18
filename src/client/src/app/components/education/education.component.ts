import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  logo: string;
  secondaryLogo?: string;
  isCurrent?: boolean;
  courses: {
    completed?: Array<{ name: string; grade: string }>;
    upcoming?: string[];
  };
  achievements?: string[];
}

@Component({
  selector: 'app-education',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  educations: Education[] = [
    {
      id: 'ncstate-ms',
      degree: 'Master of Science in Computer Science',
      institution: 'North Carolina State University',
      location: 'Raleigh, NC',
      period: 'August 2025 - May 2027',
      gpa: '4.11/4.0',
      logo: 'assets/ncstate-logo.svg',
      isCurrent: true,
      courses: {
        completed: [
          { name: 'Design and Analysis of Algorithms', grade: 'A' },
          { name: 'Software Engineering', grade: 'A' },
          { name: 'Database Management Systems', grade: 'A+' }
        ],
        upcoming: [
          'IoT Analytics',
          'Foundations of Data Science',
          'Automated Learning and Data Analysis'
        ]
      }
    },
    {
      id: 'mumbai-bachelors',
      degree: 'Bachelor of Engineering in Computer Engineering',
      institution: 'SIES Graduate School of Technology',
      location: 'Mumbai University, Mumbai, India',
      period: '2018 - 2022',
      gpa: '9.5/10 CGPA',
      logo: 'https://siesgst.edu.in/images/sies_gst_logonew.jpg',
      secondaryLogo: 'https://mum.digitaluniversity.ac/user/pages/images/logo_university-of-mumbai.jpg',
      courses: {},
      achievements: [
        'Essar Endowment Award (10/10 pointer in Second Year)',
        'Overall CGPA: 9.5/10'
      ]
    }
  ];

  selectedEducation: Education | null = null;
  showModal = false;

  openDetail(edu: Education) {
    this.selectedEducation = edu;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedEducation = null;
    document.body.style.overflow = '';
  }
}

