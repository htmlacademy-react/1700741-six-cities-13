import { Helmet } from "react-helmet-async";
<<<<<<< Updated upstream
import Logo from "../components/logo";
=======
import { FC } from 'react';
import { Offers } from "../types";
import FavoritePlaceCards from "../components/favorites/favorite-place-cards";
import { offers } from "../mocks/offers";
>>>>>>> Stashed changes

type FavoritePageProps = {
   favoriteOffers: Offers;
   }

const FavoritePage: FC<FavoritePageProps> = (favoriteOffers) => {
  return (
    <div className="page">
      <Helmet>
        <title>Избранное</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <FavoritePlaceCards favoriteOffers={offers}></FavoritePlaceCards>
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <FavoritePlaceCards favoriteOffers={offers}></FavoritePlaceCards>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Logo width={34} height={33} />
      </footer>
    </div>
  );
}

export default FavoritePage;
