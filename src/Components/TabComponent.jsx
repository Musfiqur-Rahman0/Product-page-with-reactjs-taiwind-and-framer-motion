import { useState } from "react";
import { motion } from "framer-motion";
import { tabContent } from "../constent/constent";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("Details");
  const handleTabSelection = (index) => {
    setSelectedTab(index);
  };

  const tabs = ["Details", "Shipping", "Returns"];

  return (
    <motion.div className="w-full max-w-4xl mx-auto mt-8 pb-10 ">
      {/* Tabs */}
      {/* <div className="flex space-x-8 border-b-2 border-gray-300">
        {["Details", "Shipping", "Returns"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-lg ${
              selectedTab === tab ? "text-secondary font-bold" : "text-gray-500"
            }`}
            onClick={() => handleTabSelection(tab)}
          >
            {tab}
            {selectedTab === tab && (
              <motion.div
                className="h-1 bg-purple-500 rounded-md"
                layoutId="underline"
                style={{ width: "100%" }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {/* <motion.div
        key={selectedTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="mt-4 p-4"
      >
        {tabContent[selectedTab]} */}
      {/* {</motion.div> } */}
      <motion.div className="flex space-x-8 border-b-2 border-gray-300">
        {tabs.map((tab, index) => (
          <button
            className={`py-2 px-4 text-xl ${
              selectedTab === tab
                ? "text-secondary font-bold"
                : "text-textPrimary font-bold"
            }`}
            onClick={() => handleTabSelection(tab)}
            key={index}
          >
            {tab}
            {selectedTab === tab && (
              <motion.div
                layoutId="underline"
                className="h-1 rounded-md bg-blue-500 w-full mt-1"
              ></motion.div>
            )}
          </button>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        key={selectedTab}
        className="mt-4 p-4"
      >
        {tabContent[selectedTab]}
      </motion.div>
    </motion.div>
  );
};

export default TabComponent;
