import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const MasterLayout: React.FC = () => {
  
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MasterLayout;
