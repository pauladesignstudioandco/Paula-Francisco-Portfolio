import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  // { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  // { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

type MagneticLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  underlineId: string;
  blurId: string;
};

const MagneticLink = ({
  href,
  children,
  isActive,
  onClick,
  underlineId,
  blurId,
}: MagneticLinkProps) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // strength: lower = subtler, higher = stronger magnet
    const strength = 0.18;

    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`relative text-sm font-medium transition-colors ${
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground"
      }`}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      style={{ willChange: "transform" }}
    >
      {children}

      {/* Active Glow Underline */}
      {isActive && (
        <>
          <motion.span
            layoutId={underlineId}
            className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
          <motion.span
            layoutId={blurId}
            className="absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 blur-md opacity-70"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        </>
      )}
    </motion.a>
  );
};

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#about");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActiveHash(`#${visible.target.id}`);
      },
      {
        root: null,
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.4, 0.6],
      },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHash(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold">
            <span className="gradient-text">{`{ Automate with Steve }`}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeHash === link.href;

              return (
                <MagneticLink
                  key={link.href}
                  href={link.href}
                  isActive={isActive}
                  onClick={() => handleNavClick(link.href)}
                  underlineId="active-glow-underline"
                  blurId="active-glow-blur"
                >
                  {link.label}
                </MagneticLink>
              );
            })}

            <a href="#contact" className="btn-primary text-sm">
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeHash === link.href;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`relative py-2 transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <span className="relative inline-block">
                        {link.label}

                        {isActive && (
                          <>
                            <motion.span
                              layoutId="active-glow-underline-mobile"
                              className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 35,
                              }}
                            />
                            <motion.span
                              layoutId="active-glow-blur-mobile"
                              className="absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 blur-md opacity-70"
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 35,
                              }}
                            />
                          </>
                        )}
                      </span>
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-sm w-fit mt-2"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};
