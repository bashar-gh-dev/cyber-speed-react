import { PropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { NO_IMAGE_PLACE_HOLDER_URL } from "../../../consts";

export function SearchResult(
  props: PropsWithoutRef<{
    id: string;
    title: string;
    imageUrl: string;
  }>
) {
  return (
    <div className="rounded bg-white w-full flex flex-nowrap">
      <div
        className="w-[7rem] h-[10rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            props.imageUrl ?? NO_IMAGE_PLACE_HOLDER_URL
          })`,
        }}
      ></div>
      <div className="flex-grow flex flex-col justify-center px-10 border-y-[1px] border-r-[1px] rounded">
        <div className="p-2 font-bold text-xl tracking-wide truncate">
          {props.title}
        </div>
        <div>
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
