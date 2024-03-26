// import { useParams } from "react-router-dom";
import { MovieDetails as MovieDetailsComponent } from "../components/MovieDetails";
import { movieDetails } from "../../../mockAPI";

const data = {
  id: movieDetails.imdbId,
  title: movieDetails.top.titleText.text,
  imageUrl: movieDetails.fake["#IMG_POSTER"],
  description: movieDetails.short.description,
  actors: movieDetails.short.actor.map((actor) => actor.name),
  keywords: movieDetails.top.keywords.edges.map((keyword) => keyword.node.text),
  reviews: movieDetails.top.featuredReviews.edges.map((edge) => ({
    author: edge.node.author.nickName,
    text: edge.node.text.originalText.plainText,
    id: edge.node.author.nickName,
  })),
};

export function MovieDetails() {
  // const { id } = useParams();

  return <MovieDetailsComponent {...data} />;
}
