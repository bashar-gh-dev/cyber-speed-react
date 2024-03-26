import { Navigate, RouteObject } from "react-router-dom";
import { MovieDetails } from "../features/movies/pages/MovieDetails";
import { MovieSearchResults } from "../features/movies/pages/MovieSearchResults";
import { MoviesList } from "../features/movies/pages/MoviesList";
import { Layout } from "../features/movies/components/Layout";
import { ErrorBoundary } from "./ErrorBoundary";

export const routes: RouteObject[] = [
  {
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <Layout />,
        path: "movies",
        children: [
          {
            element: <MovieDetails />,
            path: "details/:movieId",
          },
          {
            element: <MovieSearchResults />,
            path: "search",
          },
          {
            element: <MoviesList />,
            path: "",
          },
        ],
      },
      {
        element: <Navigate to="movies" />,
        path: "*",
      },
    ],
  },
];
