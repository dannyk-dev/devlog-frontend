/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import PostUser from "./PostUser";
import { formatPostDate } from "../../utils/dates";

const PostCard = ({ post }) => {
  const postDate = formatPostDate(post?.created_at);

  return (
    <Link to={`/posts/${post.id}`} className="w-9/12">
      <article className="w-full  hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] w-full bg-slate-800 p-4 !pt-0 sm:p-6 h-60 flex flex-col justify-around">
          <div className="flex flex-col space-y-4">
            <PostUser user={post.user} />
            <div>
              <h3 className="mb-0.5 text-lg font-medium text-slate-100 text-clip">
                {post.title}
              </h3>
              <p className="text-slate-400">{post.description}</p>
            </div>
          </div>
          <div className="footer ">
            <span className="text-xs text-slate-400 font-semibold">
              {postDate}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
