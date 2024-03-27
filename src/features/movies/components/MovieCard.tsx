import { PropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { NO_IMAGE_PLACE_HOLDER_URL } from "../../../consts";

export function MovieCard(
  props: PropsWithoutRef<{
    id: string;
    title: string;
    actors: string;
    imageUrl: string;
  }>
) {
  return (
    <div className="rounded bg-white">
      <div
        className="w-full h-[25rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            props.imageUrl ?? NO_IMAGE_PLACE_HOLDER_URL
          })`,
        }}
      ></div>
      <div className="border-x-[1px] border-b-[1px] rounded-b">
        <div className="px-6 py-4 border-gray-100">
          <div className="font-bold text-xl tracking-wide truncate">
            {props.title}
          </div>
          <p className="text-gray-700 text-base truncate">{props.actors}</p>
        </div>
        <div className="mx-4 mt-2 mb-4">
          <Link
            className="tracking-wider uppercase font-bold text-purple-700 hover:bg-purple-100 rounded p-2 inline-block"
            to={`/movies/details/${props.id}`}
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
}
