import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/pexels-pavel-danilyuk-8000646.jpg";
import image2 from "../assets/pexels-pavel-danilyuk-8001072.jpg";
import image3 from "../assets/pexels-pavel-danilyuk-8001234.jpg";
import image from "../assets/8932a3d2e044c59f12b3aea3d0fa423f.jpg";
import ProductFrom from "./ProductFrom";

const Product = ({ setMainProduct, mainProduct }) => {
  const images = [image, image1, image2, image3, image, image3, image2, image1];

  return (
    <div className="px-12 pb-2  flex w-full flex-col ">
      <div className="sm:flex sm:flex-row flex flex-col  gap-3 h-full">
        <div className="h-full sm:w-1/2 w-full flex flex-col justify-center items-center ">
          <motion.div className="flex items-center justify-center rounded-lg h-[300px] w-full">
            <motion.img
              key={mainProduct.image}
              src={mainProduct.image}
              alt="Main"
              className="h-full w-full object-cover rounded-lg"
              initial={{ opacity: 0, x: 0, scale: 0.6 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{ opacity: 0, x: 0, scale: 0 }}
              transition={{
                duration: 0.5,

                ease: "easeIn",

                delay: 0.3,
              }}
            />
          </motion.div>
          <div className="grid grid-cols-4 w-full gap-2 mt-3">
            {images.map((img, index) => (
              <motion.div
                key={index}
                className="h-[80px] w-full rounded-lg cursor-pointer"
                onClick={() =>
                  setMainProduct({
                    image: img,
                    title: `Title ${index}`,
                    rating: "5.0",
                    price: 299,
                  })
                }
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                  },
                }}
              >
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="h-full sm:w-1/2 w-full">
          <ProductFrom
            setMainProduct={setMainProduct}
            mainProduct={mainProduct}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
