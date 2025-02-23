import { ProgressCard } from "./ProgressCard";
import TeamMember from "./TeamMember";

import { PiSquaresFour } from "react-icons/pi";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { CiWarning } from "react-icons/ci";
import { MdPerson } from "react-icons/md";

export const Layout = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-100 w-11/12 px-4 md:px-10 lg:px-16 mx-auto min-h-screen gap-6 pt-8">
            {/* Left Section */}
            <div className="flex flex-col md:col-span-6 gap-6">
                {/* Progress Cards Wrapper */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
                    <ProgressCard img={<PiSquaresFour size={30} />} currentCount={5} status="Total Projects" />
                    <ProgressCard img={<LuCircleArrowOutUpRight size={30} />} currentCount={2} status="Completed" />
                    <ProgressCard img={<RxUpdate size={30} />} currentCount={3} status="Ongoing" />
                </div>

                {/* First Chart */}
                <div className="bg-white shadow-lg rounded-md overflow-hidden w-full h-60 md:h-2/3 min-h-[200px]">
                    <img
                        className="object-contain w-full h-full"
                        src="https://www.bleathem.ca/patternfly-org/pattern-library/data-visualization/area-chart/img/single-area-chart.png"
                        alt="Chart"
                    />
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col md:col-span-4 gap-6">
                {/* Second set of Progress Cards */}
                <div className="grid grid-cols-2 gap-6 w-full">
                    <ProgressCard img={<CiWarning size={30} />} currentCount={8} status="Delayed" isDelayed />
                    <ProgressCard img={<MdPerson size={30} />} currentCount={1} status="Employees" />
                </div>

                {/* Second Chart (Now Equal Height) */}
                <div className="bg-white shadow-lg rounded-md w-full h-60 md:h-2/3 min-h-[200px]">
                    <img
                        className="object-cover w-full h-full"
                        src="https://www.ag-grid.com/charts/images/scroller-6.webp"
                        alt="Chart"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="bg-white p-4 rounded-md shadow-md h-fit flex flex-col md:col-span-2">
                <h2 className="text-xl font-semibold mb-4">Team Mood</h2>
                <div className="overflow-y-auto flex flex-col gap-4">
                    <TeamMember />
                </div>
            </div>
        </div>
    );
};
