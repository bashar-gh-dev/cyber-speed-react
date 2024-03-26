import { moviesList } from "../../../mockAPI";
import { MovieCard } from "../components/MovieCard";

export function MoviesList() {
  return (
    <div className="w-full flex flex-wrap items-start justify-stretch">
      {moviesList.map((movie) => (
        <div key={movie["#IMDB_ID"]} className="px-2 py-3 w-[33.3%] xl:w-[25%]">
          <MovieCard
            id={movie["#IMDB_ID"]}
            actors={movie["#ACTORS"]}
            imageUrl={movie["#IMG_POSTER"]}
            title={movie["#TITLE"]}
          />
        </div>
      ))}
    </div>
  );
}
