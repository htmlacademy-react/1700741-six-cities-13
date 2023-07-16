import { FC } from 'react';

interface  PlaceCardTypeProps {
  label: string;
};

const PlaceCardType: FC<PlaceCardTypeProps> =({label}) => {
  return (
    <p className="place-card__type">{label}</p>
  )
};

export default PlaceCardType;
