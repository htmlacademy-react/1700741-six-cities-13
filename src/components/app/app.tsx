import MainPage from '../../pages/main';

type AppMainPageProps = {
  placesCount: number;
  cityName: string;
}

function App({placesCount, cityName}: AppMainPageProps): JSX.Element {
  return (
    <MainPage placesCount={placesCount} cityName={cityName} />
  );
}

export default App;
