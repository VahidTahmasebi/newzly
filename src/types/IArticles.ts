export interface IArticles {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string | null;
  urlToImage: string;
  publishedAt: Date;
  content: string | null;
}
