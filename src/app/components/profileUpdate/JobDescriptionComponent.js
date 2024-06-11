"use client";

import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { JobContext } from "@/app/components/profileUpdate/JobContext";
import TextEditor from "./TextEditor";
import Dropdown from "./DropDown";
import CustomSelect from "./CustomSelect";
import FormSection from "./FormSection";
import MaleIcon from "@/app/images/profileUpdate/MaleIcon.svg";
import FemaleIcon from "@/app/images/profileUpdate/FemaleIcon.svg";
import OptionButtonsWithIcon from "./OptionButtonsWithIcon";
import OtherBenefits from "./OtherBenefits";

const preferredGenderOption = [
  { label: "Teaching", icon: MaleIcon },
  { label: "Non-Teaching", icon: FemaleIcon },
  { label: "Any", icon: "" },
];

const JobDescriptionComponent = () => {
  const { jobDescription, setJobDescription } = useContext(JobContext);
  const router = useRouter();

  const [selectedGender, setSelectedGender] = useState(
    preferredGenderOption[0]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDescription((prevDescription) => ({
      ...prevDescription,
      [name]: value,
    }));
  };

  const handleDropdownChange = (name, value) => {
    setJobDescription((prevDescription) => ({
      ...prevDescription,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDescription((prevDescription) => ({
      ...prevDescription,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setJobDescription((prevDescription) => ({
      ...prevDescription,
      [name]: checked,
    }));
  };

  const handleCustomSelectChange = (name, value) => {
    setJobDescription((prevDescription) => ({
      ...prevDescription,
      [name]: value,
    }));
  };

  const handleGenderSelect = (option) => {
    setSelectedGender(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/profile-update/interview-process");
  };

  const qualificationOptions = [
    { label: "High School", value: "high_school" },
    { label: "Bachelor's Degree", value: "bachelor" },
    { label: "Master's Degree", value: "master" },
    { label: "Doctorate", value: "doctorate" },
  ];
  const courseOptions = [
    { label: "Computer Science", value: "computer_science" },
    { label: "Business Administration", value: "business_administration" },
    { label: "Mechanical Engineering", value: "mechanical_engineering" },
    { label: "Psychology", value: "psychology" },
  ];

  const englishLevelOptions = [
    { label: "Beginner", value: "beginner" },
    { label: "Intermediate", value: "intermediate" },
    { label: "Advanced", value: "advanced" },
    { label: "Fluent", value: "fluent" },
  ];

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <TextEditor />

      <div className="grid grid-cols-2 gap-8">
        <Dropdown
          label="Qualification"
          options={qualificationOptions}
          value={jobDescription.qualification || ""}
          onChange={(value) => handleDropdownChange("qualification", value)}
        />

        <Dropdown
          label="Course"
          options={courseOptions}
          value={jobDescription.course || ""}
          onChange={(value) => handleDropdownChange("course", value)}
        />
      </div>

      <div className="flex items-center w-2/4 my-6">
        <label htmlFor="fresher" className="text-[16px] font-bold mr-6">
          Are you hiring freshers only?
        </label>
        <input
          type="checkbox"
          id="fresher"
          name="fresher"
          className="rounded"
          checked={jobDescription.fresher || false}
          onChange={handleCheckboxChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-x-8 gap-y-7">
        <label
          htmlFor="minEx"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          Minimum Experience (in years)
          <input
            type="text"
            name="minEx"
            id="minEx"
            placeholder="Min"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
            value={jobDescription.minEx || ""}
            onChange={handleInputChange}
          />
        </label>

        <label
          htmlFor="maxEx"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          Maximum Experience (in years)
          <input
            type="text"
            name="maxEx"
            id="maxEx"
            placeholder="Max"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
            value={jobDescription.maxEx || ""}
            onChange={handleInputChange}
          />
        </label>

        <CustomSelect
          label={"English Level"}
          placeholder={"Select"}
          options={englishLevelOptions}
          value={jobDescription.englishLevel || []}
          onChange={(value) => handleCustomSelectChange("englishLevel", value)}
        />

        <label
          htmlFor="vacancies"
          className="flex flex-col gap-3 text-[18px] font-semibold"
        >
          Vacancies
          <input
            type="text"
            name="vacancies"
            id="vacancies"
            placeholder="Vacancies"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
            value={jobDescription.vacancies || ""}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <p className="text-[18px] font-bold">Additional Requirements</p>
      <p className="text-[18px] font-normal">
        Fill these details so that we can sort the best candidate for you
      </p>

      <FormSection title={"Preferred Gender"}>
        <OptionButtonsWithIcon
          options={preferredGenderOption}
          onSelect={handleGenderSelect}
        />
      </FormSection>

      <FormSection title="Age (in years)">
        <div className="flex items-center gap-4 w-full">
          <input
            type="text"
            name="min-age"
            id="min-age"
            placeholder="Min age"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
            value={jobDescription["min-age"] || ""}
            onChange={handleInputChange}
          />
          <p className="bg-[#0A65CC] text-[16px] text-white font-bold  rounded-[8px] px-[18px] py-[16px]">
            To
          </p>
          <input
            type="text"
            name="max-age"
            id="max-age"
            placeholder="Max age"
            className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
            value={jobDescription["max-age"] || ""}
            onChange={handleInputChange}
          />
        </div>
      </FormSection>

      <FormSection title="Language">
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Enter preferred languages"
          className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          value={jobDescription["language"] || ""}
          onChange={handleInputChange}
        />
      </FormSection>

      <p className="text-[18px] text-[#232323] font-normal opacity-75 my-4">
        Suggestions
      </p>
      <OtherBenefits />

      <FormSection title={"Preferred Assets"}>
        <input
          type="text"
          name="languages"
          id="languages"
          placeholder="Enter preferred Assets"
          className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
          value={jobDescription["assets"] || ""}
          onChange={handleInputChange}
        />
      </FormSection>

      <p className="text-[18px] text-[#232323] font-normal opacity-75 my-4">
        Suggestions
      </p>
      <OtherBenefits />

      <button
        type="button"
        // onClick={handleBack}
        className="bg-gray-500 text-white py-2 px-4 rounded"
      >
        Back
      </button>

      <button
        type="submit"
        className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px] mt-6"
      >
        Save & Next
      </button>
    </form>
  );
};

export default JobDescriptionComponent;
