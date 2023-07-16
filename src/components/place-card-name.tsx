import { FC } from 'react';

interface  PlaceCardNameProps {
  label: string;
};

const PlaceCardName: FC<PlaceCardNameProps> =({label}) => {
  return (
    <h2 className="place-card__name">
      <a href="#">{label}</a>
    </h2>
  )
};

export default PlaceCardName;
