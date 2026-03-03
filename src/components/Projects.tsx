import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

const categories = [
  "🎯 All Projects",
  "⚡ Zapier",
  "🤖 N8N",
  "🛠️ Make (Integromat)",
  // '🤖 AI & Automation',
  // '📊 PowerBI',
  // '📈 Tableau',
  // '🧠 ML & Data Science',
  // '💾 SQL',
];

const projects = [
  {
    title: "ASANA CRM Lead Engagement Workflow",
    description:
      "Automated lead engagement workflow with multi-path routing based on lead status, including automated emails, task creation, and AI-powered personalized messaging.",
    tags: ["Zapier", "Asana", "Google Drive"],
    categories: ["⚡ Zapier"],
    github: "",
    live: "",
    image: "/ASANA CRM Lead Enegagement Workflow.png",
  },
  {
    title: "Automated Lead Enrichment",
    description:
      "Built an automated lead enrichment system using webhooks and Apollo integration, with priority-based routing to Slack, Google Sheets, and AI-generated email drafts..",
    tags: ["Zapier", "Asana", "Google Drive"],
    categories: ["⚡ Zapier"],
    github: "",
    live: "",
    image: "/Automated Lead Enrichment.png",
  },
  {
    title: "AI Receptionist Workflow",
    description:
      "Comprehensive AI receptionist system with slot booking, updates, and cancellation flows. Features intelligent scheduling with Logsnag notifications and error handling.",
    tags: ["n8n", "AI", "Webhooks"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/AI Receptionist Workflow.JPG",
  },
  {
    title: "AI Social Media Content Creator",
    description:
      "Automated social media content generation using AI to create quotes and images, with weather-based customization and scheduled Facebook publishing.",
    tags: ["n8n", "Google Gemini", "Facebook"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/AI SOCIAL MEDIA Content Creator.png",
  },
  {
    title: "ASMR Video Content Creator",
    description:
      "Automated video content creation pipeline with AI prompt generation, JWT authentication, video generation, and multi-platform publishing to Facebook and YouTube.",
    tags: ["n8n", "Google Gemini", "Youtube"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/ASMR Video Content Creator.JPG",
  },
  {
    title: "Facebook AI Agent",
    description:
      "Intelligent Facebook chatbot using Google Gemini AI with document retrieval, memory context, and automated response handling via webhooks.",
    tags: ["n8n", "Google Gemini", "Webhooks"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/Facebook AI Agent.JPG",
  },
  {
    title: "Asana-Xero Integration",
    description:
      "Connected Asana task management with Xero accounting, including iterators, routers, and automated data logging to Google Sheets.",
    tags: ["Make", "ASANA", "Xero", "Google Sheets"],
    categories: ["🛠️ Make (Integromat)"],
    github: "",
    live: "",
    image: "/Asana-Xero Integration.png",
  },
  {
    title: "Gmail AI Processing Workflow",
    description:
      "Intelligent email processing workflow using Google Gemini AI for content analysis, with automated responses and data logging to Google Sheets.",
    tags: ["Make", "Gmail", "Google Gemini AI"],
    categories: ["🛠️ Make (Integromat)"],
    github: "",
    live: "",
    image: "/Gmail AI Processing Workflow.png",
  },
  {
    title: "Social Media Automation",
    description:
      "Automated social media posting workflow triggered from Google Sheets, with Slack notifications, Facebook publishing, and JSON data handling.",
    tags: ["Make", "Google Sheets", "Slack", "Facebook"],
    categories: ["🛠️ Make (Integromat)"],
    github: "",
    live: "",
    image: "/Social Media Automation.png",
  },
  {
    title: "Google Maps Lead Generation & Notification Workflow",
    description:
      "An automated workflow that scrapes targeted business leads from Google Maps, saves them to Google Sheets, summarizes new results, and sends a Gmail email digest—turning search parameters into ready-to-action leads with minimal manual work.",
    tags: ["Apify", "Google Maps", "Google Sheets", "Gmail"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/Google Maps Lead Generation & Notification Workflow.png",
  },
  {
    title: "Lead Nurturing with No-Code Automation (n8n)",
    description:
      "A no-code lead nurturing workflow that triggers when a new row is added in Google Sheets, waits for a set period, then uses an AI Agent (Google Gemini) to generate a personalized follow-up message. The workflow updates the lead status back in Google Sheets and sends the outreach/notification through Gmail and Slack—keeping follow-ups consistent, timely, and trackable.",
    tags: ["Google Sheets", "Google Gemini (AI Agent)", "Gmail", "Slack"],
    categories: ["🤖 N8N"],
    github: "",
    live: "",
    image: "/Lead Nurturing.JPG",
  },
  // {
  //   title: 'AI Video Factory - Veo3 Automation',
  //   description: 'Automated video creation system powered by Google Veo3 and n8n — generate, store, and publish AI-generated videos with captions, Drive uploads, and YouTube automation.',
  //   tags: ['AI', 'Automation', 'Google Gemini', 'n8n', 'YouTube'],
  //   categories: ['🤖 AI & Automation'],
  //   github: 'https://github.com/dineshbarri/AI-Video-Factory-Veo3-Automation-Pipeline',
  //   image: '/project-ai-video.png',
  // },
  // {
  //   title: 'Plemdo AI Enterprise Analytics',
  //   description: 'From WhatsApp message to boardroom report in 60 seconds. AI-powered analytics that transforms conversations into consultant-grade intelligence.',
  //   tags: ['AI', 'WhatsApp API', 'n8n', 'Data Analysis'],
  //   categories: ['🤖 AI & Automation'],
  //   github: 'https://github.com/dineshbarri/Plemdo-AI-Enterprise-Analytics',
  //   image: '/project-plemdo.png',
  // },
  // {
  //   title: 'Neural Digit Recognizer',
  //   description: 'Interactive web app built with Flask and PyTorch that recognizes handwritten digits using a Convolutional Neural Network (CNN). Includes Docker deployment.',
  //   tags: ['PyTorch', 'Flask', 'Deep Learning', 'Docker', 'CNN'],
  //   categories: ['🌐 Web Development', '🧠 ML & Data Science'],
  //   github: 'https://github.com/dineshbarri/Neural_Digit_Recognizer',
  //   live: 'https://neural-digit-recognizer-t47d.onrender.com/',
  //   image: '/project-neural.png',
  // },
  // {
  //   title: 'Harry Potter Data Analytics',
  //   description: 'Interactive Tableau dashboard uncovering fascinating insights from Harry Potter book sales, awards, and release trends across the wizarding universe.',
  //   tags: ['Tableau', 'Data Visualization', 'EDA'],
  //   categories: ['📈 Tableau'],
  //   github: 'https://github.com/dineshbarri/Wizarding-Analytics-Harry-Potter-Through-Data-',
  //   live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/TheWizardingWorldUnveiledAHarryPotterDataJourney/Dashboard1',
  //   image: '/project-hp.png',
  // },
  // {
  //   title: 'Titanic Survivors Dashboard',
  //   description: 'Visualization uncovering survival patterns based on gender, age, class, and fare. Interactive Tableau dashboard with comprehensive analysis.',
  //   tags: ['Tableau', 'Data Visualization', 'Analytics'],
  //   categories: ['📈 Tableau'],
  //   github: 'https://github.com/dineshbarri/Titanic-Survivors-Analysis-Dashboard',
  //   live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/TitanicSurvivorsAnalysisDashboard/TitanicPassengersOverview',
  //   image: '/project-titanic.png',
  // },
  // {
  //   title: 'Netflix SQL Analysis',
  //   description: 'End-to-end SQL analytics project powered by MySQL — uncovering global streaming trends, ratings, and regional insights from Netflix data.',
  //   tags: ['MySQL', 'SQL', 'Data Analysis'],
  //   categories: ['💾 SQL'],
  //   github: 'https://github.com/dineshbarri/Netflix_Sql_Analysis',
  //   image: '/project-netflix.png',
  // },
  // {
  //   title: 'COVID-19 Ireland Dashboard',
  //   description: 'Data-driven app visualizing Ireland\'s COVID-19 trends using open-source datasets. Interactive charts and real-time filtering.',
  //   tags: ['JavaScript', 'HTML', 'CSS', 'Data Visualization'],
  //   categories: ['🌐 Web Development'],
  //   github: 'https://github.com/dineshbarri/covid19-ireland-dashboard',
  //   live: 'https://dineshbarri-ireland-covid19-analysis.netlify.app/',
  //   image: '/project-covid.png',
  // },
  // {
  //   title: 'Retail Pulse Dashboard',
  //   description: 'Comprehensive analytics platform empowering business leaders to explore sales, profit, and order trends across categories, time, and regions. Built with Tableau for actionable insights.',
  //   tags: ['Tableau', 'Data Visualization', 'Business Intelligence', 'Analytics'],
  //   categories: ['📈 Tableau'],
  //   github: 'https://github.com/dineshbarri/Retail_Pulse-Dashboard',
  //   live: 'https://public.tableau.com/app/profile/dinesh.barri8170/viz/RetailPulseDashboard/RetailAnalysisDashboarding',
  //   image: '/project-retail-pulse.png',
  // },
  // {
  //   title: 'Ireland Hotel Analytics Website',
  //   description: 'Interactive analytics dashboard analyzing Irish hospitality market with real-time data visualization. Features interactive maps, price vs quality analysis, advanced filtering, and mobile-responsive design showcasing modern web development excellence.',
  //   tags: ['JavaScript', 'HTML', 'CSS', 'ECharts', 'Leaflet', 'Data Visualization'],
  //   categories: ['🌐 Web Development'],
  //   github: 'https://github.com/dineshbarri/Ireland-Hotel-Analytics-Website',
  //   live: 'https://ireland-hotels-dineshbarri.netlify.app/',
  //   image: '/project-ireland-hotel-web.png',
  // },
];

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    scale: 0.7,
    opacity: 0,
    y: 40,
  },
  visible: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 220,
      damping: 20,
    },
  },
  exit: {
    scale: 0.7,
    opacity: 0,
    y: 40,
    transition: { duration: 0.2 },
  },
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState("🎯 All Projects");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects = projects.filter(
    (project) =>
      activeCategory === "🎯 All Projects" ||
      project.categories.includes(activeCategory),
  );

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work in data analytics, machine learning,
            and AI automation
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false); // Reset show all when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                  : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: "0 8px 32px 0 hsl(var(--card) / 0.16)" }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <div
                  className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3
                  onClick={() => setSelectedImage(project.image)}
                  className="cursor-pointer font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2"
                >
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {/* <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a> */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? "Show Less" : "View All Projects"}
              <ChevronRight
                size={18}
                className={`transition-transform ${showAll ? "rotate-90" : ""}`}
              />
            </button>
          </motion.div>
        )}

        {/* Image Modal */}
        {/* Image Modal with Zoom Animation */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Project Preview"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />

                {/* Close button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black rounded-full px-3 py-1 text-sm"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
