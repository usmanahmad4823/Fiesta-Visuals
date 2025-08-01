import React from "react";
import Button from "./Button";
import PageSubtitle from "./PageSubtitle";

const ProjectInfo = ({projectName, dateOfProject}) => {
  return (
    <div className="relative flex flex-col items-center justify-center px-[30px] ">
      {/* Top bar with subtitle info */}
      <div className="absolute top-1 left-0 right-0 flex items-center justify-between px-[30px]">
        <PageSubtitle title={projectName} />
        <PageSubtitle title={dateOfProject} />
      </div>

      {/* Centered Button */}
      <div className="flex items-center justify-center">
        <Button btn="View" />
      </div>
    </div>
  );
};

export default ProjectInfo;
