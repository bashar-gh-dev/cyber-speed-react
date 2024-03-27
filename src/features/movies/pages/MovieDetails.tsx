import { Navigate, useParams } from "react-router-dom";
import { MovieDetails as MovieDetailsComponent } from "../components/MovieDetails";
import { useLazyGetMovieByIdQuery } from "../api/moviesApi";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { BackButton } from "../components/BackButton";

export function MovieDetails() {
  const { movieId } = useParams();

  const [trigger, { isFetching, data: movie, isError, error }] =
    useLazyGetMovieByIdQuery();

  useEffect(() => {
    if (movieId) trigger(movieId);
  }, [movieId, trigger]);

  if (!movieId) return <Navigate to={"movies"} />;

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
        ) : !movie ? (
          <p className="text-red-900">Movie not found</p>
        ) : (
          <div>
            <MovieDetailsComponent {...movie} />
          </div>
        )}
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}
