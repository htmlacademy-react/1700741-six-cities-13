import MainPage from '../../pages/main';

type AppProps = {
  placesCount: number;
  cityName: string;
  favoriteCount: number
}

function App({placesCount, cityName, favoriteCount}: AppProps): JSX.Element {
  return (
    <MainPage
      placesCount={placesCount}
      cityName={cityName}
      favoriteCount={favoriteCount}
    />
  );
}

export default App;
