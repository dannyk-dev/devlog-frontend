import React from "react";
import useSWR from "swr";
import { axiosInstance, fetcher } from "../../api";
import TagItem from "./TagItem";

const ActionBar = () => {
  // const tags = axiosInstance.get("/tags").then((res) => res.data);
  const { data: tags } = useSWR("/tags", fetcher);

  console.log(tags);

  return (
    <nav className="sticky top-0 py-3 px-1 border-b-[1px]  bg-slate-900 border-b-slate-300/25 w-9/12 overflow-x-visible">
      <div className="flex gap-x-8 items-center ">
        <TagItem>For you</TagItem>
        {tags?.map((tag) => (
          <TagItem key={tag.id}>{tag.name}</TagItem>
        ))}
      </div>
    </nav>
  );
};

export default ActionBar;
