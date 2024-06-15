"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Top navigation icons
import userTopIcon from "../../images/profileUpdate/UserBlue.svg";
import userCircleTopIcon from "../../images/profileUpdate/UserCircle.svg";
import adsClickTopIcon from "../../images/profileUpdate/ads_click.svg";
import AtTopIcon from "../../images/profileUpdate/At.svg";

// Sidebar icons
import LawyerIcon from "../../images/profileUpdate/Lawyer.svg";
import ProfileIcon from "../../images/profileUpdate/Profiles.svg";
// import userCircleSidebarIcon from "../../images/profileUpdate/UserCircleSidebar.svg";
// import adsClickSidebarIcon from "../../images/profileUpdate/ads_clickSidebar.svg";
// import AtSidebarIcon from "../../images/profileUpdate/AtSidebar.svg";

const Layout = ({ children }) => {
  const path = usePathname(); // Use usePathname hook to get the current path

  const steps = [
    {
      name: "Job Details",
      path: "/",
      topIcon: userTopIcon,
      sidebarIcon: LawyerIcon,
    },
    {
      name: "Job Description",
      path: "/job-description",
      topIcon: userCircleTopIcon,
      sidebarIcon: ProfileIcon,
    },
    {
      name: "Interview Process",
      path: "/interview-process",
      topIcon: adsClickTopIcon,
      sidebarIcon: ProfileIcon,
    },
    {
      name: "Preview",
      path: "/preview",
      topIcon: AtTopIcon,
      sidebarIcon: ProfileIcon,
    },
  ];

  const getStepIndex = (path) => steps.findIndex((step) => step.path === path);

  const currentStepIndex = getStepIndex(path);

  return (
    <div className="flex gap-6 justify-evenly">
      {/* Sidebar */}
      <nav className="w-1/4 p-[30px] bg-white border rounded-[20px] h-max max-w-[285px]">
        <p className="text-[20px] font-bold text-[#232323] mb-5">
          Job Posting Steps
        </p>
        <ul className="flex flex-col gap-6">
          {steps.map((step, index) => (
            <li key={step.path}>
              <Link
                href={index <= currentStepIndex ? step.path : path}
                className={`flex gap-4 ${
                  index <= currentStepIndex ? "font-bold" : ""
                }`}
              >
                <div className="flex items-center justify-center p-1 rounded-[50%] bg-[#0043CE]">
                  <Image
                    src={step.sidebarIcon}
                    width={100}
                    height={100}
                    className="w-full"
                    alt="detail icon"
                  />
                </div>
                <span className="text-[18px]">{step.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="w-3/4 px-[29px] py-[35px] bg-white rounded-[20px] max-w-[843px]">
        {/* Top Navigation */}
        <div className="flex justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.path} className="flex-1 text-center">
              <Link
                href={index <= currentStepIndex ? step.path : path}
                className={`flex items-center justify-center gap-2 p-2  ${
                  index <= currentStepIndex
                    ? "border-b-2 font-bold border-[#0A65CC] text-[#0A65CC]"
                    : "text-[#ADB2BA]"
                }`}
              >
                <Image
                  src={step.topIcon}
                  width={24}
                  height={24}
                  className="w-auto"
                  alt={step.name}
                />{" "}
                <span className="text-[16px]">{step.name}</span>
              </Link>
            </div>
          ))}
        </div>

        {children}
      </main>
    </div>
  );
};

export default Layout;
