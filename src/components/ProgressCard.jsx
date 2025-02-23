// import React from "react";
// import { PiSquaresFour } from "react-icons/pi";
// import { LuCircleArrowOutUpRight } from "react-icons/lu";
// import { RxUpdate } from "react-icons/rx";
// import { CiWarning } from "react-icons/ci";
// import { MdPerson } from "react-icons/md";

// export const ProgressCard = () => {
//   const data = [
//     { img: <PiSquaresFour size={30} />, currentCount: 5, status: "Total Projects" },
//     { img: <LuCircleArrowOutUpRight size={30} />, currentCount: 2, status: "Completed" },
//     { img: <RxUpdate size={30} />, currentCount: 3, status: "Ongoing" },
//     { img: <CiWarning size={30} />, currentCount: 8, status: "Delayed" },
//     { img: <MdPerson size={30} />, currentCount: 1, status: "Employees" },
//   ];

//   return (
//     <div className="grid grid-cols-5 gap-6"> 
//       {data.map((progress, index) => (
//         <div
//           key={index}
//           className={`${
//             progress.status === "Delayed" ? "bg-red-300/90" : "bg-white"
//           } relative shadow-lg rounded-md p-4 flex flex-col items-center`}
//         >
//           <div className="absolute top-2 left-2 text-gray-700">{progress.img}</div>
//           <div className="text-center mt-10">
//             <span className="text-4xl font-bold text-gray-800">{progress.currentCount}</span>
//             <p className="text-sm text-gray-600 mt-1">{progress.status}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

import React from "react";

export const ProgressCard = ({ img, currentCount, status, isDelayed }) => {
  return (
    <div
      className={`${
        isDelayed ? "bg-red-300/90" : "bg-white"
      } relative shadow-lg rounded-md p-4 flex flex-col items-center`}
    >
      <div className="absolute top-2 left-2 text-gray-700">{img}</div>
      <div className="text-center mt-10">
        <span className="text-4xl font-bold text-gray-800">{currentCount}</span>
        <p className="text-sm text-gray-600 mt-1">{status}</p>
      </div>
    </div>
  );
};

