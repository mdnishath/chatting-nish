import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto mt-10 mb-[100px] max-w-container sm:mb-0 sm:mt-[50px]">
      {children}
    </div>
  );
};

export default Container;
