import React from "react";
import { color, motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const icons = [
    { icon: FaFacebookF, color: "#4267B2" }, // Facebook Blue
    { icon: FaInstagram, color: "#C13584" }, // Instagram Gradient
    { icon: FaTiktok, color: "#69C9D0" }, // TikTok Light Blue
    { icon: FaXTwitter, color: "#1DA1F2" }, // Twitter Blue
    { icon: FaYoutube, color: "#FF0000" }, // YouTube Red
  ];

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

  return (
    <motion.footer className="bg-gray-900 text-white py-4 md:py-8 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto flex flex-col-reverse justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left mt-2"
        >
          <h3 className="text-lg font-semibold text-center">Company name</h3>
          <p className="text-sm">© 2024 All rights reserved.</p>
        </motion.div>
        <motion.div
          variants={mainVariants}
          initial="hidden"
          whileInView="visible"
          className="flex space-x-4"
        >
          {icons.map((Icon, index) => {
            const IconComponent = Icon.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 360, color: Icon.color }}
                transition={{ duration: 0.3 }}
                className="h-8 w-8 sm:h-10 sm:w-10  rounded-full bg-white flex justify-center items-center text-black"
              >
                <IconComponent className="text-[18px] sm:text-[24px]" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
