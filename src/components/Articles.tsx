"use client";

import React, { FC } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { IArticles } from "@/types/IArticles";

import { useGetArticles } from "@/hooks/useArticles";

import toLocalDateShort from "@/utils/toLocalDateShort";

const Articles: FC = () => {
  const searchParams = useSearchParams();

  const { isLoading, articles }: { isLoading: boolean; articles: IArticles[] } =
    useGetArticles(searchParams);

  return (
    <>
      {articles &&
        articles.map((article: IArticles, index: number) => {
          const hostname: string = new URL(article.url).hostname;

          return (
            <div
              key={index}
              className="flex flex-col justify-around col-span-1 gap-y-2 p-4 border rounded-xl text-xs shadow-md">
              {/* <Link href={article?.url}>
                <Image
                      src={
                        article.urlToImage
                          ? article.urlToImage
                          : "/public/vercel.svg"
                      }
                      alt={article.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                    />
              </Link> */}
              <div className="flex items-center gap-2">
                <Image
                  src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${hostname}&size=16`}
                  alt={article?.source?.name}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-fit h-fit"
                />
                <p>{article?.source?.name}</p>
              </div>

              <h2 className="text-base font-bold">{article?.title}</h2>

              <p className="text-sm line-clamp-3">{article?.description}</p>

              <div>
                <span className="font-bold">Published At: </span>
                <span>{toLocalDateShort(article?.publishedAt)}</span>
              </div>

              <Link href={article?.url} className="text-sm font-bold">
                Read more
              </Link>
            </div>
          );
        })}
    </>
  );
};

export default Articles;
