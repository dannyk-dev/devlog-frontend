import React from "react";

const TagItem = ({ children }) => {
  return (
    <a href="#" className=" text-slate-300 w-fit">
      {children}
    </a>
  );
};

export default TagItem;
