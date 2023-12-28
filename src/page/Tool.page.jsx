import React from "react";

const ToolPage = ({ pageTitle, toolComp }) => {
  return (
    <div className="p-4">
      <h1 className="text-4xl text-center mt-12 uppercase">{pageTitle}</h1>
      <div className="mx-auto lg:w-8/12 md:w-10/12 sm:w-12/12">{toolComp}</div>
    </div>
  );
};

export default ToolPage;
