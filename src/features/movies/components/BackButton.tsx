import { useNavigate } from "react-router-dom";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="tracking-wider uppercase font-bold text-purple-700 hover:bg-purple-100 rounded p-2 inline-block"
      onClick={() => {
        navigate(-1);
      }}
    >
      Back
    </button>
  );
}
