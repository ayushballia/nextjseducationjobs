"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TeachingIcon from "../../images/profileUpdate/teaching-PQcw9eHGUz.svg";
import NonTeachingIcon from "../../images/profileUpdate/Group 459 1.svg";
import DownIcon from "../../images/profileUpdate/fi_chevron-down.svg";
import RightIcon from "../../images/profileUpdate/fi_arrow-right.svg";
import RupeesIcon from "../../images/profileUpdate/currency_rupee_circle.svg";
import CustomSelect from "./CustomSelect";
import FormSection from "./FormSection";
import OptionButtons from "./OptionButtons";
import OtherBenefits from "./OtherBenefits";
import DatePicker from "react-datepicker";
import CalenderIcon from "../../images/profileUpdate/CalendarBlank.svg";
import "react-datepicker/dist/react-datepicker.css";
import OptionButtonsWithIcons from "./OptionButtonsWithIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  updateJobDetails,
  setSelectedRole,
  setSelectedJobType,
  setSelectedShiftTiming,
  setSelectedWorkMode,
  setSelectedSkills,
  setDeadline,
} from "../../libs/store/features/jobDetails/jobDetailsSlice";

const jobCategoryOptions = [
  { label: "Teaching", icon: TeachingIcon },
  { label: "Non-Teaching", icon: NonTeachingIcon },
];

const JobDetailsComponent = () => {
  const dispatch = useDispatch();
  const jobDetails = useSelector((state) => state.jobDetails);

  const roleOptions = ["Teaching", "Non-teaching"];
  const jobType = ["full-time", "part-time", "contract", "visiting"];
  const shiftTiming = ["Day shift", "night shift", "evening shift"];
  const workMode = ["on site", "remote", "hybrid"];

  // const [selectedSkills, setSelectedSkills] = useState([]);
  // const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  // const [selectedJobType, setSelectedJobType] = useState(jobType[0]);
  // const [selectedShiftTiming, setSelectedShiftTiming] = useState(
  //   shiftTiming[0]
  // );
  // const [selectedWorkMode, setSelectedWorkMode] = useState(workMode[0]);

  const [deadline, setDeadline] = useState(null);

  const handleRoleSelect = (option) => {
    dispatch(setSelectedRole(option));
  };

  const handleShiftSelect = (option) => {
    dispatch(setSelectedShiftTiming(option));
  };

  const handleWorkModeSelect = (option) => {
    dispatch(setSelectedWorkMode(option));
  };
  const handleJobTypeSelect = (option) => {
    dispatch(setSelectedJobType(option));
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Redux Form Data:", jobDetails);
    router.push("/job-description");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateJobDetails({ [name]: value }));
  };

  const skillsOptions = [
    { label: "JavaScript", value: "javascript" },
    { label: "React", value: "react" },
    { label: "Node.js", value: "nodejs" },
    { label: "CSS", value: "css" },
    { label: "HTML", value: "html" },
  ];

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <FormSection title={"Job Category"}>
        <OptionButtonsWithIcons
          options={jobCategoryOptions}
          onSelect={handleRoleSelect}
          value={jobDetails.selectedRole}
        />
      </FormSection>

      <CustomSelect
        label="Skills"
        placeholder="Add a skill"
        options={skillsOptions}
        selectedSkills={jobDetails.selectedSkills}
        value={jobDetails.selectedSkills}
        onChange={(skills) => dispatch(setSelectedSkills(skills))}
      />

      <FormSection title={"Subject"}>
        <input
          type="text"
          placeholder="Enter your Subject"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
          name="subject"
          value={jobDetails.subject}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection title="Job Type">
        <OptionButtons
          options={jobType}
          onSelect={handleJobTypeSelect}
          selectedOption={jobDetails.selectedJobType}
        />
      </FormSection>

      <FormSection title="Shift Timing">
        <OptionButtons
          options={shiftTiming}
          onSelect={handleShiftSelect}
          selectedOption={jobDetails.selectedShiftTiming}
        />
      </FormSection>

      <FormSection title="Work Mode">
        <OptionButtons
          options={workMode}
          onSelect={handleWorkModeSelect}
          selectedOption={jobDetails.selectedWorkMode}
        />
      </FormSection>

      <FormSection title={"Work Location"}>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="relative flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="City"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
              onChange={handleChange}
              name="city"
              value={jobDetails.city || ""}
            />
          </div>
          <div className="relative flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="State"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
              onChange={handleChange}
              name="state"
              value={jobDetails.state || ""}
            />
          </div>
        </div>
      </FormSection>

      <FormSection title={"Job title"}>
        <input
          type="text"
          placeholder="Enter job title"
          name="jobTitle"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
          value={jobDetails.jobTitle || ""}
          onChange={handleChange}
        />
      </FormSection>

      <div className="grid grid-cols-2 gap-4">
        <FormSection title={"Salary"}>
          <div className="relative w-full flex items-center">
            <Image
              src={DownIcon}
              width={20}
              height={20}
              alt="down icon"
              className="absolute right-4 top-4"
            />
            <input
              type="text"
              placeholder="Select"
              className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
              onChange={handleChange}
              name="salary"
              value={jobDetails.salary || ""}
            />
          </div>
        </FormSection>
        <div className="grid grid-cols-2 items-center gap-4">
          <label
            htmlFor="minEx"
            className="flex flex-col gap-3 text-[11px] text-[#18191C] font-semibold"
          >
            {" "}
            Minimum Experience (in years)
            <div className="relative w-full flex items-center">
              <Image
                src={RupeesIcon}
                width={20}
                height={20}
                alt="rupees icon"
                className="absolute left-4 top-[1.2rem]"
              />
              <input
                type="text"
                name="minEx"
                id="minEx"
                placeholder=""
                className="text-[14px] pl-10 text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
                onChange={handleChange}
                value={jobDetails.minEx || ""}
              />
            </div>
          </label>

          <label
            htmlFor="maxEx"
            className="flex flex-col gap-3 text-[11px] text-[#18191C] font-semibold"
          >
            {" "}
            Maximum Experience (in years)
            <div className="relative w-full flex items-center">
              <Image
                src={RupeesIcon}
                width={20}
                height={20}
                alt="rupees icon"
                className="absolute left-4 top-[1.2rem]"
              />
              <input
                type="text"
                name="maxEx"
                id="maxEx"
                placeholder=""
                className="text-[14px] pl-10 text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
                onChange={handleChange}
                value={jobDetails.maxEx || ""}
              />
            </div>
          </label>
        </div>
      </div>

      <p className="text-[18px] text-[#18191C] font-semibold my-4">
        Other Benefits
      </p>
      <OtherBenefits />

      <p className="flex gap-4 items-center text-[16px] font-bold my-6">
        Is there any joining fee required from the candidate?
        <input id="fee" class="rounded" type="checkbox" name="fee" />
      </p>

      <FormSection title={"Deadline"}>
        <div className="relative w-full">
          {/* <Image
            src={CalenderIcon}
            className="absolute right-5"
            width={22}
            height={22}
            alt="calender icon"
          /> */}
          <input
            type="date"
            selected={jobDetails.deadline}
            name="deadline"
            onChange={(date) => dispatch(setDeadline(date))}
            className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
            placeholderText="DD/MM/YYYY"
          />
          {/* <DatePicker
            selected={jobDetails.deadline}
            name="deadline"
            onChange={(date) => dispatch(setDeadline(date))}
            dateFormat="dd/MM/yyyy"
            className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
            placeholderText="DD/MM/YYYY"
          /> */}
        </div>
      </FormSection>

      <button
        type="submit"
        className="flex items-center gap-3 bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
      >
        Save & Next{" "}
        <Image src={RightIcon} width={24} height={24} alt="right icon" />
      </button>
    </form>
  );
};

export default JobDetailsComponent;
