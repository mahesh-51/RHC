import { AUTH } from "../config/Constant";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MasterLayout: React.FC = () => {
  
  return (
    <div>
      {AUTH && <Header />}
      <Outlet />
      {AUTH && <Footer />}
    </div>
  );
};

export default MasterLayout;
