import { Navigate, useSearchParams } from "react-router-dom";
import { SearchResult } from "../components/SearchResult";
import { useLazySearchMoviesQuery } from "../api/moviesApi";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { BackButton } from "../components/BackButton";

export function MovieSearchResults() {
  const [urlSearchParams] = useSearchParams();
  const [trigger, { isFetching, data: movies, isError, error }] =
    useLazySearchMoviesQuery();

  const keyword = urlSearchParams.get("keyword");

  useEffect(() => {
    if (keyword) trigger(keyword);
  }, [keyword, trigger]);

  if (!keyword) return <Navigate to={"movies"} />;

  return (
    <div>
      <div>
        {isFetching ? (
          <div className="block w-1/2 mx-auto">
            <LoadingSpinner />
          </div>
        ) : isError ? (
          <p className="text-red-900">
            Unable to load movie {(error as string) ? `: ${error}` : ""}
          </p>
        ) : !movies ? (
          <p className="text-red-900">Invalid response</p>
        ) : !movies.length ? (
          <p className="text-red-900">No movies found</p>
        ) : (
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
        )}
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}
