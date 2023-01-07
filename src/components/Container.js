import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mb-[150px] mt-10 sm:mb-0 sm:mt-[50px] md:pl-[100px] lg:max-w-container  lg:pb-[50px]">
      {children}
    </div>
  );
};

export default Container;
