import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Award, ExternalLink } from "lucide-react";

interface Certification {
  name: string;
  url: string;
  authority: string;
  license: string;
  description: string[];
  logo: string;
}

const certificationDescriptions: Record<
  string,
  { description: string[]; logo: string }
> = {
  "Prompt Engineering": {
    description: [
      "Expertise in Prompt Engineering to design precise, reusable prompts for AI agents and automated workflows.",
      "Enables reliable data extraction, summarization, customer support, and decision-making automation.",
    ],
    logo: "/logos/Prompt Engineering.jfif",
  },
  N8N: {
    description: [
      "Expertise in building custom automation workflows and AI agents using n8n with APIs, webhooks, and logic-based nodes.",
      "Enables scalable integrations, data processing, and end-to-end automation with full control over workflows.",
    ],
    logo: "/logos/n8n.jfif",
  },
  "Make (Integromat)": {
    description: [
      "Expertise in building automated workflows using Make to connect apps, APIs, and data sources seamlessly.",
      "Streamlines processes through triggers, routers, and error handling to reduce manual work and improve efficiency.",
    ],
    logo: "/logos/Make (Integromat).jfif",
  },
  Zapier: {
    description: [
      "Expertise in creating no-code and low-code automations with Zapier to connect apps and trigger workflows efficiently.",
      "Automates repetitive tasks, data sync, and notifications to improve productivity and operational speed.",
    ],
    logo: "/logos/Zapier.jfif",
  },
};

const priorityOrder = [
  "Prompt Engineering",
  "N8N",
  "Make (Integromat)",
  "Zapier",
];

export const Certifications = ({ limit }: { limit?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    fetch("/Certifications.csv")
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n").slice(1);
        const certs: Certification[] = [];

        lines.forEach((line) => {
          if (!line.trim()) return;

          const parts: string[] = [];
          let current = "";
          let inQuotes = false;

          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"') {
              inQuotes = !inQuotes;
            } else if (char === "," && !inQuotes) {
              parts.push(current.trim());
              current = "";
            } else {
              current += char;
            }
          }
          parts.push(current.trim());

          const name = parts[0] || "";
          const url = parts[1] || "";
          const authority = parts[2] || "";
          const license = parts[5] || "";

          if (name && certificationDescriptions[name]) {
            certs.push({
              name,
              url,
              authority,
              license,
              description: certificationDescriptions[name].description,
              logo: certificationDescriptions[name].logo,
            });
          }
        });

        const orderedCerts = certs.sort((a, b) => {
          const aIndex = priorityOrder.indexOf(a.name);
          const bIndex = priorityOrder.indexOf(b.name);
          if (aIndex === -1 && bIndex === -1) return 0;
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        });

        setCertifications(limit ? orderedCerts.slice(0, limit) : orderedCerts);
      })
      .catch((error) => console.error("Error loading certifications:", error));
  }, [limit]);

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials demonstrating expertise across data
            science, analytics, and cloud technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.a
              key={cert.name}
              onClick={() => setActiveCert(cert)}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group cursor-pointer hover:translate-y-[-4px] hover:shadow-lg"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shrink-0 p-2 border border-border/20 group-hover:border-primary/30 transition-colors">
                  <img
                    src={cert.logo}
                    alt={cert.authority}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `<span class="font-bold text-primary text-lg">${cert.authority
                        .substring(0, 3)
                        .toUpperCase()}</span>`;
                    }}
                  />
                </div>
                <ExternalLink
                  size={16}
                  className="text-primary opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
                />
              </div>

              <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {cert.name}
              </h3>

              <p className="text-sm text-primary font-semibold mb-3">
                {cert.authority}
              </p>

              <ul className="space-y-2 mb-4">
                {cert.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {cert.license && (
                <p className="text-xs text-muted-foreground mt-auto pt-4 border-t border-border/50">
                  License: {cert.license}
                </p>
              )}
            </motion.a>
          ))}
        </div>
      </div>
      {activeCert && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveCert(null)}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl p-6 max-w-3xl w-full shadow-2xl relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              ✕
            </button>

            <h3 className="font-display font-bold text-xl mb-4 text-center">
              {activeCert.name}
            </h3>

            <div className="flex justify-center">
              <img
                src={activeCert.logo}
                alt={activeCert.name}
                className="max-h-[70vh] w-auto object-contain rounded-lg"
              />
            </div>

            {activeCert.license && (
              <p className="text-sm text-muted-foreground text-center mt-4">
                License: {activeCert.license}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
