import type { FC } from 'react';

interface TitleMainPageProps {
  placesCount: number;
  cityName: string;
};


const TitleMainPage: FC<TitleMainPageProps> = ({placesCount, cityName}) => {
  return (
    <b className="places__found">{placesCount} places to stay in {cityName}</b>
  )
};

export default TitleMainPage;
