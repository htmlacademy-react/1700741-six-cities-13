import { FC } from 'react';

interface  PlaceCardRatingProps {
  rating: string;
};

const PlaceCardRating: FC<PlaceCardRatingProps> =({rating}) => {
  return (
    <div className="place-card__rating rating">
      <div className="place-card__stars rating__stars">
        {/* КАК СЮДА ВСТАВИТЬ ПРОПС? */}
        <span style={{width: '80%'}}></span>
        <span className="visually-hidden">{rating}</span>
      </div>
    </div>
  )
};

export default PlaceCardRating;
