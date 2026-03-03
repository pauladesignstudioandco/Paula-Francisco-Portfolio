import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const experiences = [
  {
    title: "Data Analyst",
    company: "Cognizant",
    image: "/cognizant.png",
    period: "Jun 2019 - Jul 2023",
    location: "Hyderabad, India · On-site",
    description:
      "Delivered analytics solutions and automated reporting systems for Google Maps operations, driving real-time insights and operational efficiency across large-scale processes. Specialized in scalable dashboards, ETL automation, SQL analytics, and production reporting pipelines.",
    achievements: [
      "Built end-to-end analytics dashboards that reduced bug resolution time by 40% through automated alerts, SLO/ETA triggers, and structured monitoring.",
      "Developed impact analysis frameworks for call operations, improving call-success accuracy by 25% and supporting a 15% increase in human-connect rates.",
      "Automated ETL & data quality workflows using Python and SQL, reducing manual effort by 60% and improving data reliability.",
      "Created performance intelligence dashboards featuring 25+ KPIs to streamline workforce planning and improve operational decision-making.",
    ],
    technologies: [
      "SQL",
      "Python",
      "Looker (PLX)",
      "BigQuery",
      "ETL Automation",
      "Google Apps Script",
      "Power BI",
      "GCP",
      "Data Quality & Monitoring",
      "GenAI-assisted Automation",
    ],
  },
  {
    title: "Machine Learning Engineer Intern",
    company: "Atharvo",
    image: "/atharvo.png",
    period: "Feb 2019 – Apr 2019",
    location: "Karnataka, India",
    description:
      "Developed and optimized machine learning solutions for real-world applications, including feature engineering, model evaluation, and scalable workflows to support data-driven decisions and improve performance metrics.",
    achievements: [
      "Built and fine-tuned supervised learning models to increase prediction accuracy and stability.",
      "Created robust data preprocessing flows for feature engineering and dataset transformation.",
      "Collaborated with cross-functional teams to integrate ML outputs into usable workflows.",
    ],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Feature Engineering",
      "Model Evaluation",
    ],
  },
  {
    title: "Software Engineer",
    company: "HackerEarth",
    image: "/hackerearth.png",
    period: "Mar 2017 – Feb 2019",
    location: "Bengaluru, Karnataka, India · Remote",
    description:
      "Developed algorithm-driven programming challenges and assessment content to support global technical hiring and competitive coding events. Focused on high-quality problem design and robustness validations.",
    achievements: [
      "Authored algorithmic problems across multiple difficulty levels for global contests.",
      "Developed test suites with edge-case coverage and optimal execution constraints.",
      "Improved problem quality metrics through clearer problem statements and reference solutions.",
      "Scaled content creation that supported thousands of developers and hiring teams.",
    ],
    technologies: [
      "Algorithms",
      "Data Structures",
      "Problem Design",
      "Complexity Analysis",
      "Competitive Programming",
    ],
  },
];

export const Experience = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true, margin: '-100px' });
  // const [expandedCards, setExpandedCards] = useState<number[]>([]);
  // const toggleCard = (index: number) => {
  //   setExpandedCards(prev =>
  //     prev.includes(index)
  //       ? prev.filter(i => i !== index)
  //       : [...prev, index]
  //   );
  // };
  // return (
  //   <section id="experience" className="py-24 relative bg-secondary/20" ref={ref}>
  //     <div className="section-container">
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={isInView ? { opacity: 1, y: 0 } : {}}
  //         transition={{ duration: 0.6 }}
  //         className="mb-16 text-center"
  //       >
  //         <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
  //           Professional <span className="gradient-text">Journey</span>
  //         </h2>
  //         <p className="text-muted-foreground max-w-2xl mx-auto">
  //           From data analytics to automation and ML-driven insights, here’s my experience delivering business value with scalable solutions.
  //         </p>
  //       </motion.div>
  //       <div className="max-w-4xl mx-auto relative">
  //         <div className="absolute left-[34px] md:left-[46px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full shadow-[0_0_12px_rgba(var(--primary-rgb),0.25)]" />
  //         <div className="space-y-12">
  //           {experiences.map((exp, index) => {
  //             const isExpanded = expandedCards.includes(index);
  //             return (
  //               <motion.div
  //                 key={exp.company + exp.period}
  //                 initial={{ opacity: 0, x: -20 }}
  //                 animate={isInView ? { opacity: 1, x: 0 } : {}}
  //                 transition={{ duration: 0.5, delay: index * 0.1 }}
  //                 className="relative pl-20 md:pl-28"
  //               >
  //                 <div className="absolute left-[27px] md:left-[39px] top-0 w-4 h-4 rounded-full bg-background border-[3px] border-primary z-10 shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)] animate-pulse-glow" />
  //                 {/* Horizontal Connector Line */}
  //                 <div className="absolute left-[43px] md:left-[55px] top-6 w-8 md:w-12 h-[2px] bg-gradient-to-r from-primary to-transparent rounded-full opacity-60" />
  //                 <motion.div
  //                   className={`glass-card overflow-hidden transition-all duration-300 hover:border-primary/40 ${isExpanded ? 'border-primary/40 bg-secondary/40' : ''
  //                     }`}
  //                   whileHover={{ scale: 1.005 }}
  //                   layout
  //                 >
  //                   <div className="p-6 md:p-8">
  //                     <div className="flex items-start gap-4 md:gap-6 mb-6">
  //                       {/* Logo Container */}
  //                       <div className="shrink-0">
  //                         <div className="w-20 h-16 md:w-24 md:h-18 rounded-xl bg-transparent flex items-center justify-center">
  //                           {exp.image ? (
  //                             <img
  //                               src={exp.image}
  //                               alt={exp.company}
  //                               className="w-full h-full object-contain p-0"
  //                             />
  //                           ) : null}
  //                         </div>
  //                       </div>
  //                       {/* Title & Company */}
  //                       <div className="flex-1 min-w-0">
  //                         <h3 className="font-display text-lg md:text-xl font-bold text-foreground leading-tight mb-1">
  //                           {exp.title}
  //                         </h3>
  //                         <h4 className="text-base font-semibold text-primary mb-2">
  //                           {exp.company}
  //                         </h4>
  //                         <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs md:text-sm text-muted-foreground">
  //                           <span className="flex items-center gap-1.5">
  //                             📅 {exp.period}
  //                           </span>
  //                           {exp.location && (
  //                             <span className="flex items-center gap-1.5">
  //                               🌍 {exp.location}
  //                             </span>
  //                           )}
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <p className="text-muted-foreground leading-relaxed mb-6">
  //                       {exp.description}
  //                     </p>
  //                     <button
  //                       onClick={() => toggleCard(index)}
  //                       className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
  //                     >
  //                       {isExpanded ? 'Show Less' : 'Key Achievements & Skills'}
  //                       <ChevronDown
  //                         className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
  //                           }`}
  //                       />
  //                     </button>
  //                   </div>
  //                   <AnimatePresence>
  //                     {isExpanded && (
  //                       <motion.div
  //                         initial={{ height: 0, opacity: 0 }}
  //                         animate={{ height: 'auto', opacity: 1 }}
  //                         exit={{ height: 0, opacity: 0 }}
  //                         transition={{ duration: 0.3 }}
  //                       >
  //                         <div className="px-6 md:px-8 pb-8 pt-0 space-y-6 border-t border-border/50 mt-2">
  //                           {/* Achievements */}
  //                           <div className="pt-6">
  //                             <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
  //                               <span className="text-primary">⚡</span> Key Achievements
  //                             </h5>
  //                             <ul className="space-y-2">
  //                               {exp.achievements.map((achievement, i) => (
  //                                 <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
  //                                   <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
  //                                   <span>{achievement}</span>
  //                                 </li>
  //                               ))}
  //                             </ul>
  //                           </div>
  //                           {/* Technologies */}
  //                           <div>
  //                             <h5 className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3">
  //                               <span className="text-primary">💻</span> Technologies Used
  //                             </h5>
  //                             <div className="flex flex-wrap gap-2">
  //                               {exp.technologies.map((tech) => (
  //                                 <span
  //                                   key={tech}
  //                                   className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-foreground border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors"
  //                                 >
  //                                   {tech}
  //                                 </span>
  //                               ))}
  //                             </div>
  //                           </div>
  //                         </div>
  //                       </motion.div>
  //                     )}
  //                   </AnimatePresence>
  //                 </motion.div>
  //               </motion.div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
};
