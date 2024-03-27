import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { moviesService } from "../services/moviesService";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getRandomMovies: builder.query({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      queryFn: async (_args: void) => {
        try {
          const response = await moviesService.findRandom();
          return { data: response };
        } catch (error) {
          return { error: error };
        }
      },
    }),
    getMovieById: builder.query({
      queryFn: async (id: string) => {
        try {
          const response = await moviesService.findById(id);
          return { data: response };
        } catch (error) {
          return { error: error };
        }
      },
    }),
    searchMovies: builder.query({
      queryFn: async (keyword: string) => {
        try {
          const response = await moviesService.search(keyword);
          return { data: response };
        } catch (error) {
          return { error: error };
        }
      },
    }),
  }),
});

export const {
  useGetRandomMoviesQuery,
  useLazyGetRandomMoviesQuery,
  useGetMovieByIdQuery,
  useLazyGetMovieByIdQuery,
  useSearchMoviesQuery,
  useLazySearchMoviesQuery,
} = moviesApi;
