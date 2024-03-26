import { Navigate, useSearchParams } from "react-router-dom";

export function MovieSearchResults() {
  const [urlSearchParams] = useSearchParams();
  const keyword = urlSearchParams.get("keyword");

  if (!keyword) return <Navigate to={"movies"} />;

  return <p>Movie Search Results for: {keyword}</p>;
}
