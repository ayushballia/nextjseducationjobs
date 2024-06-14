"use client";

import { useRouter } from "next/navigation";
import RightIcon from "../../images/profileUpdate/fi_arrow-right.svg";
import { useDispatch, useSelector } from "react-redux";
import { setInterviewMethod } from "../../libs/store/features/interviewProcess/interviewProcessSlice";
import Image from "next/image";

const InterviewProcessComponent = () => {
  const interviewMethod = useSelector(
    (state) => state.interviewProcess.interviewMethod
  );
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSelectChange = (e) => {
    const { value } = e.target;
    dispatch(setInterviewMethod(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form data", interviewMethod);
    router.push("/preview");
  };

  const handleBack = () => router.back();

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <label
        htmlFor="interview-process"
        className="font-semibold text-[20px] text-[#232323]"
      >
        Choose Interview Process <br />
        <span className="font-normal text-[20px] text-[#232323] -mt-2">
          Select candidate interviewing method
        </span>
        <br />
        <div className="relative my-4">
          <select
            name="interviewMethod"
            value={interviewMethod || ""}
            onChange={handleSelectChange}
            className="block appearance-none w-full bg-white border border-[#E4E5E8] hover:border-gray-600 p-[17px] pr-[18px] text-[14px] text-[#767F8C] font-normal rounded-[15px] leading-tight focus:outline-none focus:shadow-outline"
          >
            <option
              className="text-[14px] font-normal text-[#767F8C]"
              value=""
              disabled
            >
              Select...
            </option>
            <option value="Online">Online</option>
            <option value="In-Person">In-Person</option>
            <option value="Telephone">Telephone</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      </label>

      <div className="flex gap-4 my-7">
        <button
          type="button"
          onClick={handleBack}
          className="text-[16px] text-[#0A65CC] font-bold px-[32px] py-[16px] rounded-[20px] border border-[#0A65CC]"
        >
          Back
        </button>

        <button
          type="submit"
          className="flex items-center gap-3 bg-[#0A65CC] text-white text-[16px] font-bold px-[32px] py-[16px] rounded-[20px]"
        >
          Save & Next{" "}
          <Image src={RightIcon} width={24} height={24} alt="right icon" />
        </button>
      </div>
    </form>
  );
};

export default InterviewProcessComponent;
