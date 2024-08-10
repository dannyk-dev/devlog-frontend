import CategoryBox from "../components/categories/CategoryBox";
import PostsList from "../components/posts/PostsList";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto w-11/12  justify-center flex flex-row align-baseline gap-4 ">
        <div className="w-full mt-8 flex justify-between">
          <PostsList />

          <div className="min-h-screen  border-l-[1.5px] border-l-slate-400/15 max-w-[460px]   px-12 ">
            <CategoryBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
