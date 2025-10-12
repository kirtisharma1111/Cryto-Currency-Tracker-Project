import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home"; // Home page component
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout"; // Layout with Navbar + Outlet

function Routing() {
  return (
    <Routes>
      {/* Main layout wraps pages with Navbar */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} /> {/* Default home page */}
        <Route path="details/:coinId" element={<CoinDetailsPage />} /> {/* Coin details page */}
      </Route>
    </Routes>
  );
}

export default Routing;
