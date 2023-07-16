import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import FavoritePage from '../../pages/favorites';
import OfferPage from '../../pages/offer';
import MainPage from '../../pages/main';
import FavoriteEmptyPage from '../../pages/favorites-empty';
import MainEmptyPage from '../../pages/main-empty';
import OfferNotLogged from '../../pages/offer-not-logged';
import PrivateRoute from '../private-router';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '../layout';
import NotFoundScreen from '../../pages/404';


// import type { FC } from 'react';

// type AppProps = {
//   favoriteCount: number;
// }

// const App: FC = () => {
//   return (
//     <MainPage
//     //   placesCount = {Setting.placesCount}
//     //   cityName = {Setting.cityName}
//     //   favoriteCount = {Setting.favoriteCount}
//     />
//   )
// }

//

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path={AppRoute.Favorites}
                element={
                  <PrivateRoute
                    authorizationStatus={AuthorizationStatus.Auth}>
                      <FavoritePage />
                  </PrivateRoute>
                }>
            </Route>
            <Route path={AppRoute.FavoritesEmpty} element={<FavoriteEmptyPage />} />
            <Route path={AppRoute.MainEmpty} element={<MainEmptyPage />} />
            <Route path={AppRoute.Offer} element={<OfferPage />} >
              <Route path=':id' element={<OfferPage />} />
            </Route>
            <Route path={AppRoute.OfferNotLogged} element={<OfferNotLogged />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
          <Route
            path={AppRoute.Login}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}>
                  <MainPage />
              </PrivateRoute>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
