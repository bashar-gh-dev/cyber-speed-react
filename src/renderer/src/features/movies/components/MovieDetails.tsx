import { PropsWithoutRef } from "react";
import { NO_IMAGE_PLACE_HOLDER_URL } from "../../../consts";


export function MovieDetails(
  props: PropsWithoutRef<{
    id: string;
    title: string;
    imageUrl: string;
    description: string;
    actors: string[];
    keywords: string[];
    reviews: { author: string; text: string; id: string }[];
  }>
) {
  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row flex-nowrap w-full mb-5">
        <div
          className="flex-shrink-0 min-h-[30rem] min-w-[20rem] lg:max-w-[33.3%] flex-grow justify-stretch bg-contain bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              props.imageUrl ?? NO_IMAGE_PLACE_HOLDER_URL
            })`,
          }}
        ></div>
        <div className="lg:px-4 flex flex-col justify-center items-stretch">
          <p className="mb-2 font-bold text-xl tracking-wide truncate">
            {props.title}
          </p>
          <p className="text-lg mb-5 text-gray-700">{props.description}</p>
          <div className="mb-5 ">
            <p className="font-bold">Actors:</p>
            <p className="text-gray-700">{props.actors.join(", ")}</p>
          </div>
          <div>
            <p className="font-bold">Keywords:</p>
            <p className="text-gray-700">{props.keywords.join(", ")}</p>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-3 font-bold text-xl tracking-wide truncate">
          User reviews
        </div>
        {props.reviews.map((review) => (
          <div key={review.id} className="py-2 px-3 border-[1px] rounded mb-3">
            <p className="tex-bold">{review.author}</p>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
