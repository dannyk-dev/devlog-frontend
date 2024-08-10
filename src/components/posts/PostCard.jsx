/* eslint-disable react/prop-types */

import PostUser from "./PostUser";

const PostCard = ({ post }) => {
  console.log(post);

  return (
    <article className="w-[600px]  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      <div className="rounded-[10px] w-full bg-slate-800 p-4 !pt-0 sm:p-6 h-52 flex flex-col">
        <PostUser user={post.user} />

        <a href="#">
          <h3 className="my-0.5 text-lg font-medium text-slate-100 text-clip">
            {post.title}
          </h3>
          <p className="text-slate-400">{post.description}</p>
        </a>
        <div className="footer mt-auto">
          <time dateTime="2022-10-10" className="block text-xs text-gray-200">
            {" "}
            {post.created_at}
          </time>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
