type FindRandom = {
  id: string;
  title: string;
  imageUrl: string;
  actors: string;
}[];

type Search = { id: string; title: string; imageUrl: string }[];

type Details = {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  actors: string[];
  keywords: string[];
  reviews: { author: string; text: string; id: string }[];
};

// Any movies api provider should fulfill this interface
export interface IMoviesService {
  findRandom(): Promise<FindRandom>;
  findById(id: string): Promise<Details>;
  search(keyword: string): Promise<Search>;
}
