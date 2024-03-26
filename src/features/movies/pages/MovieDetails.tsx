import { useParams } from "react-router-dom";

export function MovieDetails() {
  const { movieId } = useParams();

  return <p>Movie Details for: {movieId}</p>;
}
