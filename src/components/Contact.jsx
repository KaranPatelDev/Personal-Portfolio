import { motion } from "framer-motion";
import Globe from "./ui/globe";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/KaranPatelDev" },
  { name: "LinkedIn", href: "https://linkedin.com/in/karan-patel-16700a215/" },
  { name: "Twitter", href: "https://x.com/KaranPatel1404" },
];

const Contact = () => {
  const cards = [
    {
      label: "Email",
      className:
        "md:absolute md:left-[6%] md:top-[24%] md:-translate-x-8 md:text-left md:items-start",
      content: (
        <a
          href="mailto:mpkaranpatel001018@gmail.com"
          className="block text-lg md:text-2xl font-semibold tracking-tight text-white hover:text-purple-300 transition-colors break-words"
        >
          mpkaranpatel001018@gmail.com
        </a>
      ),
    },
    {
      label: "Location",
      className:
        "md:absolute md:right-[6%] md:top-[18%] md:translate-x-8 md:text-left md:items-start",
      content: (
        <p className="text-lg md:text-2xl font-semibold tracking-tight text-white/90">
          Gujarat, India
        </p>
      ),
    },
    {
      label: "Social",
      className:
        "md:absolute md:left-1/2 md:bottom-[10%] md:-translate-x-1/2 md:items-center md:text-center",
      content: (
        <div className="flex flex-col gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-lg md:text-xl font-medium text-white/90 hover:text-purple-300 transition-colors"
            >
              {link.name} ↗
            </a>
          ))}
        </div>
      ),
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050816]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(145,94,255,0.35),transparent_55%),radial-gradient(circle_at_80%_120%,rgba(56,189,248,0.18),transparent_55%)]" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24"
      >
        <div className="relative w-full max-w-5xl md:min-h-[540px]">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative aspect-square w-[min(80vw,520px)]">
              <Globe className="pointer-events-none md:pointer-events-auto top-0" />
              <div className="absolute inset-0 rounded-full border border-white/15 opacity-60" />
              <div className="absolute inset-[-10%] rounded-full bg-purple-500/20 blur-3xl" />
            </div>
          </div>

          <div className="relative flex flex-col items-center gap-6 md:gap-0 md:min-h-[540px]">
            {cards.map((card, index) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col items-center w-full max-w-sm md:max-w-md mx-auto md:mx-0 text-center p-6 md:p-7 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_45px_-25px_rgba(145,94,255,0.55)] overflow-hidden ${card.className}`}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-gray-300/80">
                  {card.label}
                </span>
                <div className="mt-3 font-medium text-white/90">{card.content}</div>
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top,rgba(145,94,255,0.25),transparent_55%)]" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-16 text-xs tracking-[0.35em] text-gray-400 text-center uppercase"
        >
          © 2025 Designed & Developed by{" "}
          <span className="text-purple-300">Karan Patel</span>
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Contact;
