import CategoryBox from "../components/categories/CategoryBox";
import PostsList from "../components/posts/PostsList";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto w-10/12  justify-center flex flex-row align-baseline gap-4">
        <div className="w-full mx-auto mt-8 flex justify-center space-x-12">
          <PostsList />

          <div className="h-max max-w-[460px] sticky top-0 right-0  px-12 border-l-[1px] border-l-slate-600/65">
            <CategoryBox />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
