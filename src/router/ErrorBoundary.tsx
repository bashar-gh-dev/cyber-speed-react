import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div>
      An internal error occured{" "}
      <button
        onClick={() => {
          console.log(error);
        }}
      >
        log error
      </button>{" "}
    </div>
  );
}
