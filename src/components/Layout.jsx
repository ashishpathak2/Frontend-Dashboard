import React from "react";
import { ProgressCard } from "./ProgressCard";
import TeamMember from "./TeamMember";

export const Layout = () => {
  return (
    <div className="grid grid-cols-12 bg-slate-100 w-11/12 px-10 mx-auto min-h-screen gap-6 pt-8">
      {/* Left Section - Takes More Space */}
      <div className="col-span-10 space-y-6">
        {/* Wrapper to prevent overflow */}
        <div className="w-full overflow-hidden">
          <ProgressCard />
        </div>

        {/* Nested Grid (Properly Contained) */}
        <div className="grid grid-cols-12 gap-6 w-full">
          <div className="col-span-7 bg-white shadow-lg rounded-md overflow-hidden">
            <img
              className="object-contain h-full w-full"
              src="https://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/area-chart/img/single-area-chart.png"
              alt="Chart"
            />
          </div>
          <div className="col-span-5 bg-white shadow-lg rounded-md">
            <img
              className="object-cover h-full w-full"
              src="https://www.ag-grid.com/charts/images/scroller-6.webp"
              alt="Chart"
            />
          </div>
        </div>
      </div>

      {/* Right Section - Takes Less Space */}
      <div className="col-span-2 bg-white p-4 rounded-md shadow-md h-fit  flex flex-col">
        <h2 className="text-xl font-semibold mb-4">Team Mood</h2>
        {/* Team Members List - Scrollable if too many members */}
        <div className="overflow-y-auto flex flex-col gap-4">
          <TeamMember />
        </div>
      </div>
    </div>
  );
};
