import { Navigate, useParams } from "react-router-dom";
import { MovieDetails as MovieDetailsComponent } from "../components/MovieDetails";
import { useLazyGetMovieByIdQuery } from "../api/moviesApi";
import { useEffect } from "react";
import { LoadingSpinner } from "../../../components/LoadingSpinner";

export function MovieDetails() {
  const { movieId } = useParams();

  const [trigger, { isFetching, data: movie, isError, error }] =
    useLazyGetMovieByIdQuery();

  useEffect(() => {
    if (movieId) trigger(movieId);
  }, [movieId, trigger]);

  if (!movieId) return <Navigate to={"movies"} />;

  if (isFetching)
    return (
      <div className="block w-1/2 mx-auto">
        <LoadingSpinner />
      </div>
    );

  if (isError)
    return (
      <p className="text-red-900">
        Unable to load movie {(error as string) ? `: ${error}` : ""}
      </p>
    );

  if (!movie) return <p className="text-red-900">Movie not found</p>;

  return <MovieDetailsComponent {...movie} />;
}
