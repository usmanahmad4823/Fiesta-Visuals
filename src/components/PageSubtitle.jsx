import React from "react";

function PageSubtitle(props) {
  return (
    <div className="  flex items-center justify-center mb-4  ">
      <div className="bg-[#fff] border-[0.1px] border-gray-400 py-0.5 px-3 rounded-4xl text-[10px] " >{props.title}</div>
    </div>
  );
}

export default PageSubtitle;
