import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 left-0 right-0 w-full flex items-center py-3 z-30 border-b border-white/10 bg-gradient-to-r from-[#070d2e]/90 via-[#050a20]/90 to-[#070d2e]/90 backdrop-blur-xl shadow-[0_18px_45px_-28px_rgba(145,94,255,0.7)]`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-1"
          >
            <motion.span
              className="text-white text-[20px] font-bold drop-shadow-[0_0_12px_rgba(145,94,255,0.35)]"
              animate={{
                color: ["#915eff", "#ffffff", "#915eff"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              &lt;
            </motion.span>
            <motion.span
              className="text-white text-[18px] font-semibold tracking-wide drop-shadow-[0_0_14px_rgba(56,189,248,0.25)]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              KaranPatel
            </motion.span>
            <motion.span
              className="text-white text-[20px] font-bold drop-shadow-[0_0_12px_rgba(145,94,255,0.35)]"
              animate={{
                color: ["#915eff", "#ffffff", "#915eff"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              /&gt;
            </motion.span>
          </motion.div>
        </Link>

        <ul className="list-none hidden text-nowrap sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`group relative text-[18px] font-semibold transition-colors after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#915eff] after:to-[#38bdf8] after:transition-transform after:duration-300 after:origin-left ${
                active === link.title
                  ? "text-white after:scale-x-100"
                  : "text-white/70 after:scale-x-0"
              } hover:text-white hover:after:scale-x-100 cursor-pointer`}
              onClick={() => {
                if (!link.external) {
                  setActive(link.title);
                }
              }}
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu icon */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={`${(toggle ? close : menu)}${(toggle ? close : menu).includes("?") ? "&" : "?"}tr=f-auto`}
            alt="menu"
            loading="lazy"
            className="w-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
            width={28}
            height={28}
          />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-gradient-to-b from-[#070d2e]/95 via-[#050816]/95 to-[#04050f]/95 border-l border-white/10 shadow-[0_25px_60px_-35px_rgba(145,94,255,0.75)] transition-transform duration-300 z-40 ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 p-6">
          <div className="w-full flex items-center justify-end">
            <img
              src={`${close}${close.includes("?") ? "&" : "?"}tr=f-auto`}
              alt="close"
              loading="lazy"
              className="w-[24px] h-[24px] object-contain cursor-pointer"
              onClick={() => setToggle(false)}
              width={24}
              height={24}
            />
          </div>

          {navLinks.map((link) => (
            <p
              key={link.id}
              onClick={() => {
                if (!link.external) {
                  setActive(link.title);
                }
                setToggle(false);
              }}
              className="text-[22px] mt-2 font-semibold text-white/80 hover:text-white hover:tracking-wide transition-all cursor-pointer"
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.title}
              </a>
            </p>
          ))}
        </div>
      </div>

      {toggle && (
        <div
          onClick={() => setToggle(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
