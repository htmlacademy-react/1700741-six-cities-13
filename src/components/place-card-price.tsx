import { FC } from 'react';

interface  PlaceCardPriceProps {
  summ: number;
};

const PlaceCardPrice: FC<PlaceCardPriceProps> =({summ}) => {
  return (
    <div className="place-card__price">
      <b className="place-card__price-value">{summ}</b>
      <span className="place-card__price-text">&#47;&nbsp;night</span>
    </div>
  )
};

export default PlaceCardPrice;
