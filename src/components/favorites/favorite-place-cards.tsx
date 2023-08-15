import type { FC } from 'react';
import { Offers } from '../../types';
import FavoritePlaceCard from './favorite-place-card';

interface FavoritePlaceCardsProps {
  favoriteOffers: Offers;
};

const FavoritePlaceCards: FC<FavoritePlaceCardsProps> = ({favoriteOffers}) => {
  return (
    <div className="favorites__places">
      {favoriteOffers.map((value, index) => (<FavoritePlaceCard key={favoriteOffers[index].id} favoriteOffer={value}></FavoritePlaceCard>))}
    </div>
  )
};

export default FavoritePlaceCards;
