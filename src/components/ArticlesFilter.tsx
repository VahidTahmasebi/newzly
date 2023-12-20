"use client";

import React, { FC, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ICategory } from "@/types/ICategory";

import Button from "@/ui/Button";

interface ArticlesFilterProps {
  categories: ICategory[];
}

const ArticlesFilter: FC<ArticlesFilterProps> = ({ categories }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [sort, setSort] = useState<string>("general");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const sortHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const value = e.currentTarget.value;
    setSort(value);
    router.push(pathname + "?" + createQueryString("category", value));
  };

  useEffect(() => {
    setSort(searchParams.get("category") || "general");
  }, [searchParams]);

  return (
    <>
      {categories.map(({ id, value, label }) => {
        const isActive = value === sort;

        return (
          <Button
            key={id}
            value={value}
            disabled={isActive}
            onClick={(e) => sortHandler(e)}
            type="button"
            className={`${
              isActive && "bg-zinc-300 hover:bg-zinc-400"
            } w-32 h-8 px-5 text-zinc-900 bg-zinc-100 hover:bg-zinc-200`}>
            {label}
          </Button>
        );
      })}
    </>
  );
};

export default ArticlesFilter;
