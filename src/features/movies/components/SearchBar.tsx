import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { SearchIcon } from "./SearchIcon";

export function SearchBar() {
  const [urlSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
      if (!keyword) return;
      navigate(`/movies/search?keyword=${keyword}`);
    },
    [keyword, navigate]
  );

  const handleKeywordChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value ?? "");
  };

  useEffect(() => {
    const keyword = urlSearchParams.get("keyword") ?? "";
    setKeyword(keyword);
  }, [urlSearchParams]);

  return (
    <div className="w-full flex justify-center py-1 mb-4">
      <div className="relative w-full">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full backdrop-blur-sm bg-white/20 py-2 pl-10 pr-4 rounded-lg focus:outline-none border-2 border-gray-100 focus:border-violet-300 transition-colors duration-300"
            placeholder="Search..."
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
          />

          <button
            type="submit"
            className="absolute inset-y-0 left-0 pl-3 flex items-center"
          >
            <SearchIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
