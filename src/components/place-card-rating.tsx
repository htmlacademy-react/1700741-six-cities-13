import { FC } from 'react';

interface  PlaceCardRatingProps {
  rating: number;
};

const PlaceCardRating: FC<PlaceCardRatingProps> =({rating}) => {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        <span style={{width: `${rating*20}%`}}></span>
        <span className="visually-hidden">{rating}</span>
      </div>
    </div>
  )
};

export default PlaceCardRating;
