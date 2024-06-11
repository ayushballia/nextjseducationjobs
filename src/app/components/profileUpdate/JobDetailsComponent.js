"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TeachingIcon from "@/app/images/profileUpdate/teaching-PQcw9eHGUz.svg";
import NonTeachingIcon from "@/app/images/profileUpdate/Group 459 1.svg";
import DownIcon from "@/app/images/profileUpdate/fi_chevron-down.svg";
import RupeesIcon from "@/app/images/profileUpdate/currency_rupee_circle.svg";
import CustomSelect from "@/app/components/profileUpdate/CustomSelect";
import FormSection from "@/app/components/profileUpdate/FormSection";
import OptionButtons from "@/app/components/profileUpdate/OptionButtons";
import OtherBenefits from "@/app/components/profileUpdate/OtherBenefits";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OptionButtonsWithIcons from "@/app/components/profileUpdate/OptionButtonsWithIcon";
import { useContext } from "react";
import { JobContext } from "@/app/components/profileUpdate/JobContext";

const jobCategoryOptions = [
  { label: "Teaching", icon: TeachingIcon },
  { label: "Non-Teaching", icon: NonTeachingIcon },
];

const JobDetailsComponent = () => {
  const { jobDetails, setJobDetails } = useContext(JobContext);

  const roleOptions = ["Teaching", "Non-teaching"];

  const jobType = ["full-time", "part-time", "contract", "visiting"];
  const shiftTiming = ["Day shift", "night shift", "evening shift"];
  const workMode = ["on site", "remote", "hybrid"];

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  const [selectedJobType, setSelectedJobType] = useState(jobType[0]);
  const [selectedShiftTiming, setSelectedShiftTiming] = useState(
    shiftTiming[0]
  );
  const [selectedWorkMode, setSelectedWorkMode] = useState(workMode[0]);

  const handleRoleSelect = (option) => {
    setSelectedRole(option);
  };

  const handleShiftSelect = (option) => {
    setSelectedShiftTiming(option);
  };

  const handleWorkModeSelect = (option) => {
    setSelectedWorkMode(option);
  };
  const handleJobTypeSelect = (option) => {
    setSelectedJobType(option);
  };

  const router = useRouter();
  const [formData, setFormData] = useState({
    jobDescription: "",
    minimumQualification: "",
    course: "",
    isFresher: false,
    minExperience: "",
    maxExperience: "",
    englishLevel: "",
    vacancies: "",
  });

  const [deadline, setDeadline] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the selected options to the form data before routing
    const updatedFormData = {
      ...formData,
      role: selectedRole,
      shift: selectedShiftTiming,
      workMode: selectedWorkMode,
      selectedItems: selectedItems,
    };
    console.log("Form Data:", updatedFormData);
    router.push("/profile-update/job-description");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <FormSection title={"Job Category"}>
        <OptionButtonsWithIcons
          options={jobCategoryOptions }
          onSelect={handleRoleSelect}
          value={jobDetails.category || ""}
        />
      </FormSection>

      <CustomSelect
        label="Skills"
        placeholder="Add a skill"
        options={["JavaScript", "React", "Node.js", "CSS", "HTML"]}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <FormSection title={"Subject"}>
        <input
          type="text"
          placeholder="Enter your Subject"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
        />
      </FormSection>

      <FormSection title="Job Type">
        <OptionButtons
          options={jobType}
          onSelect={handleJobTypeSelect}
          selectedOption={selectedJobType}
          setSelectedOption={setSelectedJobType}
        />
      </FormSection>

      <FormSection title="Shift Timing">
        <OptionButtons
          options={shiftTiming}
          onSelect={handleShiftSelect}
          selectedOption={selectedShiftTiming}
          setSelectedOption={setSelectedShiftTiming}
        />
      </FormSection>

      <FormSection title="Work Mode">
        <OptionButtons
          options={workMode}
          onSelect={handleWorkModeSelect}
          selectedOption={selectedWorkMode}
          setSelectedOption={setSelectedWorkMode}
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
          placeholder=""
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
                className="absolute left-4 top-4"
              />
              <input
                type="text"
                name="minEx"
                id="minEx"
                placeholder=""
                className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
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
                className="absolute left-4 top-4"
              />
              <input
                type="text"
                name="maxEx"
                id="maxEx"
                placeholder=""
                className="text-[14px] text-[#9199A3] font-normal w-full border rounded-[15px] p-[17px]"
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

      <p className="text-[16px] font-bold my-6">
        Is there any joining fee required from the candidate?
      </p>

      <FormSection title={"Deadline"}>
        <DatePicker
          selected={deadline}
          onChange={(date) => setDeadline(date)}
          dateFormat="dd/MM/yyyy"
          className="p-[16px] text-[14px] font-normal w-full rounded-[15px] border"
          placeholderText="DD/MM/YYYY"
        />
      </FormSection>

      <input
        type="text"
        name="subject"
        value={jobDetails.subject || ""}
        onChange={handleChange}
      />

<button
        type="submit"
        className="bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
      >
        Save & Next
      </button>
    </form>
  );
};

export default JobDetailsComponent;
