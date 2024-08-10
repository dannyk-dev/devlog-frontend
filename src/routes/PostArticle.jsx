import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../api";
import Layout from "./Layout";
import PostHeading from "../components/posts/post-item/PostHeading";
import PostOwner from "../components/posts/post-item/PostOwner";
import { formatPostDate } from "../utils/dates";
import PostTagList from "../components/posts/post-item/PostTagList";

const PostArticle = () => {
  const { id } = useParams();
  const { data: post } = useSWR(`/posts/${id}`, fetcher);

  if (!post) return null;

  const publishedAtDate = formatPostDate(post.created_at);

  return (
    <Layout>
      <div className="w-4/12 mx-auto min-h-screen flex flex-col mt-20 space-y-8">
        <PostOwner>
          <h1 className="text-sm text-slate-200 flex items-center">
            {post.user.name}
            <div
              className="bg-slate-200 h-[4px] w-[4px] mx-2 "
              style={{
                borderRadius: "100%",
              }}
            ></div>
            {post.user.email}
          </h1>
          <p className="text-xs text-slate-400">
            Published <span>{publishedAtDate}</span>
          </p>
          <PostTagList tags={post.tags} />
        </PostOwner>
        <PostHeading>
          <h1 className="text-4xl text-slate-200 font-bold">{post?.title}</h1>
          <h4 className="text-lg text-slate-300 font-normal">
            {post?.description}
          </h4>
        </PostHeading>
      </div>
    </Layout>
  );
};

export default PostArticle;
