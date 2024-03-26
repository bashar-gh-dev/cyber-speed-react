import { Outlet } from "react-router-dom";
import { SearchBar } from "./SearchBar";

export function Layout() {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
