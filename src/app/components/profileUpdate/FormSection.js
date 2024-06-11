import React from "react";

const FormSection = ({ title, children }) => (
  <div className="my-6">
    <label className="text-[18px] leading-[20px] font-semibold text-[#232323]">{title}</label>
    <div className="flex space-x-6 my-4 w-full">{children}</div>
    
  </div>
);

export default FormSection;