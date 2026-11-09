import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skillLogos: { [key: string]: string } = {
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    'Rust': 'assets/rust-logo.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'C': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Angular': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    'React': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    'Three.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    '.NET': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
    'REST APIs': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    'GraphQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    'AWS': 'assets/aws-logo.svg',
    'GCP': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    'Terraform': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
    'GitHub Actions': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    'CI/CD': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
    'Kubernetes': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    'pytest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg',
    'Jest': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    'Locust': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'Cypress': 'assets/cypress-logo.svg',
    'CLI Development': 'assets/cli-logo.svg',
    'Clap': 'assets/clap-logo.svg',
    'TOML': 'assets/toml-logo.svg',
    'PyTorch': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'CMake': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cmake/cmake-original.svg'
  };

  skillDescriptions: { [key: string]: string } = {
    'Python': 'High-level programming language known for simplicity and versatility. Used for web development, data science, automation, and backend services.',
    'TypeScript': 'Typed superset of JavaScript that compiles to plain JavaScript. Adds static type checking for safer, more maintainable code.',
    'JavaScript': 'Dynamic programming language for web development. Powers interactive frontend experiences and modern web applications.',
    'Rust': 'Systems programming language focused on safety, speed, and concurrency. Memory-safe without garbage collection, perfect for performance-critical applications.',
    'Java': 'Object-oriented programming language with "write once, run anywhere" philosophy. Widely used for enterprise applications and Android development.',
    'C#': 'Modern, object-oriented language by Microsoft. Used for .NET applications, game development with Unity, and enterprise software.',
    'C++': 'High-performance systems programming language. Used for game engines, operating systems, embedded systems, and performance-critical applications.',
    'C': 'Low-level systems programming language. Foundation of many operating systems, embedded systems, and performance-critical software.',
    'SQL': 'Structured Query Language for managing and querying relational databases. Essential for data manipulation, database design, and backend development.',
    'Angular': 'TypeScript-based web framework for building dynamic single-page applications. Provides structure, tooling, and best practices for large-scale projects.',
    'React': 'JavaScript library for building user interfaces. Component-based architecture with virtual DOM for efficient UI updates.',
    'HTML': 'HyperText Markup Language - the standard markup language for creating web pages and web applications.',
    'CSS': 'Cascading Style Sheets - used for styling and layout of web pages. Controls visual presentation and responsive design.',
    'Three.js': 'JavaScript 3D library for creating interactive 3D graphics in the browser. Built on WebGL for hardware-accelerated rendering.',
    'FastAPI': 'Modern Python web framework for building APIs. Fast, easy to use, with automatic API documentation and type hints.',
    'Node.js': 'JavaScript runtime built on Chrome\'s V8 engine. Enables server-side JavaScript for building scalable network applications.',
    '.NET': 'Microsoft\'s cross-platform development framework. Supports multiple languages and provides tools for building various application types.',
    'REST APIs': 'Representational State Transfer - architectural style for designing networked applications. Stateless, cacheable, and scalable API design.',
    'GraphQL': 'Query language and runtime for APIs. Allows clients to request exactly the data they need, reducing over-fetching.',
    'Git': 'Distributed version control system for tracking changes in source code. Essential tool for collaborative software development.',
    'Docker': 'Containerization platform that packages applications with dependencies. Enables consistent deployment across different environments.',
    'AWS': 'Amazon Web Services - comprehensive cloud computing platform. Provides scalable infrastructure, storage, and services.',
    'GCP': 'Google Cloud Platform - suite of cloud computing services. Offers compute, storage, networking, and machine learning services.',
    'Terraform': 'Infrastructure as Code tool for building, changing, and versioning cloud infrastructure safely and efficiently.',
    'GitHub Actions': 'CI/CD platform integrated with GitHub. Automates workflows for building, testing, and deploying code.',
    'CI/CD': 'Continuous Integration and Continuous Deployment practices. Automates testing and deployment pipelines for faster, reliable releases.',
    'Kubernetes': 'Container orchestration platform for automating deployment, scaling, and management of containerized applications.',
    'pytest': 'Python testing framework that makes it easy to write simple and scalable test cases. Supports fixtures and plugins.',
    'Jest': 'JavaScript testing framework with zero configuration. Great for React applications with built-in mocking and coverage.',
    'Locust': 'Python-based load testing tool. Write test scenarios in code and simulate thousands of concurrent users.',
    'Cypress': 'End-to-end testing framework for web applications. Runs in the browser for reliable, fast, and debuggable tests.',
    'CLI Development': 'Command Line Interface development - creating tools and utilities that run in terminal environments for automation and productivity.',
    'Clap': 'Rust library for building command-line argument parsers. Provides ergonomic API with automatic help generation and validation.',
    'TOML': 'Tom\'s Obvious Minimal Language - a configuration file format that\'s easy to read and write. Used for project configuration files.',
    'PyTorch': 'Deep learning framework I use for model work and benchmarks: KV-cache compression research, CUDA stream overlap experiments, and batching measurements.',
    'CUDA': 'NVIDIA\'s GPU programming platform. I use CUDA streams, events, and graphs in PyTorch experiments and am writing custom kernels in my inference lab.',
    'ONNX': 'Open model format I used to export DistilBERT and build fixed-length specialized variants for CPU inference.',
    'ONNX Runtime': 'Inference engine for ONNX models, used to measure latency percentiles and memory for length-specialized variants.',
    'Hugging Face': 'Transformers ecosystem I use for loading, adapting, and evaluating LLMs in research and model-deployment work.',
    'vLLM': 'High-throughput LLM serving engine with continuous batching and prefix caching, used in a team hackathon project to serve concurrent agents on a single H100.',
    'ASan/UBSan': 'Compiler sanitizers for catching memory errors and undefined behavior in C++, run on RouteLab.',
    'KV Cache': 'Attention key/value cache that dominates LLM decode memory. My research studies low-rank compression and rank allocation under a fixed byte budget.',
    'Benchmarking': 'Measurement discipline: warm-up, calibrated loops, repeated trials, percentiles, and correctness checks before any performance claim.',
    'Linux': 'Operating system for my systems work, including TUN devices and network namespaces in RouteLab.',
    'CMake': 'Build system for C++ projects such as RouteLab, alongside CTest and sanitizer builds.'
  };

  skillCategories = [
    {
      title: 'ML Systems & Inference',
      skills: ['PyTorch', 'CUDA', 'ONNX', 'ONNX Runtime', 'Hugging Face', 'vLLM', 'KV Cache', 'Benchmarking']
    },
    {
      title: 'Languages',
      skills: ['C++', 'Python', 'Rust', 'TypeScript', 'C#', 'SQL']
    },
    {
      title: 'Systems & Tooling',
      skills: ['Linux', 'CMake', 'ASan/UBSan', 'Git', 'Docker', 'pytest', 'GitHub Actions']
    },
    {
      title: 'Web & Cloud',
      skills: ['Angular', 'React', 'FastAPI', '.NET', 'Three.js', 'AWS']
    }
  ];

  getSkillLogo(skill: string): string {
    return this.skillLogos[skill] || '';
  }

  getSkillName(skill: string): string {
    return skill;
  }

  getSkillDescription(skill: string): string {
    return this.skillDescriptions[skill] || `${skill} - A technology I use in my projects.`;
  }
}

