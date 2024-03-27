import { useGetRandomMoviesQuery } from "../api/moviesApi";
import { LoadingSpinner } from "../../../components/LoadingSpinner";
import { MovieCard } from "../components/MovieCard";

export function MoviesList() {
  const {
    isFetching,
    isError,
    data: movies,
    error,
  } = useGetRandomMoviesQuery();

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
    <div className="w-full flex flex-wrap items-start justify-stretch">
      {movies.map((movie) => (
        <div key={movie.id} className="px-2 py-3 w-[33.3%] xl:w-[25%]">
          <MovieCard
            id={movie.id}
            actors={movie.actors}
            imageUrl={movie.imageUrl}
            title={movie.title}
          />
        </div>
      ))}
    </div>
  );
}
