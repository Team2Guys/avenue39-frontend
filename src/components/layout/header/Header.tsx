import { Topbar } from "../../home-ui";
import Bottombar from "./Bottombar";

import Navbar from "./Navbar";
import Subbar from "./Subbar";
export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <Topbar />
      <Subbar />
      <Navbar />
      <Bottombar />
    </div>
  );
};
