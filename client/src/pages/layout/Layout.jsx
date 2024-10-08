import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";

const Layout = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="layout">
          <Outlet />
          <Navbar />
        </main>
      )}
    </>
  );
};

export default Layout;
