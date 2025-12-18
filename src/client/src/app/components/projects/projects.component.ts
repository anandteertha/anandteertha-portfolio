import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  features?: string[];
  technologies: string[];
  period: string;
  isHighlight?: boolean;
  github?: string;
  logo?: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 'neatd',
      title: 'Neatd',
      subtitle: 'Rust CLI Tool for Automated Folder Organization',
      period: 'September 2025 - Present',
      isHighlight: true,
      logo: 'assets/rust-logo.svg',
      description: [
        'Neatd is a Rust CLI application (with an optional daemon mode) for automated folder organization. Users define organization rules in a TOML configuration file, and Neatd applies those rules to classify files by patterns (extensions, naming conventions, and/or directories) and move them into consistent target structures.',
        'The CLI is built using Clap for ergonomic commands and flags, including config initialization and safe overwrite behavior. Internally, Neatd emphasizes correctness and maintainability: typed configuration parsing, explicit error handling (Result-based flows), and careful filesystem operations to prevent accidental data loss.'
      ],
      features: [
        'Config-driven behavior: rules live in a config.toml so workflows are reproducible and shareable',
        'Ergonomic CLI UX: subcommands/flags via Clap (e.g., init/config/run/daemon-style workflows)',
        'Safe configuration bootstrapping: create or overwrite config with explicit "force" semantics',
        'Deterministic organization: consistent rule application for predictable outcomes',
        'Robust error handling: clear failures and recoverable flows using idiomatic Rust patterns'
      ],
      technologies: ['Rust', 'Clap', 'TOML', 'CLI Development', 'Filesystem Automation']
    },
    {
      id: 'nutribite',
      title: 'NutriBite',
      subtitle: 'Food Recommendation System with RAG',
      period: 'August 2025 - December 2025',
      logo: 'assets/nutribite-logo.svg',
      description: [
        'Built a comprehensive food recommendation system as part of a Software Engineering course project. Developed a FastAPI backend with MySQL and Redis for caching and session management.',
        'Designed and implemented a BCNF-normalized MySQL database schema with efficient SQL queries for optimal performance.',
        'Created reusable React components for user food preferences and customization features.',
        'Implemented a RAG-based (Retrieval-Augmented Generation) recommender system for healthier menu suggestions.',
        'Followed SOLID principles and clean coding practices throughout the development lifecycle.',
        'Set up comprehensive testing with Pytest for backend and Cypress for frontend, integrated into CI pipeline.'
      ],
      features: [
        'FastAPI backend with MySQL database and Redis caching',
        'BCNF-normalized database schema with optimized SQL queries',
        'Reusable React components for food preferences and customization',
        'RAG-based recommender system for personalized menu suggestions',
        'Comprehensive testing with Pytest and Cypress in CI pipeline',
        'SOLID principles and clean code architecture'
      ],
      technologies: ['FastAPI', 'Python', 'MySQL', 'Redis', 'React', 'RAG', 'Pytest', 'Cypress', 'CI/CD', 'SOLID Principles', 'Database Design', 'Backend Development', 'Frontend Development']
    },
    {
      id: 'lung-capacity',
      title: 'Lung Capacity Check',
      subtitle: 'IoT Health Monitoring System',
      period: 'November 2021 - April 2022',
      logo: 'assets/lung-capacity-check.png',
      description: [
        'Developed an IoT-based system to measure human lung capacity using airflow sensors.',
        'The device captures real-time breathing data and transmits it to the app for analysis and visualization.',
        'Designed for low-cost health screening, especially in remote or resource-limited settings.',
        'Implemented deep learning models using TensorFlow for data analysis.'
      ],
      features: [],
      technologies: ['IoT', 'Arduino', 'Sockets', 'Java', 'Android Development', 'UI/UX', 'Deep Learning', 'TensorFlow', 'Python']
    },
    {
      id: 'faculty-attendance',
      title: 'Faculty Attendance System',
      subtitle: 'Smart Attendance with Facial Recognition',
      period: 'January 2021 - May 2021',
      logo: 'assets/faculty-attendance.png',
      description: [
        'A smart faculty attendance system using facial recognition, geofencing, and secure Node.js backend, enabling one-click attendance with fraud prevention.',
        'Published research paper in the Turkish Journal of Computer and Mathematics.',
        'Implemented advanced security features to prevent attendance fraud.',
        'Developed RESTful APIs with authentication and authorization.'
      ],
      features: [],
      technologies: ['Facial Recognition', 'Python', 'OpenCV', 'Node.js', 'REST APIs', 'Geofencing', 'Haversine Formula', 'Authentication & Authorization', 'Research & Technical Writing']
    },
    {
      id: 'crowd-counting',
      title: 'Crowd Counting',
      subtitle: 'Real-time Video Analysis System',
      period: 'January 2021 - April 2021',
      logo: 'assets/crowd-counting.png',
      description: [
        'Built a real-time crowd counting system using YOLO-based human detection and Flask backend.',
        'Developed custom algorithms to distinguish overlapping individuals and eliminate false positives (e.g., mannequins, posters) from camera footage in malls.',
        'Implemented multithreading for efficient video processing.',
        'Created data visualization dashboards for real-time monitoring.'
      ],
      features: [],
      technologies: ['Python', 'YOLO', 'OpenCV', 'Flask', 'Real-time Video Processing', 'Multithreading', 'Data Visualization']
    },
    {
      id: 'gym-manager',
      title: 'Gym Manager Application',
      subtitle: 'Full-featured Gym Management System',
      period: 'September 2020 - January 2021',
      logo: 'assets/gym-manager-application.png',
      description: [
        'Led development of a full-featured Gym Manager Application supporting user registration, multi-tier subscriptions, seamless payment integration, and real-time trainer-client chat using Socket.io.',
        'Implemented secure payment processing using Stripe.',
        'Built MVC architecture with Express.js and MySQL database.',
        'Created responsive UI with HTML, CSS, and EJS templating.'
      ],
      features: [],
      technologies: ['Node.js', 'Socket.io', 'HTML', 'CSS', 'EJS', 'MVC', 'Express.js', 'Stripe', 'MySQL']
    }
  ];

  selectedProject: Project | null = null;
  showModal = false;

  openDetail(project: Project) {
    this.selectedProject = project;
    this.showModal = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal = false;
    this.selectedProject = null;
    document.body.style.overflow = '';
  }
}

