
import type { FC } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
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
import LoginPage from '../../pages/login';
import { Comments, Offers, Users } from '../../types';

type AppProps = {
  numberOfOffersCards: number;
  offers: Offers;
  comments: Comments;
  users: Users;
}

const App: FC<AppProps> = ({offers}) => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Root} element={<Layout />}>
            <Route index element={<MainPage numberOfOffersCards={5}/>} />
            <Route path={AppRoutes.Main} element={<MainPage numberOfOffersCards={5}/>} />
            <Route path={AppRoutes.Favorites}
                element={
                  <PrivateRoute
                    authorizationStatus={AuthorizationStatus.Auth}>
                      <FavoritePage favoriteOffers={offers}/>
                  </PrivateRoute>
                }>
            </Route>
            <Route path={AppRoutes.FavoritesEmpty} element={<FavoriteEmptyPage />} />
            <Route path={AppRoutes.MainEmpty} element={<MainEmptyPage />} />
            <Route path={AppRoutes.Offer} element={<OfferPage id={1}/>} >
              <Route path=':id' element={<OfferPage id={1}/>} />
            </Route>
            <Route path={AppRoutes.OfferNotLogged} element={<OfferNotLogged />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
          <Route
            path={AppRoutes.Login}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}>
                  <LoginPage />
              </PrivateRoute>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
