import Navbar from "./Navbar";

const Layout = ({ children, navbar = true }) => {
  return (
    <>
      {navbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
