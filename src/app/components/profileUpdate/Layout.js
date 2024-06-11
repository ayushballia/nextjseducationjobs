"use client";

import Image from "next/image";
import Link from "next/link";
import LawyerIcon from "@/app/images/profileUpdate/Lawyer.png";
import { usePathname } from "next/navigation";
import userIcon from "@/app/images/profileUpdate/UserBlue.svg";
import userCircleIcon from "@/app/images/profileUpdate/UserCircle.svg";
import adsClickIcon from "@/app/images/profileUpdate/ads_click.svg";
import AtIcon from "@/app/images/profileUpdate/At.svg";

const Layout = ({ children }) => {
  const path = usePathname(); // Use usePathname hook to get the current path

  const steps = [
    { name: "Job Details", path: "/profile-update/job-details", icon: userIcon },
    {
      name: "Job Description",
      path: "/profile-update/job-description",
      icon: userCircleIcon,
    },
    {
      name: "Interview Process",
      path: "/profile-update/interview-process",
      icon: adsClickIcon,
    },
    { name: "Preview", path: "/profile-update/preview", icon: AtIcon },
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
                <div className="flex items-center justify-center bg-[#0043CE] p-1 rounded-full">
                  <Image
                    src={LawyerIcon}
                    width={16}
                    height={16}
                    alt="detail icon"
                  />
                </div>
                {step.name}
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
                <Image src={step.icon} width={24} height={24} alt={step.name} />{" "}
                {step.name}
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