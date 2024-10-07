// import React from "react";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";

// const Breadcrumbs = () => {
//   const location = useLocation();
//   const crumbs = location.pathname.split("/").filter((crumb) => crumb);

//   return (
//     <nav className="text-sm pt-20 px-12 pb-2 bg-background">
//       <ul className="flex space-x-1">
//         <li>
//           <Link to="/" className="hover:underline">
//             Home
//           </Link>
//         </li>
//         {crumbs.map((crumb, index) => {
//           const path = `/${crumbs.slice(0, index + 1).join("/")}`;
//           return (
//             <li key={index} className="flex items-center">
//               <span className="">
//                 <MdOutlineKeyboardArrowRight size={18} />
//               </span>
//               <Link to={path} className="hover:underline capitalize">
//                 {crumb}
//               </Link>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;
// import React, { useLayoutEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = () => {
  const location = useLocation();
  const crumbs = location.pathname.split("/").filter((crumb) => crumb);

  return (
    <nav className="pt-20 bg-background px-12 pb-2">
      <ul className="flex space-x-1 items-center">
        <li className="">
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, index) => {
          const path = `/${crumbs.slice(0, index + 1).join("/")}`;
          return (
            <li key={index} className="flex items-center ">
              <span className="mt-[1px]">
                <MdOutlineKeyboardArrowRight size={18} />
              </span>
              <Link className="capitalize hover:underline" to={path}>
                {crumb}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
