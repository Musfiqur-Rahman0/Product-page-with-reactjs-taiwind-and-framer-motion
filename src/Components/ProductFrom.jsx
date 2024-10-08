import React, { useState } from "react";
import { FaRuler, FaStar } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { motion } from "framer-motion";
import { services } from "../constent/constent";
import { Link } from "react-router-dom";
import Review from "./Review";
import SizeGuide from "./SizeGuide";

const ProductFrom = ({ setMainProduct, mainProduct }) => {
  const colors = ["#ff6f61", "#4a90e2", "#7ed321", "#333333"];

  const [selectedColor, setSelectedColor] = useState(null);
  const handleColorSelection = (index) => {
    if (selectedColor === index) {
      setSelectedColor(null);
    } else {
      setSelectedColor(index);
    }
  };

  const sizes = ["XS", "S", "M", "L", "XL", "2XL"];
  const [selectedSize, setSelectedSize] = useState(null);
  const handleSizeSelection = (index) => {
    if (selectedSize === index) {
      setSelectedSize(null);
    } else {
      setSelectedSize(index);
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
  };

  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleSizeGuideToggle = () => {
    setIsSizeGuideOpen(!isSizeGuideOpen);
  };

  return (
    <form className="sm:px-5 px-0 ">
      <h2 className="sm:text-2xl lg:text-3xl text-xl font-bold tracking-tight text-secondary">
        {mainProduct.title}
      </h2>
      <div className="flex gap-3 sm:mt-2 mt-1">
        <div className="flex justify-center items-center">
          <SlBadge size={26} className="text-secondary" />
        </div>
        <p className="text-sm text-muted">
          adipisicing elit. Quis asperiores architecto unde{" "}
        </p>
      </div>
      <div className="flex sm:mt-5 mt-2 items-center sm:gap-2 gap-1">
        <div className="sm:text-xl text-[20px] flex items-center gap-2 text-secondary tracking-tighter font-semibold">
          <p>{mainProduct.rating}</p>
          <span>
            <FaStar className="text-[16px] sm:text-[18px]" />
          </span>
        </div>
        <div className="cursor-pointer  text-muted tracking-tighter flex items-center justify-center">
          <a
            href="#review-section"
            smooth={true}
            duration={500}
            className="sm:text-xl text-sm  hover:text-secondary "
          >
            97+ Reviews
          </a>
        </div>
      </div>
      <div className="flex mt-2 space-x-2 items-center">
        <h3 className="line-through text-primary">$299</h3>
        <h1 className="text-xl font-bold text-textPrimary">
          USD ${mainProduct.price}
        </h1>
      </div>
      <div className="mt-5 w-full h-[2px] bg-gray-400"></div>
      <div className="mt-2">
        <h3 className="text-textPrimary">Color</h3>
        <div className="flex gap-2">
          {[...Array(4)].map((_, index) => (
            <div
              onClick={() => handleColorSelection(index)}
              key={index}
              className={`h-5 w-5 rounded-[50%] cursor-pointer ${
                index === selectedColor ? "border-2 border-gray-400 " : ""
              }`}
              style={{ backgroundColor: colors[index] }}
            ></div>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <span className="text-[16px] text-gray-400">Size</span>
          <div
            onClick={handleSizeGuideToggle}
            className=" flex items-center justify-center gap-2 cursor-pointer"
          >
            <p className="text-[16px] text-gray-400">Size Guide</p>
            <FaRuler />
            {isSizeGuideOpen && (
              <SizeGuide handleSizeGuideToggle={handleSizeGuideToggle} />
            )}
          </div>
        </div>
        <div className="w-full flex mt-2 flex-wrap gap-3">
          {sizes.map((size, index) => (
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => handleSizeSelection(index)}
              key={index}
              className={`sm:h-10 h-8  sm:w-16 w-10 font-bold flex items-center justify-center bg-emerald-400 text-white rounded-lg cursor-pointer ${
                index === selectedSize
                  ? "border border-orange-400 backdrop:blur-lg"
                  : ""
              }`}
            >
              {size}
            </motion.div>
          ))}
        </div>
        <div className="flex gap-4 justify-center items-center w-[90%] sm:mt-10 mt-5">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFormSubmission}
            type="submit"
            className=" w-1/2 bg-secondary p-2 rounded-lg sm:text-xl text-[16px] font-semibold tracking-tight text-background"
          >
            Add to Cart{" "}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleFormSubmission}
            type="submit"
            className=" w-1/2 bg-orange-500 p-2 rounded-lg sm:text-xl text-[16px] font-semibold tracking-tight text-background"
          >
            Buy Now{" "}
          </motion.button>
        </div>
      </div>
      <div className="mt-5 w-full grid grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex items-center gap-2 h-8 ">
              <Icon color={service.color} size={18} />
              <h2 className="text-sm whitespace-nowrap text-textPrimary">
                {service.title}
              </h2>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default ProductFrom;
