import { FC } from "react";
import { Cities, Setting } from '../const';
import ItemLocations from '../components/item-locations-list';
import TitleMainPage from '../components/title-main-page';
import FormSortingPlaces from '../components/form-sorting-places';
import PlaceCards from '../components/place-cards';
import CityPlacesMap from '../components/city-places-map';
import { Helmet } from 'react-helmet-async';
import { offers } from '../mocks/offers';

type MainPageProps = {
  numberOfOffersCards: number;
}

const MainPage: FC<MainPageProps> = ({numberOfOffersCards}) => {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
<<<<<<< Updated upstream
                {Object.values(Cities).map((city, index) => (<ItemLocations key={index} label={city} href="#"></ItemLocations>))}
=======
                {Object.values(Cities).map((city) => (<ItemLocations key={city} label={city} href="#"></ItemLocations>))}
>>>>>>> Stashed changes
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <TitleMainPage placesCount={Setting.placesCount} cityName={Setting.cityName}></TitleMainPage>
              <FormSortingPlaces label="Popular"></FormSortingPlaces>
              <PlaceCards offers={offers}></PlaceCards>
            </section>
            <CityPlacesMap></CityPlacesMap>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
