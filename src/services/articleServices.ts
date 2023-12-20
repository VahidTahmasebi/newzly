import http from "./httpService";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;

export function getAllArticles(category: string | undefined): Promise<any> {
  return http
    .get(`?country=us&${category || "category=general"}&apiKey=${apiKey}`, {
      withCredentials: false,
      // headers: {
      //   Cookie: category,
      // },
    })
    .then(({ data }: { data: any }) => data);
}
