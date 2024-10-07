import React from "react";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-800">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{
          boxShadow: "0px 10px 20px 10px  rgba(255, 255, 255, 0.3) ",
          transition: { duration: 0.4 },
        }}
        transition={{ duration: 0.5, type: "spring" }}
        className="bg-white p-10 rounded-lg shadow-lg"
      >
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl mb-4">Oops! Page not found.</p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-lg">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <a
            href="/"
            className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors duration-200"
          >
            <FaHome className="mr-2" />
            Go Home
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1.2 }}
        transition={{
          yoyo: Infinity,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8"
      ></motion.div>
    </div>
  );
};

export default ErrorPage;
