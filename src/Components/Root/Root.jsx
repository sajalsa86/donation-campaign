import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Bannar from "../Bannar/Bannar";

const Root = () => {
  const location = useLocation();
  // Function to determine if the current route is the home page
  const isHomePage = location.pathname === '/';
  // Background image style
  const backgroundImageStyle = {
    backgroundImage: `url('/src/assets/donation.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    opacity: 0.5
  };


  return (
    <div>
      <div style={isHomePage ? backgroundImageStyle : null}>
        <Header backgroundStyle={isHomePage ? backgroundImageStyle : null}></Header>
        {isHomePage && <Bannar backgroundStyle={backgroundImageStyle}></Bannar>}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;






