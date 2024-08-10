import React from "react";
import useSWR from "swr";
import { fetcher } from "../../api";
import { Button } from "flowbite-react";

const CategoryBox = () => {
  const { data: categories } = useSWR("/categories", fetcher);

  return (
    <>
      <div className="py-4 ">
        <h1 className="text-lg text-slate-200 font-bold">Search by Category</h1>
        <p className="text-slate-400">
          Explore articles by the most trending categories!
        </p>
      </div>
      <div className="flex flex-wrap justify-start items-start gap-x-2 gap-y-4">
        {categories?.map((category) => (
          <Button
            key={category.id}
            pill
            className="bg-slate-700 hover:bg-slate-600"
          >
            {category.name}
          </Button>
        ))}
      </div>
    </>
  );
};

export default CategoryBox;
