import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";

import { IArticles } from "@/types/IArticles";

import { getAllArticles } from "@/services/articleServices";

export const useGetArticles = (
  searchParams: any
): { isLoading: boolean; articles: IArticles[] } => {
  Cookies.set("category", searchParams);
  const updatedCookieValue = Cookies.get("category");

  const { isLoading, data } = useQuery({
    queryKey: ["get-news", updatedCookieValue],
    queryFn: () => getAllArticles(updatedCookieValue),
    retry: false,
    refetchOnWindowFocus: true,
  });

  const { articles } = data || {};
  return { isLoading, articles };
};
