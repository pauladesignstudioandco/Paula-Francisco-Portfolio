import { Github, Linkedin, Mail, BookOpen, BarChart3, Database, Code2 } from 'lucide-react';

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/steve-vincent-luzong-683022387/', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/titoteban', label: 'GitHub' },
  // { icon: BookOpen, href: '', label: 'Medium' },
  // { icon: BarChart3, href: '', label: 'Kaggle' },
  // { icon: Database, href: '', label: 'Tableau Public' },
  // { icon: BarChart3, href: '', label: 'Power BI' },
  // { icon: Code2, href: '', label: 'Codeforces' },
  { icon: Mail, href: 'mailto:stevevincentluzong@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50 bg-secondary/20">
      <div className="section-container">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <a href="#" className="font-display text-2xl font-bold mb-6">
            <span className="gradient-text">Steve Vincent</span>
            <span className="text-foreground"> Luzong</span>
          </a>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                title={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors">Education</a>
            <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Steve Vincent Luzong. All rights reserved.</p>
            <p className="mt-1">Workflow Automation Specialist</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
