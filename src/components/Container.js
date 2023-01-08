import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mb-[100px] py-10  sm:mb-0 sm:pb-0 md:pl-[100px] lg:max-w-container ">
      {children}
    </div>
  );
};

export default Container;
