/* eslint-disable react/prop-types */
import React from "react";
import PostCard from "./PostCard";
import { usePosts } from "../../hooks/services/posts";
import ActionBar from "../action-bar/ActionBar";

const PostsList = () => {
  const { data: posts, error } = usePosts();

  return (
    <div className="flex flex-col w-full  items-center gap-y-4 ">
      <ActionBar />
      <div className="flex flex-col items-center w-full  gap-y-6 pr-0">
        {posts?.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostsList;
