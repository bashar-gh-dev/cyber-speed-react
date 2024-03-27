import { Outlet } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Layout() {
  return (
    <div className="min-h-screen px-3">
      <div>
        <div className="container">
          <SearchBar />
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
