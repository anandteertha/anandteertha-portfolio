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
            carousel: this.raychemCarousel(),
            desccription: this.raychemDescription(),
            comments: [],
            container: this.raychemContainer()
        },
        [EntityName.outrider]: {
            name: EntityName.outrider,
            type: WorkType.WorkExperience,
            carousel: [],
            desccription: [],
            comments: [],
            container: this.outriderContainer()
        },
    }

    private static raychemCarousel(): string[] {
        const path: string = "assets/raychem/";
        return Array(10).fill(0).map((_, index) => `${path}${index}.jpg`);
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
            role: 'Full Stack Developer'
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
            role: 'Software developer Intern',
            id: 'fitImage'
        }
    }
}
