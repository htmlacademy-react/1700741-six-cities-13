import HeaderLogo from '../components/header-logo';
import User from '../components/user';
import Sign from '../components/sign';
import { Cities, Setting } from '../const';
import ItemLocations from '../components/item-locations-list';
import TitleMainPage from '../components/title-main-page';
import FormSortingPlaces from '../components/form-sorting-places';
import PlaceCards from '../components/place-cards';
import CityPlacesMap from '../components/city-places-map';


function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <HeaderLogo width={81} height={41}></HeaderLogo>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <User userName='Oliver.conner@gmail.com' favoriteCount={3}></User>
                <Sign label="Sign out" href="#"></Sign>
              </ul>
            </nav>
          </div>
        </div>
      </header>
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
