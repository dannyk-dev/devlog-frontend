/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const PostTagList = ({ tags }) => {
  if (!tags) return null;

  return (
    <div className="flex space-x-4 pt-2">
      {tags.map((tag) => (
        <Link
          to={"#"}
          key={tag.id}
          className="text-xs text-slate-200 font-bold"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
};

export default PostTagList;
