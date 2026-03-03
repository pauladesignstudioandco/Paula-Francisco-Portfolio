import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Brain,
  Code2,
  Trophy,
  Zap,
  Users,
  Workflow,
  BotIcon,
  MailCheckIcon,
  Globe,
  ZapIcon,
} from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Build automated workflows using Zapier, n8n, Make, and Pabbly to eliminate repetitive tasks and save hours weekly..",
  },
  {
    icon: BotIcon,
    title: "AI Integration",
    description:
      "Implement AI-powered solutions using ChatGPT, OpenAI API, and custom AI chatbots for enhanced productivity.",
  },
  {
    icon: MailCheckIcon,
    title: "Email Automation",
    description:
      "Design email sequences, triggers, funnels, and SMS automation for effective marketing campaigns.",
  },
  {
    icon: Globe,
    title: "API & Integrations",
    description:
      "Connect your tools seamlessly with REST APIs, webhooks, and third-party integrations for unified data flow.",
  },
  {
    icon: ZapIcon,
    title: "AI Agent Developer",
    description:
      "Designing and deploying AI agents & automations using n8n and RAG workflows to connect knowledge, LLMs, and business systems for automated decisioning.",
  },
  {
    icon: ZapIcon,
    title: "Process Optimization",
    description:
      "Troubleshoot workflows, implement error handling, and optimize performance for maximum efficiency.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A Technical Virtual Assistant with expertise in automation, CRM
            management, and AI-powered tools, focused on streamlining business
            operations and improving efficiency. Experienced in building and
            maintaining workflows using platforms such as Zapier, n8n,
            HighLevel, and other no-code/low-code solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="font-display text-xl font-semibold mb-4 gradient-text">
              Background
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Skilled in CRM setup, integrations, API connections, data
                management, and process optimization. Adept at supporting
                startups and growing businesses by reducing manual tasks,
                enhancing customer experience, and delivering reliable, scalable
                technical solutions with a proactive and detail-oriented
                approach.
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: 0.25 + index * 0.08,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* subtle shine effect */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h4 className="font-display font-semibold mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
