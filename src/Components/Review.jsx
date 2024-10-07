import { motion } from "framer-motion";
import { reviews } from "../constent/constent";
import { FaRegUser, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import CommentComponent from "./CommentComponent";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useState } from "react";

const Review = () => {
  const [inputValue, setInputValue] = useState("");
  const [comment, setComment] = useState(reviews);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputValue = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  console.log(isInputFocused);

  const handleComment = () => {
    if (inputValue.trim() !== "") {
      const newComment = {
        name: "User",
        published: new Date().toISOString(),
        comment: inputValue.trim(),
        rating: 5,
      };
      setComment([...comment, newComment]);
      setInputValue("");
    }
  };
  console.log(comment);
  const handleCancel = () => {
    setInputValue("");
  };

  return (
    <div id="review-section" className="max-w-4xl mx-auto p-6 relative">
      <h2 className="text-2xl font-bold sm:mb-4 mb-3 text-secondary">
        Customer Reviews
      </h2>
      <div className="flex mb-8 gap-5  items-center w-full relative">
        <div className="h-10 w-10 rounded-[50%]  border border-black flex items-center justify-center">
          <FaRegUser />
        </div>
        <div className="w-[70%]">
          <input
            value={inputValue}
            onChange={handleInputValue}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            type="text"
            placeholder="Add a comment"
            className="w-full outline-none border-b border-gray-400 bg-transparent py-2"
          />
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{
              opacity: isInputFocused ? 1 : 0,
              scaleX: isInputFocused ? 1 : 0,
            }}
            transition={{ duration: 0.3, type: "tween" }}
            className="h-[1px] w-full bg-blue-500 origin-center"
          ></motion.div>
          <div className="flex gap-2 sm:gap-4 justify-end mt-2">
            <button
              onClick={handleCancel}
              className="bg-gray-200 hover:bg-gray-300 p-2 px-4 text-sm rounded-full"
            >
              Cancel
            </button>
            <button
              onClick={handleComment}
              className={` p-2 px-4 rounded-full text-sm ${
                inputValue.trim() !== ""
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "hover:bg-gray-200"
              }`}
            >
              Comment
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="flex gap-5 "
      >
        {comment.map((review, index) => (
          <SwiperSlide
            key={index}
            className="mb-4 p-2 rounded-lg cursor-pointer pb-10"
          >
            <div className="flex items-center sm:gap-3 gap-2">
              <div className="h-8 w-8 rounded-[50%] border flex justify-center items-center border-black ">
                <FaRegUser />
              </div>
              <div>
                <h2 className="sm:text-xl text-base font-semibold mt-2 sm:mt-0">
                  {review.name}
                </h2>
                <CommentComponent publishedDate={review.published} />
              </div>
            </div>
            <div className="mt-2 flex flex-col ">
              <p className="text-sm text-textPrimary">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
