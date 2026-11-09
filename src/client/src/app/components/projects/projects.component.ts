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
  live?: string;
  logo?: string;
}

interface ProjectGroup {
  id: string;
  title: string;
  description: string;
  projectIds: string[];
  projects?: Project[];
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
      id: 'routelab',
      title: 'RouteLab',
      subtitle: 'C++20 Linux Userspace Router with Bounded Queues and Overload Experiments',
      period: 'March 2026 - October 2026',
      github: 'https://github.com/anandteertha/RouteLab',
      description: [
        'A C++20 userspace IPv4 router over TUN devices with one bounded queue and an explicit drop/wait policy, measured for packet loss versus tail latency.',
        'The data path reads packets from TUN devices, validates IPv4 headers, handles TTL and checksums, generates ICMP errors (Time Exceeded, Net Unreachable, Fragmentation Needed), applies longest-prefix routing and filters, and writes to the egress TUN device. A separate thread serves a read-only UNIX control socket with stats, drop reasons, latency histograms, flows, and routes.',
        'An 18-trial UDP sweep (queue capacity 8 / 64 / 256 × offered load 400 / 900 / 1800 pps × 2 trials, with a 1000 µs injected per-packet service delay on WSL2) showed that above capacity, mean p99 latency grew from 12.62 ms to 342.50 ms as the queue grew from 8 to 256, while delivered throughput stayed near the ~800 pps service capacity. A larger queue mostly added waiting time.',
        'Limitations: this is a controlled lab with an injected delay, not natural forwarding speed. ASan and UBSan runs passed; ThreadSanitizer could not run on WSL2, so no race-freedom claim is made.'
      ],
      features: [
        'Bounded queue with explicit drop_new / wait overload policies and high-water tracking',
        'IPv4 validation, TTL and checksum handling, ICMP error generation, and MTU checks',
        'Longest-prefix routing from validated JSON config, plus filters',
        'Read-only UNIX control socket: stats, drops, latency histograms, flows, and routes',
        'CTest unit tests plus a scripted network-namespace integration lab',
        'Raw per-trial CSV results and experiment metadata committed to the repository'
      ],
      technologies: ['C++20', 'Linux', 'TUN', 'Network Namespaces', 'Packet Processing', 'Routing', 'CMake', 'CTest', 'ASan/UBSan', 'Python', 'Performance Engineering']
    },
    {
      id: 'kv-cache-compression',
      title: 'KV-Cache Compression',
      subtitle: 'Low-Rank KV-Cache Compression and Layerwise Rank Allocation (Team Research)',
      period: 'October 2026 - Present',
      description: [
        'A three-person NC State project on SVD-based KV caches: at a fixed byte budget, how rank is split across layers and between keys and values can change perplexity by orders of magnitude.',
        'We compared uniform, spectral-energy, and loss-aware rank allocation at exactly equal cache bytes. In the team’s Qwen2.5 pilot (run by a teammate), moving the same bytes on Qwen2.5-1.5B at 75% retained KV bytes changed the perplexity ratio from 363.5× (uniform) to 2.02× (spectral-energy allocation). No allocator kept quality acceptable at 50% or 25% of the bytes.',
        'My contributions: the rank-allocation solver, the Llama pipeline, integration, OPT integration, and an independent loss-aware allocation study using an exact dynamic program over calibration-loss damage. At 50% KV bytes it reached 63.71% PIQA accuracy versus 52.39% for spectral-energy allocation (native model: 68.66%).',
        'Limitations: "energy" refers to the spectral-energy allocator, not power. No decode-latency or throughput speedup has been measured, and the additive damage model behind the dynamic program does not hold exactly.'
      ],
      features: [
        'Truncated SVD per K and V projection with an exact byte-budget accounting',
        'Uniform vs spectral-energy vs loss-aware allocation at identical cache bytes',
        'Evaluation with perplexity ratios (WikiText-2) and task accuracy (PIQA, ARC-Easy)',
        'Negative results reported: budgets of 50% and below fail for every allocator tested'
      ],
      technologies: ['PyTorch', 'Hugging Face Transformers', 'SVD / Low-Rank Factorization', 'Dynamic Programming', 'KV Cache', 'LLM Inference', 'Research']
    },
    {
      id: 'gpu-overlap',
      title: 'GPU Transfer–Compute Overlap',
      subtitle: 'Synthetic PyTorch Benchmark of CPU→GPU KV Transfers Overlapped with Compute',
      period: '2026',
      description: [
        'A PyTorch benchmark that overlaps chunked CPU→GPU KV-cache copies with compute, using CUDA streams, pinned memory, and CUDA Graphs.',
        'When KV data lives in host memory, the GPU waits on transfers. This controlled single-layer attention benchmark schedules the copies on a separate CUDA stream so background FFN work can fill that gap.',
        'Across 105 runs (15,750 steps, 9 configuration combinations) on an NVIDIA RTX 3050, up to 92.3% of background GPU time overlapped with transfers. That figure is overlap, not an end-to-end speedup. A fixed 25% scheduling margin outperformed the adaptive policy tested.',
        'Limitations: a synthetic single-layer benchmark on a laptop GPU; results are from my own run records.'
      ],
      features: [
        'Two CUDA streams synchronized with events; pinned host memory for asynchronous copies',
        'CUDA Graphs to reduce launch overhead in the measured loop',
        'Overlap measured separately from speedup, with fixed vs adaptive scheduling compared'
      ],
      technologies: ['PyTorch', 'CUDA Streams & Events', 'CUDA Graphs', 'Pinned Memory', 'GPU Benchmarking', 'Performance Engineering']
    },
    {
      id: 'rust-intermediate',
      title: 'rust-intermediate',
      subtitle: 'Intermediate Rust Track: Building Concurrent Components',
      period: 'March 2026 - Present',
      isHighlight: true,
      logo: 'assets/rust-logo.svg',
      github: 'https://github.com/anandteertha/rust-intermediate',
      description: [
        'rust-intermediate is a sequence of std-only Rust components that climbs from ownership semantics to bounded work distribution, worker pools with failure reporting, and lock-ordering hazards, each small enough to explain line by line.',
        'Eight projects are complete (001–008): threads and mpsc channels, Rc<T> and Rc<RefCell<T>>, Arc<Mutex<T>>, a bounded job queue on sync_channel, a three-worker pool with deterministic failure injection (15 jobs → 12 ok, 3 failed, reported as data), and a lock-ordering exercise that ran 20,000 opposite-direction transfers without deadlock, with unit tests.',
        'Next milestones (planned, not yet implemented): an async job runner and a small executor.'
      ],
      features: [
        'Bounded job queue with sync_channel backpressure and clean shutdown',
        'Worker pool with result collection and failures returned as data instead of panics',
        'Global lock ordering to prevent deadlock in concurrent account transfers, with tests',
        'Shared ownership and interior mutability with Rc, RefCell, Arc, Mutex, and Barrier'
      ],
      technologies: ['Rust', 'Cargo', 'Concurrency', 'std::thread', 'mpsc / sync_channel', 'Arc', 'Mutex', 'Rc', 'RefCell', 'cargo test', 'Systems Programming']
    },
    {
      id: 'inference-optimization-basics',
      title: 'Inference Optimization Basics',
      subtitle: 'A Performance Engineering Lab for Inference Serving and CUDA Kernels',
      period: 'October 2026 - Present',
      github: 'https://github.com/anandteertha/inference-optimization-basics',
      description: [
        'A public lab notebook that turns serving concepts (capacity, queue stability, batching, memory movement) into predictions first, then checks them against small controlled measurements and explains the surprises.',
        'It contains four written lessons (metrics, prefill/decode and the KV cache, compute vs memory, batching and serving), an event-driven batching simulator, and a correctness-checked one-thread CPU batching benchmark (torch.mm against a float64 reference).',
        'In the CPU benchmark, throughput rose from 216.2 items/s at B=1 to 427.1 at B=8 (1.98×) and 641.8 at B=16. Going from B=16 to B=32 bought only 1.9% more throughput for 96% more time per batch. In the simulator, serial serving at 8 ms per request supports ~125 req/s versus ~333 req/s with batches of 4.',
        'Ongoing: writing custom CUDA kernels inside the lab, starting with the building blocks of attention such as a row-wise online softmax. Each kernel is checked against a PyTorch reference first; no performance results are claimed until they are measured.',
        'Limitations: the published measurements are single-thread CPU operator benchmarks and modelled capacities, not LLM serving throughput. FlashAttention was studied, not implemented.'
      ],
      features: [
        'Capacity and queue-stability analysis (arrival rate vs service rate)',
        'Event-driven batching simulator with batch size and timeout policies',
        'Benchmark discipline: warm-up, calibrated loops, shuffled repeats, median of block averages',
        'Correctness checks against a float64 reference at every batch size',
        'In progress: custom CUDA kernels (online softmax and other attention building blocks), validated against PyTorch'
      ],
      technologies: ['Python', 'PyTorch', 'CUDA', 'Batching', 'Queueing Models', 'Simulation', 'Benchmarking', 'Inference Optimization']
    },
    {
      id: 'length-specialized-inference',
      title: 'Length-Specialized ONNX Inference',
      subtitle: 'Matching CPU Computation to Message Length (Efficient Deep Learning Course Project)',
      period: 'Fall 2026 - Present',
      description: [
        'Short messages do not need a model compiled for 512 tokens. DistilBERT (SST-2) was exported to ONNX and specialized into fixed 16/32/64/128-token variants, with unchanged-weight and output checks, plus a dynamic fallback. Variants are selected under a process-memory cap.',
        'On the calibration workload, p95 latency fell from 243.8 ms (dynamic model only) to 50.6 ms with the selected 16+32 variants, with 538/538 output checks passed and zero changed predictions. The price was peak memory: RSS grew from 653.9 MiB to 1,228.7 MiB.',
        'Next: held-out evaluation of the frozen routing policy.'
      ],
      features: [
        'ONNX export and fixed-length specialization with weight and output verification',
        'Memory-capped variant selection with a dynamic-shape fallback',
        'Latency percentiles and resident memory measured together'
      ],
      technologies: ['PyTorch', 'ONNX', 'ONNX Runtime', 'Hugging Face', 'Python', 'pytest', 'CPU Inference']
    },
    {
      id: 'maizerunner',
      title: 'MaizeRunner',
      subtitle: 'Agent Application Serving on a Single GPU (Team Hackathon Project)',
      period: 'October 2026',
      description: [
        'A team hackathon project (NVIDIA Champions Choice Award) in which concurrent agent simulations share one vLLM-served small model on a single NVIDIA H100, relying on continuous batching and prefix caching.',
        'Going from 1 to 20 concurrent simulations raised application throughput from 6.0 to 29.31 seasons/hour (4.9×), with a 65.79% prefix-cache hit rate at higher load. My role: co-builder, benchmarking concurrency, latency, and cache behavior.',
        'The award, agents, and serving setup are shared team work.'
      ],
      features: [],
      technologies: ['Python', 'vLLM', 'NVIDIA Nemotron', 'FastAPI', 'NVIDIA H100', 'LLM Serving']
    },
    {
      id: 'rust-basics',
      title: 'rust-basics',
      subtitle: 'Completed Rust Fundamentals Track with 10 Hands-On Cargo Micro-Projects',
      period: 'September 2025 - March 2026',
      logo: 'assets/rust-logo.svg',
      github: 'https://github.com/anandteertha/rust-basics',
      description: [
        'rust-basics is a completed learning-in-public Rust repository that turns core language ideas into small, realistic Cargo projects. The track is structured to make ownership, borrowing, lifetimes, and type-driven design visible through code you can actually run and explain.',
        'Across 10 self-contained micro-projects, the repo covers ownership and Drop-based RAII, references and slicing, structs and enums, Option/Result, traits and generics, borrowed-data lifetimes, iterator pipelines, and collections plus file I/O.'
      ],
      features: [
        '10 self-contained Cargo micro-projects that progress from ownership to practical file I/O',
        'Covers RAII, borrowing rules, slicing, structs, enums, Option/Result, traits, generics, and lifetimes',
        'Includes iterator-driven data processing with filter, map, find, any, all, and fold',
        'Brings collections and file parsing together with Vec, HashMap, validation, and reporting flows'
      ],
      technologies: ['Rust', 'Cargo', 'Ownership', 'Borrowing', 'Lifetimes', 'Traits', 'Generics', 'Iterators', 'Collections', 'File I/O', 'RAII']
    },
    {
      id: 'nebulakv',
      title: 'NebulaKV',
      subtitle: 'C++ Client SDK for Key-Value Storage with Custom Wire Protocol',
      period: 'December 2025 - Present',
      description: [
        'A C++ client SDK for a key-value store: a custom length-prefixed TCP protocol, connection pooling, and timeouts with retries.',
        'The SDK provides typed GET/PUT/DELETE APIs and optional CLI and benchmarking tools.',
        'The wire protocol (v1) is designed for correctness and safety: explicit message framing with length prefixes, big-endian encoding, protocol versioning, and deterministic error handling. The C++ implementation emphasizes zero-copy parsing where possible, RAII-based resource management, and robust error handling with structured error codes. The SDK provides a clean, type-safe API that abstracts protocol details while maintaining performance and control.'
      ],
      features: [
        'C++ client SDK: connection pooling, timeout/retry logic, and typed API for GET/PUT/DELETE operations',
        'Custom binary wire protocol: length-prefixed frames, versioned headers, big-endian encoding over TCP',
        'Protocol implementation: explicit framing prevents message boundary issues, validation of all length fields',
        'Error handling: structured error codes (UNSUPPORTED_VERSION, MALFORMED_FRAME, LIMIT_EXCEEDED, etc.)',
        'Performance focus: zero-copy parsing, RAII-based resource management, bounded memory usage',
        'Operational features: request correlation via request_id, configurable frame/key/value size limits',
        'CLI and benchmarking tools: C++ utilities for testing, performance measurement, and integration'
      ],
      technologies: ['C++', 'TCP/IP', 'Binary Protocols', 'Network Programming', 'Systems Programming', 'Protocol Design', 'Connection Pooling', 'Error Handling', 'SDK Development', 'RAII', 'Zero-Copy I/O']
    },
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
      id: 'trainer-crm',
      title: 'Gym Trainer Client Management',
      subtitle: 'Client CRM, Workout Tracking, Payments & Analytics',
      period: '2025',
      live: 'https://trainer-website-theta.vercel.app/',
      description: [
        'Built and shipped a production Gym Trainer Client Management Application used by real trainers to run their day-to-day operations.',
        'The platform consolidates client CRM, workout logging, payments/revenue tracking, and a business analytics dashboard into a single, responsive experience so trainers can manage relationships, measure progress, and understand performance at a glance.',
        'Supports full client lifecycle management (profiles, status, notes, history), detailed workout sessions (sets, reps, weight, duration, rest, notes), and flexible payment records (monthly, per-session, package, and custom).',
        'Provides actionable analytics including revenue trends, workout frequency, top exercises, and client-level breakdowns, plus an integrated bug reporting workflow with severity/status and reproducible steps to keep feedback loops tight.'
      ],
      features: [
        'End-to-end client CRM with lifecycle tracking, notes, and history',
        'Rich workout logging with multi-exercise sessions and detailed fields',
        'Flexible payment tracking (monthly plans, per-session, packages, custom)',
        'Business analytics dashboard: revenue trends, workout frequency, top exercises, client breakdowns',
        'Integrated bug reporting workflow for faster iteration and product quality',
        'Responsive, mobile-friendly UI tailored for busy trainers on the go'
      ],
      technologies: [
        'TypeScript',
        'React 19',
        'Vite',
        'React Router',
        'TanStack Query',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Recharts',
        'Node.js',
        'Express.js',
        'Better-SQLite3',
        'PostgreSQL',
        'TiDB',
        'REST APIs',
        'Full Stack Development',
        'Analytics Dashboards'
      ]
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

  projectGroups: ProjectGroup[] = [
    {
      id: 'research',
      title: 'ML Systems & Inference',
      description: 'KV-cache compression, GPU overlap, model specialization, and serving experiments',
      projectIds: ['kv-cache-compression', 'gpu-overlap', 'length-specialized-inference', 'inference-optimization-basics', 'maizerunner']
    },
    {
      id: 'systems',
      title: 'Systems Engineering',
      description: 'C++ and Rust systems: routing, networking protocols, and concurrency',
      projectIds: ['routelab', 'nebulakv', 'rust-intermediate']
    },
    {
      id: 'other-projects',
      title: 'Other Projects',
      description: 'Full-stack products, Rust tooling, and earlier work in computer vision and IoT',
      projectIds: ['trainer-crm', 'nutribite', 'neatd', 'rust-basics', 'lung-capacity', 'faculty-attendance', 'crowd-counting', 'gym-manager']
    }
  ].map(group => ({
    ...group,
    projects: group.projectIds
      .map(id => this.projects.find(project => project.id === id))
      .filter((project): project is Project => !!project)
  }));

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
