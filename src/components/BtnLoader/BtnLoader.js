import React from "react";

const BtnLoader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mr-2"></div>
      processing...
    </div>
  );
};

export default BtnLoader;
