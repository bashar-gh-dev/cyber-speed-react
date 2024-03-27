import { IMoviesService } from "./IMoviesService";
import { ImdbotMoviesService } from "./ImdbotMoviesService";

export const moviesService: IMoviesService = new ImdbotMoviesService();
