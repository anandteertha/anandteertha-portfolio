<div align="center">

# 🚀 Cyberpunk 2099 Portfolio

### **A Futuristic, Interactive Portfolio Experience Built with Angular & Three.js**

[![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.175.0-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12.7-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)

[![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/anandteertha/anandteertha-portfolio?style=for-the-badge&logo=github)](https://github.com/anandteertha/anandteertha-portfolio/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/anandteertha/anandteertha-portfolio?style=for-the-badge&logo=github)](https://github.com/anandteertha/anandteertha-portfolio/network/members)

---

</div>

## ✨ **Overview**

Welcome to **Cyberpunk 2099 Portfolio** — a cutting-edge, immersive portfolio website that combines stunning 3D graphics, smooth animations, and a cyberpunk aesthetic to showcase professional work and projects. Built with modern web technologies, this portfolio delivers an unforgettable user experience that stands out from the crowd.

### 🎯 **Live Demo**

🌐 **[View Live Portfolio](https://anandteertha.github.io/anandteertha-portfolio/)**

---

## 🎨 **Features**

### 🌌 **Immersive 3D Background**
- **Dynamic starfield animation** powered by Three.js
- **1000+ animated stars** creating a mesmerizing space effect
- **Smooth camera movements** and responsive rendering
- **Non-blocking background** that doesn't interfere with UI interactions

### 🎭 **Cyberpunk Aesthetic**
- **Neon glow effects** on interactive elements
- **Dark theme** with vibrant accent colors
- **Smooth GSAP animations** for transitions and interactions
- **Responsive design** that works flawlessly on all devices

### 📱 **Portfolio Sections**

#### 🏠 **Hero Section**
- Animated introduction with glowing text effects
- Smooth scroll navigation
- Eye-catching call-to-action elements

#### 👨‍💻 **About Section**
- Personal introduction and professional summary
- Educational background and current pursuits
- Engaging visual presentation

#### 💼 **Work Experience**
- Interactive timeline showcasing professional journey
- Detailed work history with:
  - **Raychem (Chemelex)** — 3 years as Software Development Engineer
  - **Outrider.live** — Additional professional experience
- Hover effects and neon accents

#### 🚀 **Projects Showcase**
- Grid layout displaying featured projects:
  - **Lung Capacity Check** — Healthcare application
  - **Faculty Attendance System** — Management solution
  - **Crowd Counting** — Computer vision project
  - **Gym Manager Application** — Full-stack application
- Detailed project pages with images and descriptions
- Interactive cards with smooth animations

#### 📧 **Contact Section**
- Social media integration (GitHub, LinkedIn, Email)
- Professional contact information
- Easy-to-access links with hover effects

---

## 🛠️ **Tech Stack**

### **Frontend Framework**
- **Angular 19.2.0** — Modern, component-based framework
- **TypeScript 5.7.2** — Type-safe development
- **RxJS 7.8.0** — Reactive programming

### **3D Graphics & Animation**
- **Three.js 0.175.0** — 3D graphics library
- **GSAP 3.12.7** — Professional animation library

### **Styling**
- **SCSS** — Advanced CSS preprocessing
- **Custom cyberpunk color palette**
- **Responsive design** with mobile-first approach

### **Utilities**
- **Lodash 4.17.21** — JavaScript utility library
- **Zone.js 0.15.0** — Angular change detection

### **Build Tools**
- **Angular CLI 19.2.6** — Development and build tooling
- **Karma & Jasmine** — Testing framework

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
│       │   │   ├── modules/
│       │   │   │   ├── about/          # About section component
│       │   │   │   ├── background/      # 3D Three.js background
│       │   │   │   ├── contact/         # Contact & social links
│       │   │   │   ├── home/            # Home page component
│       │   │   │   ├── nav-bar/         # Navigation bar
│       │   │   │   ├── projects/        # Projects showcase
│       │   │   │   └── work-experience/ # Work experience timeline
│       │   │   ├── models/              # Data models & mappers
│       │   │   ├── resolvers/           # Route resolvers
│       │   │   └── app.component.ts     # Root component
│       │   ├── styles/
│       │   │   └── _variables.scss      # Global SCSS variables
│       │   └── main.ts                  # Application entry point
│       ├── public/
│       │   └── assets/                  # Images, certificates, etc.
│       ├── angular.json                 # Angular configuration
│       ├── package.json                 # Dependencies
│       └── tsconfig.json                # TypeScript configuration
└── README.md
```

---

## 🎯 **Key Components**

### **BackgroundComponent**
- Manages Three.js scene, camera, and renderer
- Creates animated starfield with 1000+ particles
- Handles window resize events
- Implements smooth star animation loop

### **HomeComponent**
- Main landing page orchestrator
- Integrates About, Work Experience, and Projects sections
- Provides smooth navigation flow

### **ProjectsComponent & WorkExperienceComponent**
- Display projects and work experience in grid/timeline format
- Interactive cards with hover effects
- Route to detailed entity pages

### **NavBarComponent**
- Responsive navigation bar
- Smooth scrolling to sections
- Profile image and branding

---

## 🚢 **Deployment**

### **Deploy to GitHub Pages**

1. **Build with base href**
   ```bash
   ng build --base-href "https://anandteertha.github.io/anandteertha-portfolio/"
   ```

2. **Deploy using Angular CLI GitHub Pages**
   ```bash
   npx angular-cli-ghpages --dir=dist/client/browser
   ```

### **Alternative: PowerShell Script**

A deployment script is available at `src/client/deploy.ps1`:

```powershell
cd src/client
.\deploy.ps1
```

---

## 🎨 **Customization**

### **Changing Colors**

Edit `src/client/src/styles/_variables.scss` to customize the cyberpunk color palette:

```scss
$primary-color: #your-color;
$accent-color: #your-accent;
$neon-glow: #your-glow-color;
```

### **Adding Projects**

Update the `EntityProxyMapper` class in `src/client/src/app/models/entity-proxy-mapper.ts` to add new projects or work experience entries.

### **Modifying 3D Background**

Customize the starfield in `src/client/src/app/modules/background/background.component.ts`:
- Change star count: `this.addStarField(2000)` // More stars
- Adjust animation speed: Modify the `speed` variable
- Customize star appearance: Edit `PointsMaterial` properties

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
- 💼 **LinkedIn**: [anandteertha-rao-0a25ba189](https://www.linkedin.com/in/anandteertha-rao-0a25ba189/)
- 🐙 **GitHub**: [@anandteertha](https://github.com/anandteertha)
- 📧 **Email**: [raoanandteertha@gmail.com](mailto:raoanandteertha@gmail.com)

---

## 🙏 **Acknowledgments**

- **Three.js** community for amazing 3D graphics capabilities
- **Angular** team for the powerful framework
- **GSAP** for smooth, professional animations
- All open-source contributors who made this project possible

---

## ⭐ **Show Your Support**

If you like this project, please consider giving it a ⭐ on GitHub!

---

<div align="center">

**Built with ❤️ and lots of ☕ by Anandteertha Rao**

*"Always reaching for the stars ✨"*

[⬆ Back to Top](#-cyberpunk-2099-portfolio)

</div>
