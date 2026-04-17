
import UserLayout from './layouts/UserLayout'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './pages/Produit/Products';
import Assistance from './pages/assistance/Assistance';
import AdminProduits from './pagesAdmin/AdminProduits';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout/>}>
            <Route path="/" element={ <Home />} />
            <Route path="/acceuil" element={ <Home />} />
            <Route path="/home/produits" element={<Products />} />
            <Route path="/home/assistance" element={<Assistance />} />
            <Route path="/admin-okandjo-2026" element={<AdminProduits />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App

