/* eslint-disable react/prop-types */
import React from "react";
import PostCard from "./PostCard";
import { usePosts } from "../../hooks/services/posts";

const PostsList = () => {
  const { data: posts, error } = usePosts();

  return (
    <div className="flex flex-col flex-1 items-center">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
