"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";
import EditIcon from "../../images/profileUpdate/edit.svg"

const PreviewComponent = () => {
  const router = useRouter();
  const jobDetails = useSelector((state) => state.jobDetails);
  const jobDescription = useSelector((state) => state.jobDescription);
  const interviewProcess = useSelector((state) => state.interviewProcess);

  console.log(jobDetails);

  const handleEdit = (path) => {
    router.push(path);
  };

  return (
    <div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-6">Preview of Your Job Posting</h2> */}

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[24px] text-[#0A65CC] font-bold">Job Details</h3>
          <button
            onClick={() => handleEdit("/")}
            className="flex items-center gap-2.5 bg-[#0A65CC] text-[16px] font-bold text-white px-[17px] py-[10px] rounded-[10px]"
          >
            Edit <Image src={EditIcon} width={10} height={10} alt="edit icon"/>
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Category:</strong> {jobDetails.selectedRole}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Skills:</strong>{" "}
            {jobDetails.selectedSkills && jobDetails.selectedSkills.join(", ")}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Subject:</strong> {jobDetails.subject}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Job Type:</strong> {jobDetails.selectedJobType}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Shift Timing:</strong> {jobDetails.selectedShiftTiming}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Work Mode:</strong> {jobDetails.selectedWorkMode}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Location:</strong> {jobDetails.city} {jobDetails.state}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Job Title:</strong> {jobDetails.jobTitle}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Salary:</strong> {jobDetails.salary}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Minimum Experience:</strong> {jobDetails.minEx}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Maximum Experience:</strong> {jobDetails.maxEx}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Deadline:</strong>{" "}
            {jobDetails.deadline
              ? jobDetails.deadline.toLocaleDateString()
              : "Not set"}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[24px] text-[#0A65CC] font-bold">Job Description</h3>
          <button
            onClick={() => handleEdit("/job-description")}
            className="flex items-center gap-2.5 bg-[#0A65CC] text-[16px] font-bold text-white px-[17px] py-[10px] rounded-[10px]"
          >
            Edit <Image src={EditIcon} width={10} height={10} alt="edit icon"/>
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Job Description:</strong> {jobDescription.jobDescription}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Qualification:</strong> {jobDescription.qualification}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Course:</strong> {jobDescription.course}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Fresher Hiring:</strong>{" "}
            {jobDescription.fresher ? "Yes" : "No"}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Minimum Experience:</strong> {jobDescription.minEx} 
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Maximum Experience:</strong> {jobDescription.maxEx}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">English Level:</strong> {jobDescription.englishLevel}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Vacancies:</strong> {jobDescription.vacancies}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Preferred Gender:</strong> {jobDescription.preferredGender}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Age Range:</strong> {jobDescription.minAge} -{" "}
            {jobDescription.maxAge} years
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Preferred Languages:</strong> {jobDescription.languages}
          </p>
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Preferred Assets:</strong> {jobDescription.assets}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[24px] text-[#0A65CC] font-bold">Interview Process</h3>
          <button
            onClick={() => handleEdit("/interview-process")}
            className="flex items-center gap-2.5 bg-[#0A65CC] text-[16px] font-bold text-white px-[17px] py-[10px] rounded-[10px]"
          >
            Edit <Image src={EditIcon} width={10} height={10} alt="edit icon"/>
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p className="flex items-center text-[22px] text-[#232323] font-normal mb-2.5">
            <strong className="w-4/12 text-[#18191CB2]">Interview Method:</strong>{" "}
            {interviewProcess.interviewMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewComponent;
