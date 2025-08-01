import React from 'react';
import ProjectInfo from './ProjectInfo';

const PortfolioProject = ({ img }) => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${img})` }}
    >
        <div className='w-full'>
        <ProjectInfo projectName="UI/UX Design" dateOfProject="2025"/>
        </div>
    </div>
  );
};

export default PortfolioProject;
