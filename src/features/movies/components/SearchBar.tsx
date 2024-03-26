import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="keyword"
        value={keyword}
        onChange={handleKeywordChange}
      />
    </form>
  );
}
