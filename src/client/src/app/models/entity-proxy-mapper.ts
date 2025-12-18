import { Dictionary } from 'lodash';

import { EntityName } from '@modules/enums/entity-name';
import { WorkType } from '@modules/enums/work-type';
import { IContainerTemplate } from '@modules/interfaces/icontainer-template';
import { IentityType } from '@modules/interfaces/ientity-type';

export class EntityProxyMapper {
    private static proxy: Dictionary<IentityType> = {
        [EntityName.raychem]: {
            name: EntityName.raychem,
            type: WorkType.WorkExperience,
            carousel: this.getCarousel(EntityName.raychem, 'jpg', 10),
            description: this.raychemDescription(),
            comments: [],
            container: this.raychemContainer()
        },
        [EntityName.outrider]: {
            name: EntityName.outrider,
            type: WorkType.WorkExperience,
            carousel: this.getCarousel(EntityName.outrider, 'jpg', 1),
            description: this.outriderDescription(),
            comments: [],
            container: this.outriderContainer()
        },
        [EntityName.lungCapacityCheck]: {
            name: EntityName.lungCapacityCheck,
            type: WorkType.Projects,
            carousel: this.getCarousel(EntityName.lungCapacityCheck, 'png', 4),
            description: this.lungCapacityCheckDescription(),
            comments: [],
            container: this.lungCapacityCheckContainer()
        },
        [EntityName.facultyAttendance]: {
            name: EntityName.facultyAttendance,
            type: WorkType.Projects,
            carousel: [],
            description: this.facultyAttendanceDescription(),
            comments: [],
            container: this.facultyAttendanceContainer()
        },
        [EntityName.crowdCounting]: {
            name: EntityName.crowdCounting,
            type: WorkType.Projects,
            carousel: this.getCarousel(EntityName.crowdCounting, 'png', 1),
            description: this.crowdCountingDescription(),
            comments: [],
            container: this.crowdCountingContainer()
        },
        [EntityName.gymManagerApplication]: {
            name: EntityName.gymManagerApplication,
            type: WorkType.Projects,
            carousel: this.getCarousel(EntityName.gymManagerApplication, 'jpg', 2),
            description: this.gymManagerApplicationDescription(),
            comments: [],
            container: this.gymManagerApplicationContainer()
        },
        [EntityName.nutribite]: {
            name: EntityName.nutribite,
            type: WorkType.Projects,
            carousel: [],
            description: this.nutribiteDescription(),
            comments: [],
            container: this.nutribiteContainer()
        },
    }

    private static getCarousel(name: EntityName, imageType: string, count: number): string[] {
        const path: string = `assets/${name}/`;
        return Array(count).fill(0).map((_, index) => `${path}${index}.${imageType}`);
    }

    static getEntityTypeDetails(name: EntityName): IentityType {
        return this.proxy[name];
    }

    private static raychemDescription(): string[] {
        return [
            "🧠 Led the development of a smart Python script execution platform within a microservice architecture on AWS Lambda, enabling designers to write, save, and execute Python scripts at predefined points in the product configuration workflow.",
            "🔐 Enhanced the security framework of the Python service using a custom-built sensing script that detects unsafe built-ins, malicious intent, and potential misuse—ensuring a safe environment for code execution.",
            "🛠️ Contributed to the development and maintenance of key web applications using Angular, .NET Core, and JSON-API, supporting critical business functions in heating system design.",
            "📁 Spearheading a Proof of Concept (POC) to render 3D piping systems in-browser using Three.js, with a .NET-based microservice backend to parse and convert industry-standard PCF/IDF files into JSON for visualization.",
            "🌐 Built scalable APIs and services for configuration logic, result generation, and warning systems, using a clean, modular codebase with CI/CD integration.",
            "⚙️ Participated in DevOps practices—automated deployments, managed CI/CD pipelines, and ensured scalable, reliable resource allocation using AWS and GitHub Actions.",
            "🧪 Conducted thorough testing and debugging, including writing unit and integration tests for APIs and microservices, to ensure robustness and maintainability.",
            "🧑‍🏫 Delivered a technical seminar on the smart script architecture to cross-functional teams and company leaders, ensuring wide adoption and recognition of the system’s impact.",
            "📌 Mentored junior developers and interns, conducted code reviews, and helped enforce software best practices, improving overall team productivity and code quality.",
            "🧩 Collaborated with global teams across engineering, product, and QA to understand business needs, gather requirements, and deliver high-impact technical solutions.",
        ]
    }

    public static raychemContainer(): IContainerTemplate {
        return {
            name: EntityName.raychem,
            description: ["Led the development of a smart Python code editor, allowing users to run custom scripts securely.", "Worked on a 3D piping system renderer."],
            from: '5th July 2022',
            to: '1st April 2025',
            skills: ["TypeScript", "JavaScript", "Angular", "Three.Js", "Python", ".NET", "HTML", "CSS", "AWS", "GIT", "Gitlab", "JIRA", "Py-Test", "Jasmine/Karma", "Jest", "Cypress", "XUnit Test"],
            logoPath: 'assets/chemelex.png',
            role: 'Software Development Engineer'
        }
    }

    public static outriderContainer(): IContainerTemplate {
        return {
            name: EntityName.outrider,
            description: ["Integrated Google Maps Drawing API to display live salesman locations and building backend APIs for seamless data exchange.", "Oversaw task assignments, conducted code reviews, and coordinated directly with stakeholders to translate business requirements into technical solutions."],
            from: '3rd September 2020',
            to: '19th June 2021',
            skills: ["NodeJS", "JavaScript", "Socket.io", "SQL", "HTML", "CSS", "Github", "Scrum Master", "Leadership"],
            logoPath: 'assets/outrider.png',
            role: 'Software Development Engineer Intern',
            id: 'fitImage'
        }
    }

    public static lungCapacityCheckContainer(): IContainerTemplate {
        return {
            name: EntityName.lungCapacityCheck,
            description: ['Developed an IoT-based system to measure human lung capacity using airflow sensors.', 'The device captures real-time breathing data and transmits it to the app for analysis and visualization.', 'Designed for low-cost health screening, especially in remote or resource-limited settings.'],
            from: 'November 2021',
            to: 'April 2022',
            skills: ['IOT', 'Arduino', 'sockets', 'Java', 'Android App Development', 'UI/UX', 'Deep Learning', 'Tensorflow', 'Python'],
            logoPath: 'assets/lung-capacity-check.png',
            role: 'IOT & App Developer'
        }
    }

    public static facultyAttendanceContainer(): IContainerTemplate {
        return {
            name: EntityName.facultyAttendance,
            description: ['A smart faculty attendance system using facial recognition, geofencing, and secure Node.js backend, enabling one-click attendance with fraud prevention. Published in the Turkish Journal of Computer and Mathematics.'],
            from: 'January 2021',
            to: 'May 2021',
            skills: ['Facial Recognition', 'Python', 'OpenCV', 'Node.js', 'REST APIs', 'Geofencing', 'Haversine Formula', 'Authentication & Authorization', 'Research & Technical Writing'],
            logoPath: 'assets/faculty-attendance.png',
            role: 'Full Stack Developer'
        }
    }

    public static crowdCountingContainer(): IContainerTemplate {
        return {
            name: EntityName.crowdCounting,
            description: ['Built a real-time crowd counting system using YOLO-based human detection and Flask backend', 'Developed custom algorithms to distinguish overlapping individuals and eliminate false positives (e.g., mannequins, posters) from camera footage in malls.'],
            from: 'January 2021',
            to: 'April 2021',
            skills: ['Python', 'YOLO (You Only Look Once)', 'OpenCV', 'Flask', 'Real-time Video Processing', 'Multithreading', 'Data Visualization',],
            logoPath: 'assets/crowd-counting.png',
            role: 'Full Stack Developer'
        }
    }

    public static gymManagerApplicationContainer(): IContainerTemplate {
        return {
            name: EntityName.gymManagerApplication,
            description: ['Led development of a full-featured Gym Manager Application supporting user registration, multi-tier subscriptions, seamless payment integration, and real-time trainer-client chat using Socket.io.'],
            from: 'September 2020',
            to: 'January 2021',
            skills: ['NodeJS', 'Socket.io', 'HTML', 'CSS', 'EJS', 'MVC', 'Express JS', 'Stripe', 'MySQL'],
            logoPath: 'assets/gym-manager-application.png',
            role: 'Full Stack Developer'
        }
    }

    private static outriderDescription(): string[] {
        return [
            "🧩 Developed full - stack features for a web - based field - sales tracking platform using Vanilla JavaScript, Node.js (Express), and Socket.io, enabling real - time updates of sales personnel’s location on Google Maps.",
            "🗺️ Integrated Google Maps Drawing API to allow managers to define geographic zones and track salesman activities within those zones dynamically.",
            "🔄 Engineered bi - directional real - time communication using Socket.io to send and receive live updates of user locations, reducing delay and improving field visibility.",
            "🔧 Built backend REST APIs for CRUD operations, user authentication, and role - based access management using Express.js and MongoDB.",
            "🎨 Collaborated on UI / UX design, ensuring the front - end interface was intuitive, responsive, and aligned with stakeholder expectations for a seamless user experience.",
            "📋 Assumed dual role as Product Manager, conducting regular sync - ups with stakeholders to gather requirements, convert them into technical specifications, and maintain clear documentation.",
            "📅 Managed a small team of developers, assigned tasks and sprint goals, conducted peer code reviews, and mentored peers in debugging and feature optimization.",
            "✅ Reviewed team submissions and coordinated deadlines, ensuring timely and quality releases while keeping user feedback in the loop for iterative improvements.",
            "⚡ Proactively resolved integration challenges between frontend mapping logic and backend services, ensuring data consistency and synchronization across layers.",
            "📈 Contributed to product strategy, suggesting improvements and feature extensions based on usage patterns and feedback from sales operations teams.",
        ]
    }

    private static lungCapacityCheckDescription(): string[] {
        return [
            "📐 Designed and developed a portable IoT system to measure human lung capacity using air pressure sensors, microcontrollers, and real - time data visualization.",
            "💨 Built a custom hardware prototype that captured the airflow data when a user exhaled into a tube, translating physical force into digital signals using an analog pressure sensor.",
            "🧠 Used an NodeMCU board to read sensor data, apply analog - to - digital conversion, and perform real - time calculations to estimate lung volume based on airflow duration and pressure changes.",
            "📥 Enabled data logging and export to CSV/Excel for medical professionals to review patient history over time.",
            "⚠️ Added warning / alert system based on threshold values to notify users of abnormally low or high lung capacity, useful for detecting early signs of respiratory issues.",
            "🔌 Designed a minimal power circuit for extended portable use, with easy USB connectivity and plug - and - play functionality.",
            "🧪 Tested the device on multiple subjects to compare results against standard spirometry readings for validation.",
            "🧭 Highlighted real - world applications in early - stage respiratory screening, fitness tracking, and remote health diagnostics.",
        ]
    }

    private static facultyAttendanceDescription(): string[] {
        return [
            "🗺️ Built a robust multi-module attendance tracking system designed specifically for faculty, combining geolocation, facial recognition, and manual overrides via an admin panel.",
            "📸 Integrated real-time face recognition using OpenCV and IP camera feeds to mark attendance based on visual confirmation.",
            "📍 Implemented geofence-based validation, allowing attendance only when the faculty member is within a defined geographic radius using GPS and Google Maps APIs.",
            "🛠️ Developed a secure admin portal for approving or rejecting attendance requests, viewing logs, and handling exceptional cases (e.g., remote work).",
            "🔐 Enabled role-based access with custom dashboards for faculty and administrators, ensuring data security and usability.",
            "💾 Used MySQL for data storage and authentication, maintaining accurate logs of attendance records and system activities.",
            "🌐 Created a user-friendly front end using HTML, CSS, Bootstrap, and JavaScript with responsive design for mobile compatibility.",
            "📈 Improved attendance tracking reliability, especially in hybrid and remote teaching environments.",
        ]
    }

    private static crowdCountingDescription(): string[] {
        return [
            "📹 Developed a smart crowd counting web app that estimates the number of people in real-time using surveillance footage from malls or public areas.",
            "🤖 Integrated YOLO (You Only Look Once) deep learning model for high-speed and accurate human detection in video feeds.",
            "🔄 Designed the web interface, with a Flask backend for ML model integration and real-time updates of detected crowd size.",
            "📏 Implemented logic to detect overlapping bounding boxes, improving the accuracy of person-counting by minimizing duplicate detections.",
            "🧠 Distinguished between mannequins, posters, and real humans, leveraging image metadata and movement patterns.",
            "📊 Displayed live statistics, giving actionable insights for mall staff to manage congestion and improve safety.",
            "🏆 Gained practical experience in applying computer vision to real-world public safety and retail analytics problems.",
        ]
    }

    private static gymManagerApplicationDescription(): string[] {
        return [
            "🧾 Developed a complete gym management web app, allowing gym owners to handle member registrations, payment tracking, subscription tiers, and trainer assignments.",
            "💳 Enabled payment gateway integration(mocked via APIs) to simulate real - time subscription upgrades, renewals, and receipts.",
            "🧑‍🏫 Created multi - role login access for admins, trainers, and members, with dashboards personalized to each role's needs.",
            "🗂️ Used MySQL for backend database design, managing users, plans, workout history, and attendance logs efficiently.",
            "🎨 Built responsive UI with HTML, CSS, and JavaScript, offering clean navigation, visual metrics(like attendance trends), and calendar views.",
            "⚙️ Enabled CRUD operations for all entities(users, subscriptions, trainers), along with search and filter functionalities.",
            "🔒 Implemented session - based authentication and input validation, maintaining security and protecting sensitive data.",
            "📈 Provided analytics features for gym admins to track active subscriptions, member engagement, and trainer workloads.",
            "📚 Followed agile methodology, setting sprint goals, and delivering weekly updates with code reviews and team sync - ups.",
        ]
    }

    public static nutribiteContainer(): IContainerTemplate {
        return {
            name: EntityName.nutribite,
            description: ['Built a FastAPI backend with MySQL and Redis for caching/sessions.', 'Designed a BCNF-normalized MySQL schema and built reusable React components.', 'Added a RAG-based recommender for healthier menu suggestions.'],
            from: '2024',
            to: '2024',
            skills: ['FastAPI', 'Python', 'MySQL', 'Redis', 'React', 'RAG', 'Pytest', 'Cypress', 'CI/CD', 'SOLID Principles'],
            logoPath: 'assets/nutribite.png',
            role: 'Full Stack Developer'
        }
    }

    private static nutribiteDescription(): string[] {
        return [
            "🚀 Built a FastAPI backend with MySQL and Redis for efficient caching and session management, improving application performance and user experience.",
            "📋 Managed the product backlog by creating and prioritizing user stories, ensuring agile development practices and clear project roadmap.",
            "🗄️ Designed a BCNF-normalized MySQL database schema ensuring data integrity and wrote efficient SQL queries for optimal performance.",
            "⚛️ Built reusable React components for user food preferences and customization, promoting code reusability and maintainability.",
            "🤖 Added a RAG (Retrieval-Augmented Generation) based recommender system for healthier menu suggestions, leveraging AI to provide personalized recommendations.",
            "🏗️ Followed SOLID principles and clean coding practices throughout the development lifecycle, ensuring scalable and maintainable codebase.",
            "🧪 Set up comprehensive testing infrastructure with Pytest for backend testing and Cypress for end-to-end testing, ensuring code quality.",
            "🔄 Integrated continuous integration (CI) pipelines to run automated tests, ensuring code reliability and preventing regressions.",
        ]
    }
}
