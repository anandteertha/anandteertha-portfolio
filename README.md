<div align="center">

# 🦀 Anandteertha Rao - Portfolio

### **Professional Portfolio | Rust Developer & Full Stack Software Engineer**

[![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Rust](https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white)](https://www.rust-lang.org/)
[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/anandteertha/anandteertha-portfolio?style=for-the-badge&logo=github)](https://github.com/anandteertha/anandteertha-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anandteertha/anandteertha-portfolio?style=for-the-badge&logo=github)](https://github.com/anandteertha/anandteertha-portfolio/network/members)

---

</div>

## ✨ **Overview**

A modern, professional portfolio website showcasing my work as a **Rust Developer** and **Full Stack Software Engineer**. Built with Angular and optimized for SEO, this portfolio highlights my experience in systems programming, web development, and software engineering.

### 🎯 **Live Demo**

🌐 **[View Live Portfolio](https://anandteertha.github.io/anandteertha-portfolio/)**

---

## 🎨 **Features**

### 🚀 **Modern Design**
- **Clean, professional UI** with a light theme optimized for readability
- **Responsive design** that works flawlessly on all devices
- **Smooth scroll animations** and interactive elements
- **Optimized typography** and spacing for excellent UX

### 📱 **Portfolio Sections**

#### 🏠 **Hero Section**
- Professional introduction with availability badge
- Interactive Rust code snippet display
- Call-to-action buttons for collaboration
- Statistics showcase (Experience, Projects, Specialization)

#### 👨‍💻 **About Section**
- Personal introduction and professional summary
- Technical skills showcase with categorized technologies
- Focus on Rust, systems programming, and full-stack development
- Invitation for collaboration and job opportunities

#### 🎓 **Education**
- **North Carolina State University** — Master of Science in Computer Science (2025-2027)
- **Mumbai University** — Bachelor of Engineering in Computer Engineering (2018-2022)
- Course listings and achievements

#### 💼 **Work Experience**
- **Khayrallah Center for Lebanese Diaspora Studies** (November 2025 - Present)
  - Software Developer (Part-time)
  - React, FastAPI, Python, pytest, Locust
- **Raychem (Chemelex)** (2022-2025)
  - Full Stack Developer (Full-time)
  - Angular, TypeScript, Python, .NET, Three.js, AWS
- **Outrider.live** (2020-2021)
  - Software Developer Intern
  - Node.js, Socket.io, Google Maps API

#### 🚀 **Projects Showcase**
- **Neatd** — Rust CLI tool for automated folder organization (2025 - Present)
- **NutriBite** — Food recommendation system with RAG (2025)
- **Lung Capacity Check** — IoT health monitoring system (2021-2022)
- **Faculty Attendance System** — Smart attendance with facial recognition (2021)
- **Crowd Counting** — Real-time video analysis system (2021)
- **Gym Manager Application** — Full-featured gym management system (2020-2021)

#### 📧 **Contact Section**
- Social media integration (GitHub, LinkedIn, Email)
- Professional contact information
- Call-to-action for opportunities

### 🔍 **SEO Optimizations**
- **Comprehensive meta tags** (200+ keywords)
- **Structured data** (JSON-LD schemas for Person, WebSite, Projects, WorkExperience, Education)
- **Open Graph** and **Twitter Card** tags
- **Sitemap.xml** and **robots.txt**
- **Semantic HTML** with ARIA labels
- **Performance optimizations** (preconnect, DNS prefetch, preload)
- **PWA support** with manifest.json

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **Angular 19.2.0** — Modern, component-based framework
- **TypeScript 5.7.2** — Type-safe development
- **RxJS** — Reactive programming

### **Styling**
- **SCSS** — Advanced CSS preprocessing
- **Custom design system** with consistent spacing and typography
- **Responsive design** with mobile-first approach

### **Build Tools**
- **Angular CLI** — Development and build tooling
- **GitHub Actions** — CI/CD for automated deployment

---

## 🚀 **Getting Started**

### **Prerequisites**

Make sure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** (v9 or higher) or **yarn**
- **Angular CLI** (v19.2.6 or higher)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/anandteertha/anandteertha-portfolio.git
   cd anandteertha-portfolio
   ```

2. **Navigate to the client directory**
   ```bash
   cd src/client
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200` to see the portfolio in action!

### **Build for Production**

```bash
# Build the project
ng build --configuration production

# The build artifacts will be stored in `dist/client/browser/`
```

---

## 📦 **Project Structure**

```
anandteertha-portfolio/
├── src/
│   └── client/
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/
│       │   │   │   ├── about/          # About section component
│       │   │   │   ├── contact/        # Contact & social links
│       │   │   │   ├── education/      # Education section
│       │   │   │   ├── experience/     # Work experience timeline
│       │   │   │   ├── hero/           # Hero section
│       │   │   │   ├── navbar/         # Navigation bar
│       │   │   │   └── projects/       # Projects showcase
│       │   │   ├── directives/         # Custom directives
│       │   │   ├── services/          # Services (SEO, etc.)
│       │   │   └── app.component.ts    # Root component
│       │   ├── styles/
│       │   │   └── _variables.scss    # Global SCSS variables
│       │   └── index.html              # Main HTML with SEO meta tags
│       ├── public/
│       │   ├── assets/                # Images, logos, certificates
│       │   ├── manifest.json          # PWA manifest
│       │   ├── robots.txt             # SEO robots file
│       │   └── sitemap.xml            # SEO sitemap
│       ├── angular.json               # Angular configuration
│       ├── package.json               # Dependencies
│       └── tsconfig.json              # TypeScript configuration
└── README.md
```

---

## 🎯 **Key Components**

### **HeroComponent**
- Main landing section with introduction
- Interactive Rust code snippet display
- Call-to-action buttons
- Statistics display

### **AboutComponent**
- Professional introduction
- Skills showcase with categorized technologies
- Collaboration invitation

### **EducationComponent**
- Academic journey timeline
- Course listings and achievements
- Institution logos and details

### **ExperienceComponent**
- Work experience timeline
- Detailed job descriptions
- Technology stacks used

### **ProjectsComponent**
- Featured projects grid
- Project details with technologies
- Interactive project cards

### **ContactComponent**
- Social media links
- Contact information
- Call-to-action for opportunities

### **NavbarComponent**
- Responsive navigation bar
- Smooth scrolling to sections
- Profile image and branding

---

## 🚢 **Deployment**

### **Cloudflare Pages (Recommended)**

The portfolio is automatically deployed to Cloudflare Pages using GitHub Actions whenever code is pushed to the `main` branch.

#### **Automatic Deployment Setup**

1. **Get Cloudflare API Credentials**
   - Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Go to **My Profile** → **API Tokens** → **Create Token**
   - Use **Edit Cloudflare Workers** template or create custom token with:
     - **Account** → **Cloudflare Pages** → **Edit** permissions
   - Copy the API token

2. **Get Cloudflare Account ID**
   - In Cloudflare Dashboard, select your account
   - Copy the Account ID from the right sidebar

3. **Set Up GitHub Secrets**
   - Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**
   - Add two secrets:
     - `CLOUDFLARE_API_TOKEN` - Your Cloudflare API token
     - `CLOUDFLARE_ACCOUNT_ID` - Your Cloudflare Account ID

4. **Push to Main Branch**
   ```bash
   git push origin main
   ```
   The GitHub Actions workflow will automatically build and deploy to Cloudflare Pages.

#### **Configure Custom Domain**

1. In Cloudflare Dashboard → **Pages** → **anandteertha-portfolio**
2. Click **Custom domains** → **Set up a custom domain**
3. Enter your domain and follow DNS configuration instructions

📖 **Detailed Setup Guide**: See [cloudflare-setup.md](cloudflare-setup.md) for complete instructions.

#### **Manual Deployment**

**Using PowerShell (Windows):**
```powershell
cd src/client
.\deploy-cloudflare.ps1
```

**Using Bash (Linux/Mac):**
```bash
cd src/client
./deploy-cloudflare.sh
```

**Using npm script:**
```bash
cd src/client
npm run deploy:cloudflare
```

**Note**: You'll need to set `CLOUDFLARE_API_TOKEN` environment variable for manual deployment.

### **GitHub Pages (Alternative)**

The portfolio can also be deployed to GitHub Pages. See the original `deploy.yml` workflow for GitHub Pages deployment.

---

## 🎨 **Customization**

### **Updating Personal Information**

Edit the component TypeScript files to update:
- **Hero Section**: `src/client/src/app/components/hero/hero.component.html`
- **About Section**: `src/client/src/app/components/about/about.component.ts`
- **Education**: `src/client/src/app/components/education/education.component.ts`
- **Experience**: `src/client/src/app/components/experience/experience.component.ts`
- **Projects**: `src/client/src/app/components/projects/projects.component.ts`
- **Contact**: `src/client/src/app/components/contact/contact.component.ts`

### **Updating SEO Meta Tags**

Edit `src/client/src/index.html` to update:
- Meta description and keywords
- Open Graph tags
- Twitter Card tags
- Structured data (JSON-LD schemas)

### **Changing Colors & Styling**

Edit `src/client/src/styles/_variables.scss` to customize the color palette and design system.

---

## 🔍 **SEO Features**

This portfolio includes comprehensive SEO optimizations:

- ✅ **200+ targeted keywords** for software developer, Rust developer, full stack developer, etc.
- ✅ **Structured data** (Person, WebSite, ProfilePage, BreadcrumbList, ItemList, SoftwareApplication, WorkExperience, EducationalOccupationalCredential)
- ✅ **Open Graph** and **Twitter Card** meta tags
- ✅ **Sitemap.xml** with all sections
- ✅ **robots.txt** for search engine crawlers
- ✅ **Semantic HTML** with ARIA labels
- ✅ **Performance optimizations** (preconnect, DNS prefetch, preload)
- ✅ **PWA support** with manifest.json

---

## 🧪 **Testing**

Run the test suite:

```bash
npm test
# or
ng test
```

---

## 📄 **License**

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 **Author**

**Anandteertha Rao**

- 🌐 **Portfolio**: [anandteertha.github.io/anandteertha-portfolio](https://anandteertha.github.io/anandteertha-portfolio/)
- 💼 **LinkedIn**: [anandteertha-rao](https://www.linkedin.com/in/anandteertha-rao/)
- 🐙 **GitHub**: [@anandteertha](https://github.com/anandteertha)
- 📧 **Email**: Available on portfolio contact section

---

## 🙏 **Acknowledgments**

- **Angular** team for the powerful framework
- **Rust** community for amazing systems programming capabilities
- All open-source contributors who made this project possible

---

## ⭐ **Show Your Support**

If you like this project, please consider giving it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ and lots of ☕ by Anandteertha Rao**

*"Crafting high-performance software solutions 🦀"*

[⬆ Back to Top](#-anandteertha-rao---portfolio)

</div>
