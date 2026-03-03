<div align="center">

<!-- 🌈 Modern Gradient Banner -->
<img src="https://capsule-render.vercel.app/api?type=waving&height=230&color=0:4F46E5,100:9333EA&text=Dinesh+Barri+%7C+Portfolio+Website&fontColor=ffffff&fontSize=45&fontAlignY=35&desc=Modern+AI+Driven+Portfolio+Built+with+Precision&descAlignY=60&animation=fadeIn" />

<!-- ✨ Typing Subtitle -->
<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1200&color=8A2BE2&center=true&vCenter=true&width=700&lines=Full+Stack+Portfolio+Built+Using+React+%2B+Tailwind;Showcasing+Data+Science+%2C+Machine+Learning+%26+Analytics;End-to-End+Projects+%7C+Dashboards+%7C+Case+Studies;Interactive+Design+%7C+Clean+UI+%7C+Fast+Performance" />
</p>

<!-- 🔥 Highlight Badges -->

 <div align="center">
<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/TailwindCSS-0EA5E9?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/EmailJS-F02E65?style=for-the-badge&logo=emailjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

</div>

---

**A modern, responsive, and visually stunning portfolio website showcasing my journey as a Data Professional**


</div>

---

## ✨ Overview

This portfolio represents a comprehensive showcase of professional experience, technical skills, and innovative projects in AI/ML engineering and Data Science/Analytics  and Automation in n8n. Built with modern web technologies and featuring a unique cyberpunk design aesthetic.

---

## ✨ Features

This portfolio website is designed to **WOW** visitors with its premium aesthetics and smooth user experience:

### 🎨 **Premium Design**
- **Dark Mode First** - Sleek, modern dark theme with glassmorphism effects
- **Smooth Animations** - Powered by Framer Motion for fluid transitions and micro-interactions
- **Responsive Design** - Flawless experience across all devices (mobile, tablet, desktop)
- **Custom Gradients** - Eye-catching gradient text and background effects

### 📱 **Interactive Sections**
- **Hero Section** - Dynamic typewriter effect with role rotation
- **About Me** - Comprehensive introduction with downloadable resume
- **Experience** - Timeline-based work history with company logos and achievements
- **Education** - Academic background with institution details
- **Professional Certifications** - Showcase of credentials from Google, IBM, and more
- **Skills** - Categorized technical skills with visual indicators
- **Projects** - Portfolio of data science and analytics projects with live demos
- **Contact Form** - Fully functional contact form powered by EmailJS

### 🛠️ **Technical Highlights**
- ⚡ **Lightning Fast** - Built with Vite for optimal performance
- 🎯 **Type Safe** - Full TypeScript implementation
- 📧 **Email Integration** - EmailJS for seamless contact form functionality
- 🎭 **Component Library** - Radix UI + shadcn/ui for accessible components
- 🎨 **Styling** - Tailwind CSS with custom design tokens
- 📊 **Form Validation** - React Hook Form with Zod schema validation

---

## 🖼️ Preview

<div align="center">
 
 [Portfolio_Website Preview](https://github.com/user-attachments/assets/4c0597d2-472e-4da1-8bb7-ffaf92cff2d2)
  <p>
    <a href="https://dineshbarri-portfolio.vercel.app" target="_blank">
      🚀 View Live Demo
    </a>
  </p>
  
</div>

---

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** or **bun** - Comes with Node.js

### Installation

Follow these steps to run the portfolio locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/dineshbarri/dineshbarri-portfolio.git

# 2️⃣ Navigate to the project directory
cd dineshbarri-portfolio

# 3️⃣ Install dependencies
npm install
# or if you prefer bun
bun install

# 4️⃣ Start the development server
npm run dev
# or
bun run dev
```

The application will open at **`http://localhost:5173`** 🎉

---

## 📧 EmailJS Setup Guide

The contact form uses **EmailJS** to send emails directly from the browser without a backend server. Here's how to set it up:

### Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### Step 2: Set Up Email Service

1. Navigate to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Copy your **Service ID** (e.g., `service_rus0kuj`)

### Step 3: Create Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template variables in your email body:

```
From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save and copy your **Template ID** (e.g., `template_tlv...`)

### Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `GucQZNTs.....`)

### Step 5: Update the Code

Open `src/components/Contact.tsx` and update the EmailJS credentials:

```typescript
const result = await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  e.currentTarget,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
);
```

### Template Variable Names

Ensure your form field names match the template variables:
- `from_name` - Sender's name
- `from_email` - Sender's email
- `subject` - Email subject
- `message` - Email message

> **💡 Pro Tip:** The current implementation uses these exact field names. If you change them, update both the form inputs and EmailJS template!

---

## 🏗️ Project Structure

```
dineshbarri-portfolio/
├── public/                    # Static assets
│   ├── images/               # Project images and logos
│   └── resume.pdf            # Downloadable resume
├── src/
│   ├── components/           # React components
│   │   ├── About.tsx         # About section
│   │   ├── Certifications.tsx # Professional certifications
│   │   ├── Contact.tsx       # Contact form with EmailJS
│   │   ├── Education.tsx     # Education timeline
│   │   ├── Experience.tsx    # Work experience
│   │   ├── Footer.tsx        # Footer component
│   │   ├── Hero.tsx          # Hero section with typewriter
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Projects.tsx      # Project showcase
│   │   ├── Skills.tsx        # Skills section
│   │   └── ui/               # Reusable UI components (shadcn)
│   ├── hooks/                # Custom React hooks
│   ├── lib/                  # Utility functions
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.tsx              # App entry point
├── Certifications.csv        # Certification data
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite configuration
```

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.8.3** - Type-safe JavaScript
- **Vite 5.4.19** - Next-generation frontend tooling

### **Styling & UI**
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Framer Motion 12.23.25** - Production-ready animation library
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Re-usable component library
- **Lucide React** - Beautiful & consistent icon set

### **Form Handling**
- **React Hook Form 7.61.1** - Performant form validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **EmailJS 4.4.1** - Email service for contact form

### **Additional Libraries**
- **React Router DOM 6.30.1** - Client-side routing
- **TanStack Query 5.83.0** - Powerful data synchronization
- **date-fns 3.6.0** - Modern date utility library
- **Recharts 2.15.4** - Composable charting library

---

## 📜 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

---

## 🎯 Key Features Explained

### 1. **Dynamic Typewriter Effect**
The hero section features a rotating typewriter animation showcasing different roles:
- Data Analyst
- Data Scientist
- ML Enthusiast
- Codeforces Master

### 2. **Glassmorphism Design**
Modern glass-card effects with backdrop blur and transparency for a premium look.

### 3. **Smooth Scroll Navigation**
Click navigation links to smoothly scroll to sections with offset handling.

### 4. **Responsive Certifications**
Certifications are loaded from `Certifications.csv` with:
- Credential links
- Issue dates
- Learning highlights
- "View All" feature for 6+ certifications

### 5. **Interactive Project Cards**
Each project card includes:
- Live demo links
- GitHub repository links
- Technology tags
- Project descriptions
- Hover animations

### 6. **Contact Form Validation**
Real-time form validation with:
- Required field checks
- Email format validation
- Success/error toast notifications
- Loading states during submission

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site will be live in seconds! 🚀

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repo for continuous deployment

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 📊 Portfolio Projects Showcase

This portfolio highlights various data science and analytics projects:

### 🏨 **Ireland Hotel Analytics**
- End-to-end data pipeline analyzing Irish hospitality market
- Technologies: Python, SQL, Tableau, Netlify
- [Live Demo](https://ireland-hotel-analytics.netlify.app/) | [GitHub](https://github.com/dineshbarri/ireland-hotel-pricing-ratings-analysis)

### 🎥 **AI Video Factory**
- Automated video creation with Google Veo3 and n8n
- Technologies: AI, Automation, YouTube API, Google Drive
- [GitHub](https://github.com/dineshbarri/AI-Video-Factory-Veo3-Automation-Pipeline)

### 🏅 **Olympic Data Analytics Dashboard**
- 120 years of Olympic history visualization (1896-2016)
- Technologies: Power BI, Data Visualization
- [GitHub](https://github.com/dineshbarri/Olympic-Data-Analytics-Dashboard-1896-2016-Power-BI-Insights)

### 🤖 **Plemdo AI Enterprise Analytics**
- WhatsApp to boardroom report in 60 seconds
- Technologies: AI, n8n, WhatsApp API, Data Visualization
- [GitHub](https://github.com/dineshbarri/Plemdo-AI-Enterprise-Analytics)

### 🧙 **Harry Potter Data Analytics**
- Interactive Tableau dashboard with book sales and trends
- Technologies: Tableau, EDA, Data Visualization
- [GitHub](https://github.com/dineshbarri/Wizarding-Analytics-Harry-Potter-Through-Data-)

*...and many more on my [GitHub](https://github.com/dineshbarri?tab=repositories)!*

---

## 📫 Contact

**Dinesh Barri**

- 📧 Email: [dineshbarri1997@gmail.com](mailto:dineshbarri1997@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/dinesh-barri](https://www.linkedin.com/in/dinesh-barri/)
- 🐙 GitHub: [github.com/dineshbarri](https://github.com/dineshbarri)
- 🌐 Portfolio: [dineshbarri.dev](https://dineshbarri.dev)
- 📱 Phone: +353 89 203 3146
- 📍 Location: Dublin, Ireland 🇮🇪

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License



[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Design Inspiration** - Modern portfolio trends and glassmorphism
- **Icons** - [Lucide Icons](https://lucide.dev/)
- **UI Components** - [shadcn/ui](https://ui.shadcn.com/)
- **Animations** - [Framer Motion](https://www.framer.com/motion/)
- **Email Service** - [EmailJS](https://www.emailjs.com/)
- **Hosting** - [Vercel](https://vercel.com/) / [Netlify](https://www.netlify.com/)



---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page if you want to contribute.

---

### ⭐ If you like this project, don't forget to give it a star!
#   P a u l a - F r a n c i s c o - P o r t f o l i o  
 