
import BottomBar from "./Bottombar";
import NavBar from "./Navbar";
import SubBar from "./Subbar";
import { TopBar } from "./Topbar";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <TopBar />
      <SubBar />
      <NavBar />
      <BottomBar />
    </div>
  );
};
