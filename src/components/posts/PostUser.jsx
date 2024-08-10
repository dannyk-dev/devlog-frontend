import React from "react";

const PostUser = ({ user }) => {
  return (
    <div className=" pt-4 flex items-center">
      <h4 className="text-sm text-slate-300">{user.name}</h4>
      <div
        className="bg-slate-200 h-[4px] w-[4px] mx-2 "
        style={{
          borderRadius: "100%",
        }}
      ></div>

      <h4 className="text-sm text-slate-300">@{user.email}</h4>
    </div>
  );
};

export default PostUser;
