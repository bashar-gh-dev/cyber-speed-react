import { Navigate, useSearchParams } from "react-router-dom";
import { moviesList } from "../../../mockAPI";
import { SearchResult } from "../components/SearchResult";

export function MovieSearchResults() {
  const [urlSearchParams] = useSearchParams();
  const keyword = urlSearchParams.get("keyword");

  if (!keyword) return <Navigate to={"movies"} />;

  return (
    <>
      <div className="mb-3 px-2 text-xl">Search results:</div>
      <div>
        {moviesList.map((movie) => (
          <div key={movie["#IMDB_ID"]} className="px-2 py-3">
            <SearchResult
              id={movie["#IMDB_ID"]}
              imageUrl={movie["#IMG_POSTER"]}
              title={movie["#TITLE"]}
            />
          </div>
        ))}
      </div>
    </>
  );
}
