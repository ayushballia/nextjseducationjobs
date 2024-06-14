import React from "react";
import Image from "next/image";
import CloseIcon from "../../images/profileUpdate/close_small.svg";

const OtherBenefit = ({ text }) => (
  <p className="flex justify-evenly items-center gap-2 text-[16px] text-[#232323] font-bold px-[16px] py-[13px] border border-[#00000033] rounded-[10px]">
    {text}
    <span>
      <Image src={CloseIcon} width={9} height={9} alt="close icon" />
    </span>
  </p>
);

const OtherBenefits = () => {
  const benefits = [
    "Communication",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5",
    "Benefit 6",
    "Benefit 7",
    "Benefit 8",
    "Benefit 9",
    "Benefit 10",
    "Benefit 11",
    "Benefit 12",
  ];

  return (
    <div className="grid grid-cols-4 gap-6">
      {benefits.map((benefit, index) => (
        <OtherBenefit key={index} text={benefit} />
      ))}
    </div>
  );
};

export default OtherBenefits;