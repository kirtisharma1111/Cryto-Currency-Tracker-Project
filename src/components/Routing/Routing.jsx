import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home"; // Home page component
// import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Layout"; // Layout with Navbar + Outlet
import { lazy, Suspense } from "react";
// import {Facebook} from "react-content-loader";
import PageLoader from "../PageLoader/PageLoader"

const Home = lazy(()=>import('../../pages/Home'));
const CoinDetailsPage = lazy(()=> import('../../pages/CoinDetailsPage'));
function Routing() {
  return (
    <Routes>
      {/* Main layout wraps pages with Navbar */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={
            <Suspense fallback={<PageLoader/>}>
                <Home />
            </Suspense>
        } /> {/* Default home page */}
        <Route path="details/:coinId" element={
            <Suspense fallback={<PageLoader/>}>
                <CoinDetailsPage /> {/* Coin details page */}
            </Suspense>
        }/>
            
      </Route>
    </Routes>
  );
}

export default Routing;
