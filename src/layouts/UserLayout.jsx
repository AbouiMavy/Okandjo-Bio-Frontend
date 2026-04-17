import { Outlet } from "react-router-dom";
import NavbarUser from "../components/NavbarUser";
import Footer from "../components/footer";

export default function UserLayout() {
  return (
    <>
      <NavbarUser />
      
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}