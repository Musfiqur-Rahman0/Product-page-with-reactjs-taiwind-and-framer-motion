import React, { useEffect } from "react";
import products from "../constent/constent";
import { delay, easeIn } from "framer-motion";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const RelatedProduct = ({ setMainProduct, mainProduct }) => {
  const mainVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
        ease: "easeIn",
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const handleProductClick = (product) => {
    setMainProduct({
      image: product.image,
      title: product.title,
      rating: product.rating,
      price: product.price,
    });
  };

  return (
    <div className="sm:px-10 px-5 ">
      <div className="w-full md:w-full ">
        <h2 className="text-3xl font-bold sm:mb-6 mb-3 text-secondary pt-4">
          Related Products
        </h2>
        <motion.div
          variants={mainVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <motion.div
              onClick={() => handleProductClick(product)}
              variants={itemVariants}
              key={product.id}
              initial={{ scale: 0.95 }}
              whileHover={{
                scale: 1,
                boxShadow: "0px 0px 20px 10px rgba(255, 255, 255, 0.5)", // All-sided shadow effect
              }}
              transition={{ duration: 0.5 }}
              className="border p-4 bg-white rounded-lg  "
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full sm:h-40 h-20 object-cover mb-2 rounded-lg"
              />

              <h3 className="sm:text-lg text-base  text-[#023047] font-semibold sm:mb-2 mb-1">
                {product.title}
              </h3>
              <span className="text-slate-800 sm:text-xl text-base">
                ${product.price.toFixed(2)}
              </span>
              <span className="sm:text-sm text-[12px] text-primary tracking-tighter line-through ml-2">
                $399
              </span>
              <p className="text-orange-500 text-sm flex items-center sm:gap-2 gap-1">
                {product.rating} <FaStar />
              </p>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 w-full"
              >
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
      l
    </div>
  );
};

export default RelatedProduct;
