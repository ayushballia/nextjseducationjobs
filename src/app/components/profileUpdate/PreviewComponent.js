"use client";

import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { JobContext } from "@/app/components/profileUpdate/JobContext";

const PreviewComponent = () => {
  const { jobDetails, jobDescription, interviewProcess } =
    useContext(JobContext);
  const router = useRouter();

  const handleEdit = (path) => {
    router.push(path);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Preview of Your Job Posting</h2>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2">Job Details</h3>
          <button
            onClick={() => handleEdit("/profile-update/job-details")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Edit
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p>
            <strong>Category:</strong> {jobDetails.category}
          </p>
          <p>
            <strong>Skills:</strong>{" "}
            {jobDetails.skills && jobDetails.skills.join(", ")}
          </p>
          <p>
            <strong>Subject:</strong> {jobDetails.subject}
          </p>
          <p>
            <strong>Job Type:</strong> {jobDetails.jobType}
          </p>
          <p>
            <strong>Shift Timing:</strong> {jobDetails.shift}
          </p>
          <p>
            <strong>Work Mode:</strong> {jobDetails.workMode}
          </p>
          <p>
            <strong>Location:</strong> {jobDetails.city}, {jobDetails.state}
          </p>
          <p>
            <strong>Job Title:</strong> {jobDetails.jobTitle}
          </p>
          <p>
            <strong>Salary:</strong> {jobDetails.salary}
          </p>
          <p>
            <strong>Minimum Experience:</strong> {jobDetails.minEx} years
          </p>
          <p>
            <strong>Maximum Experience:</strong> {jobDetails.maxEx} years
          </p>
          <p>
            <strong>Deadline:</strong>{" "}
            {jobDetails.deadline
              ? jobDetails.deadline.toLocaleDateString()
              : "Not set"}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2">Job Description</h3>
          <button
            onClick={() => handleEdit("/profile-update/job-description")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Edit
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p>
            <strong>Job Description:</strong> {jobDescription.jobDescription}
          </p>
          <p>
            <strong>Qualification:</strong> {jobDescription.qualification}
          </p>
          <p>
            <strong>Course:</strong> {jobDescription.course}
          </p>
          <p>
            <strong>Fresher Hiring:</strong>{" "}
            {jobDescription.fresher ? "Yes" : "No"}
          </p>
          <p>
            <strong>Minimum Experience:</strong> {jobDescription.minEx} years
          </p>
          <p>
            <strong>Maximum Experience:</strong> {jobDescription.maxEx} years
          </p>
          <p>
            <strong>English Level:</strong> {jobDescription.englishLevel}
          </p>
          <p>
            <strong>Vacancies:</strong> {jobDescription.vacancies}
          </p>
          <p>
            <strong>Preferred Gender:</strong> {jobDescription.preferredGender}
          </p>
          <p>
            <strong>Age Range:</strong> {jobDescription.minAge} -{" "}
            {jobDescription.maxAge} years
          </p>
          <p>
            <strong>Preferred Languages:</strong> {jobDescription.languages}
          </p>
          <p>
            <strong>Preferred Assets:</strong> {jobDescription.assets}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold mb-2">Interview Process</h3>
          <button
            onClick={() => handleEdit("/profile-update/interview-process")}
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          >
            Edit
          </button>
        </div>
        <div className="border p-4 rounded-lg">
          <p>
            <strong>Interview Method:</strong>{" "}
            {interviewProcess.interviewMethod}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreviewComponent;
