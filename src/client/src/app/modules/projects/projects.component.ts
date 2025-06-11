import { Component } from '@angular/core';
import { WorkProjectEntityComponent } from "../work-project-entity/work-project-entity.component";
import { IContainerTemplate } from '../interfaces/icontainer-template';
import { WorkType } from '../enums/work-type';

@Component({
  selector: 'app-projects',
  imports: [WorkProjectEntityComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  title: string = WorkType.Projects;
  projects: IContainerTemplate[] = [
    {
      name: 'Faculty Attendance System',
      description: ['A smart faculty attendance system using facial recognition, geofencing, and secure Node.js backend, enabling one-click attendance with fraud prevention. Published in the Turkish Journal of Computer and Mathematics.'],
      from: 'January 2021',
      to: 'May 2021',
      skills: ['Facial Recognition', 'Python', 'OpenCV', 'Node.js', 'REST APIs', 'Geofencing', 'Haversine Formula', 'Authentication & Authorization', 'Research & Technical Writing'],
      logoPath: 'assets/faculty-attendance.png',
      role: ''
    },
    {
      name: 'Crowd Counting',
      description: ['Built a real-time crowd counting system using YOLO-based human detection and Flask backend', 'Developed custom algorithms to distinguish overlapping individuals and eliminate false positives (e.g., mannequins, posters) from camera footage in malls.'],
      from: 'January 2021',
      to: 'April 2021',
      skills: ['Python', 'YOLO (You Only Look Once)', 'OpenCV', 'Flask', 'Real-time Video Processing', 'Multithreading', 'Data Visualization',],
      logoPath: 'assets/crowd-counting.png',
      role: ''
    },
    {
      name: 'Gym Manager Application',
      description: ['Led development of a full-featured Gym Manager Application supporting user registration, multi-tier subscriptions, seamless payment integration, and real-time trainer-client chat using Socket.io.'],
      from: 'September 2020',
      to: 'January 2021',
      skills: ['NodeJS', 'Socket.io', 'HTML', 'CSS', 'EJS', 'MVC', 'Express JS', 'Stripe', 'MySQL'],
      logoPath: 'assets/gym-manager-application.png',
      role: ''
    },
  ];

}
