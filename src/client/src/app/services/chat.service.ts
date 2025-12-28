import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
  private readonly apiKey = environment.groqApiKey;
  
  private readonly systemContext = `You are a helpful AI assistant answering questions about Anandteertha Rao's career and education. 
  
Here is information about Anandteertha Rao:

EDUCATION:
1. Master of Science in Computer Science at North Carolina State University (August 2025 - May 2027)
   - Current GPA: 4.11/4.0
   - Completed courses: Design and Analysis of Algorithms (A), Software Engineering (A), Database Management Systems (A+)
   - Upcoming courses: IoT Analytics, Foundations of Data Science, Automated Learning and Data Analysis

2. Bachelor of Engineering in Computer Engineering at University of Mumbai (2018 - 2022)
   - GPA: 9.5/10 CGPA
   - Achievements: Essar Endowment Award (10/10 pointer in Second Year)

WORK EXPERIENCE:
1. Software Developer at Khayrallah Center for Lebanese Diaspora Studies, NC State University (2025 - Present, Part-time)
   - Developing web applications for research and data management
   - Building responsive frontend interfaces using React
   - Creating backend APIs using FastAPI with pytest
   - Implementing stress testing using Locust
   - Technologies: React, FastAPI, Python, pytest, Locust

2. Full Stack Developer at Raychem (Chemelex), Mumbai, India (July 2022 - April 2025, Full-time)
   - Developed .NET microservice for 3D pipe design, reducing processing time by 2 days
   - Built 3D renderer in Three.js for factory piping visualization
   - Published Angular libraries on MyGet Package Manager
   - Implemented design patterns (Proxy, Abstract Factory, Strategy)
   - Optimized UI performance, reducing loading time by 20%
   - Integrated Python scripting editor in Angular application
   - Deployed on AWS Lambda
   - Achieved 100% test coverage in pytest, Jest, and Cypress
   - Technologies: TypeScript, JavaScript, Angular, Three.js, Python, .NET, AWS, Docker, Design Patterns

3. Software Developer Intern at Outrider.live (September 2020 - June 2021, Internship)
   - Integrated Google Maps Drawing API
   - Built backend APIs and real-time features using Socket.io
   - Served as Scrum Master
   - Technologies: Node.js, JavaScript, Socket.io, SQL, Google Maps API

KEY PROJECTS:
- NebulaKV: C++ Client SDK for Key-Value Storage (December 2025 - Present)
- Neatd: Rust CLI Tool for Automated Folder Organization (September 2025 - Present)
- NutriBite: Food Recommendation System with RAG (August 2025 - December 2025)
- Gym Trainer Client Management: Production application for trainers (2025)
- Various other projects in IoT, facial recognition, and web development

SKILLS:
Languages: Rust, C++, C, Python, TypeScript, JavaScript, Java, SQL
Frameworks: Angular, React, FastAPI, Node.js, Express.js, .NET
Tools & Technologies: AWS, GCP, Terraform, GitHub Actions, CI/CD, Kubernetes, Docker, Three.js, MySQL, Redis, PostgreSQL, TiDB

Answer questions professionally, accurately, and concisely based on this information. If asked about something not covered, politely indicate that you can only answer questions about Anandteertha's career and education.`;

  constructor(private http: HttpClient) {}

  sendMessage(messages: ChatMessage[]): Observable<string> {
    if (!this.apiKey) {
      return throwError(() => new Error('Groq API key not configured. Please add GROQ_API_KEY to your .env file or environment variables.'));
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const payload = {
      model: 'llama-3.3-70b-versatile', // Updated model - replacement for deprecated llama-3.1-70b-versatile
      // Alternative models: 'llama-3.1-8b-instant' (faster), 'mixtral-8x7b-32768' (good balance)
      messages: [
        { role: 'system', content: this.systemContext },
        ...messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      ],
      temperature: 0.7,
      max_tokens: 500,
      stream: false
    };

    return this.http.post<any>(this.apiUrl, payload, { headers }).pipe(
      map((response) => {
        return this.extractResponse(response);
      }),
      catchError((error) => {
        console.error('Groq API error:', error);
        return throwError(() => new Error(error.error?.error?.message || 'Failed to get response from AI'));
      })
    );
  }

  // Helper method to extract response from Groq API format (same as OpenAI format)
  extractResponse(data: any): string {
    return data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';
  }
}

