import { Navigate, useSearchParams } from "react-router-dom";
import { SearchResult } from "../components/SearchResult";
import { useLazySearchMoviesQuery } from "../api/moviesApi";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

export function MovieSearchResults() {
  const [urlSearchParams] = useSearchParams();
  const [trigger, { isFetching, data: movies, isError, error }] =
    useLazySearchMoviesQuery();

  const keyword = urlSearchParams.get("keyword");

  useEffect(() => {
    if (keyword) trigger(keyword);
  }, [keyword, trigger]);

  if (!keyword) return <Navigate to={"movies"} />;

  if (isFetching)
    return (
      <div className="block w-1/2 mx-auto">
        <LoadingSpinner />
      </div>
    );

  if (isError)
    return (
      <p className="text-red-900">
        Unable to load movies {(error as string) ? `: ${error}` : ""}
      </p>
    );

  if (!movies) return <p className="text-red-900">Invalid response</p>;

  if (!movies.length) return <p className="text-red-900">No movies found</p>;

  return (
    <div>
      <div className="mb-3 px-2 text-xl">Search results:</div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id} className="px-2 py-3">
            <SearchResult
              id={movie.id}
              imageUrl={movie.imageUrl}
              title={movie.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
