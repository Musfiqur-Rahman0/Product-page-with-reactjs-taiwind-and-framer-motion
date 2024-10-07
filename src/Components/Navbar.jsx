import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const mainVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, type: "spring", staggerChildren: 0.4 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "products", label: "Product" },
    { to: "about", label: "About" },
    { to: "services", label: "services" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="bg-background text-textPrimary fixed w-full z-20 h-16 border-b shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 h-full">
        <div className="text-2xl font-bold text-primary">Brand</div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <Link
              to={link.to}
              key={index}
              className="cursor-pointer hover:text-orange-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden text-primary">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0, transition: 0.3 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background "
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1, transition: { duration: 1 } }}
              exit={{ opacity: 0 }}
              className="flex flex-col space-y-4 p-4"
            >
              {navLinks.map((mobileLink, index) => (
                <Link
                  to={mobileLink.to}
                  key={index}
                  className="cursor-pointer hover:text-orange-600 "
                >
                  {mobileLink.label}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
