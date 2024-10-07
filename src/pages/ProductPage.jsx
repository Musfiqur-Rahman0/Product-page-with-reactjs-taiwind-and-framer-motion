import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import TabComponent from "../Components/TabComponent";
import RelatedProduct from "../Components/RelatedProduct";
import Review from "../Components/Review";
import Footer from "../Components/Footer";
import heroImg from "../assets/pexels-pavel-danilyuk-8001240.jpg";
import products from "../constent/constent";
const ProductPage = () => {
  const [mainProduct, setMainProduct] = useState({
    image: heroImg,
    title: "SoundSage Pro: Ultimate Clarity, Unmatched Comfort",
    rating: "5.0",
    price: 299,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [mainProduct]);

  return (
    <div className="overflow-hidden bg-background">
      <Product mainProduct={mainProduct} setMainProduct={setMainProduct} />
      <TabComponent />
      <RelatedProduct setMainProduct={setMainProduct} />
      <Review />
    </div>
  );
};

export default ProductPage;
