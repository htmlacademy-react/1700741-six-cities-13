import { Cities, Setting } from '../const';
import ItemLocations from '../components/item-locations-list';
import TitleMainPage from '../components/title-main-page';
import FormSortingPlaces from '../components/form-sorting-places';
import PlaceCards from '../components/place-cards';
import CityPlacesMap from '../components/city-places-map';
import { Helmet } from 'react-helmet-async';

function MainPage(): JSX.Element {
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
                {Object.values(Cities).map((city) => (<ItemLocations label={city} href="#"></ItemLocations>))}
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <TitleMainPage placesCount={Setting.placesCount} cityName={Setting.cityName}></TitleMainPage>
              <FormSortingPlaces label="Popular"></FormSortingPlaces>

              <div className="cities__places-list places__list tabs__content">
              <PlaceCards></PlaceCards>
              </div>
            </section>
            <CityPlacesMap></CityPlacesMap>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
