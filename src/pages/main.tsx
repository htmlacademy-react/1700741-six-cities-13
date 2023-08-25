import { FC } from "react";
import { Cities, Setting } from '../const';
import ItemLocations from '../components/item-locations-list';
import TitleMainPage from '../components/title-main-page';
import FormSortingPlaces from '../components/form-sorting-places';
import PlaceCards from '../components/place-cards';
import { Helmet } from 'react-helmet-async';
import { CITY } from "../mocks/city";
import { Offers, Offer } from "../types";
import Map from '../components/map';
import { useState } from 'react';


type MainPageProps = {
  offers: Offers;
}

const MainPage: FC<MainPageProps> = ({offers}) => {

  const [selectedPoint, setSelectedPoint] = useState<Offer | undefined>(
    undefined
  );

  const handleListItemHover = (listItemName: string) => {
    const currentPoint = offers.find((point) => point.id === listItemName);
    setSelectedPoint(currentPoint);
  };

  const handleListItemUnHover = (listItemName: string) => {
    const currentPoint = offers.find((point) => point.id === listItemName);
    if(currentPoint){
      setSelectedPoint(undefined);
    }
  };

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
                {Object.values(Cities).map((city, index) => (<ItemLocations key={index} label={city} href="#"></ItemLocations>))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <TitleMainPage placesCount={Setting.placesCount} cityName={Setting.cityName}></TitleMainPage>
              <FormSortingPlaces label="Popular"></FormSortingPlaces>
              <PlaceCards
                offers={offers}
                onListItemHover={handleListItemHover}
                onListItemUnHover={handleListItemUnHover}
                ></PlaceCards>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={CITY} points={offers} selectedPoint={selectedPoint}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
