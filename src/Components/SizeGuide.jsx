import React from "react";
import { IoMdClose } from "react-icons/io";

const SizeGuide = ({ handleSizeGuideToggle }) => {
  return (
    <div className="relative h-full w-full ">
      <div className="absolute z-10 sm:w-[450px] w-[300px]  h-[250px] bg-slate-700 rounded-lg text-white backdrop:blur-lg sm:-right-1/2 right-0  p-4">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Size Guide</h2>
          <IoMdClose size={20} />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-transparent">
            <thead>
              <tr className="w-full bg-transparent border-b ">
                <th className="py-1 px-2 w-full text-sm text-center">Size</th>
                <th className="py-1 px-2 text-sm text-center">US (Women)</th>
                <th className="py-1 px-2 text-sm text-center">UK (Women)</th>
                <th className="py-1 px-2 text-sm text-center">EU (Women)</th>
                <th className="py-1 px-2 text-sm text-center  hidden sm:block">
                  US (Men)
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  size: "S",
                  usWomen: "4-6",
                  ukWomen: "8-10",
                  euWomen: "36-38",
                  jpWomen: "11",
                  usMen: "36-38",
                },
                {
                  size: "M",
                  usWomen: "8-10",
                  ukWomen: "12-14",
                  euWomen: "40-42",
                  jpWomen: "15",
                  usMen: "38-40",
                },
                {
                  size: "L",
                  usWomen: "12-14",
                  ukWomen: "16-18",
                  euWomen: "44-46",
                  jpWomen: "17",
                  usMen: "40-42",
                },
                {
                  size: "XL",
                  usWomen: "16-18",
                  ukWomen: "20-22",
                  euWomen: "48-50",
                  jpWomen: "19",
                  usMen: "42-44",
                },
                {
                  size: "XXL",
                  usWomen: "20-22",
                  ukWomen: "24-26",
                  euWomen: "52-54",
                  jpWomen: "21",
                  usMen: "44-46",
                },
              ].map((row, index) => (
                <tr key={index} className="border-b bg-transparent">
                  <td className="px-4 text-center w-full text-sm">
                    {row.size}
                  </td>
                  <td className="text-sm text-center w-3 sm:w-10">
                    {row.usWomen}
                  </td>
                  <td className=" text-sm text-center w-3 sm:w-10">
                    {row.ukWomen}
                  </td>
                  <td className="text-sm text-center w-3 sm:w-10">
                    {row.euWomen}
                  </td>
                  <td className="text-sm text-center w-3 sm:w-10 hidden sm:block">
                    {row.usMen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SizeGuide;
