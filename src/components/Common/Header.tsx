import { Topbar } from "../home-ui";
import Bottombar from "./Bottombar";
import Navbar from "./Navbar";
import Subbar from "./Subbar";
export const Header = () => {
  return (

    <div>
      <Topbar />
      <Subbar/>
      <Navbar />
      <Bottombar/>
    </div>
  );
};
