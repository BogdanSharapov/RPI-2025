import { JSX } from "react/jsx-runtime";
import MainPage from "../../pages/main-page/main-page";
import FavoritePage from "../../pages/favorite-page/favotites-page";
import LoginPage from "../../pages/login/login";
import OfferPage from "../../pages/offer/offfer";
import PageNotFound from "../../pages/page-not-found/page-not-found";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import { AuthorizationStatus } from "../../const";
import { PrivateRoute } from "../private-route/private-route";

type AppMainPageProps ={
    rentalOffersCount: number;
  }

function App({rentalOffersCount}: AppMainPageProps): JSX.Element {
    return (
        <BrowserRouter>
        <Routes>
            <Route
            path={AppRoute.Main}
            element={<PrivateRoute authorizationStatus={ AuthorizationStatus.NoAuth }><FavoritePage /></PrivateRoute>}/>


            <Route
            path = {AppRoute.Favorites}
            element={<FavoritePage/>}/>

            <Route
            path = {AppRoute.Login}
            element={<LoginPage/>}/>

            <Route
            path = {AppRoute.Offer}
            element={<OfferPage/>}/>

            <Route
            path = "*"
            element={<PageNotFound />}/>

        </Routes>
        </BrowserRouter>
    );
}


export default App;