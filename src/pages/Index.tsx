import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
// import { Experience } from '@/components/Experience';
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const Index = () => {
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  useEffect(() => {
    document.title =
      "Steve Vincent Luzong | Data Analyst & Data Scientist Portfolio";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Portfolio of Steve Vincent Luzong - Data Analyst, Data Scientist, and Codeforces Master based in Dublin, Ireland. Expertise in Python, SQL, Machine Learning, Tableau, Power BI, and competitive programming.",
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Education />

        {showAllCertifications ? (
          <Certifications />
        ) : (
          <>
            <Certifications limit={6} />
            <div className="text-center pb-12">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                onClick={() => setShowAllCertifications(true)}
                className="btn-primary"
              >
                View All Certifications
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
