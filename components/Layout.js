import Footer from "./Footer";
import Navbar from "./Navbar";

//props.children comes from Component, since Layout wraps Component in _app.js
const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {/* props.children is Component. Which consists of every component in the project */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
