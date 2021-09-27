import React from "react";

const MethodItem = ({ icon, method, value }) => {
  return (
    <div className="text-primary grid grid-flow-col gap-5">
      <div className="text-primary-content text-opacity-80 bg-primary mask mask-squircle w-16 h-16 flex items-center justify-center mb-5">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-2">{method}</h3>
        <p className="text-base-content text-opacity-80">{value}</p>
      </div>
    </div>
  );
};

export default MethodItem;
