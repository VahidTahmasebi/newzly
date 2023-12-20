import React, { FC } from "react";

import { ICategory } from "@/types/ICategory";

import Articles from "@/components/Articles";
import ArticlesFilter from "@/components/ArticlesFilter";

const categories: ICategory[] = [
  { id: 1, value: "business", label: "Business" },
  { id: 2, value: "entertainment", label: "Entertainment" },
  { id: 3, value: "general", label: "General" },
  { id: 4, value: "health", label: "Health" },
  { id: 5, value: "science", label: "Science" },
  { id: 6, value: "sports", label: "Sports" },
  { id: 7, value: "technology", label: "Technology" },
];

const Home: FC = () => {
  return (
    <main>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
        <div className="space-y-5">
          <p className="font-bold">Categories</p>
          <aside className="flex flex-col gap-y-4">
            <ArticlesFilter categories={categories} />
          </aside>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 sm:col-span-3 md:col-span-4 gap-4">
          <Articles />
        </main>
      </div>
    </main>
  );
};

export default Home;
