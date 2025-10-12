import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Layout";
import CoinDetailsPage from "../../pages/CoinDetailsPage";
import MainLayout from "../../pages/Home";



function Routing(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<Home/>}/>
            <Route path="/details/:coinId" element={<CoinDetailsPage/>}/>
            </Route>
        </Routes>
    );
}
export default Routing;