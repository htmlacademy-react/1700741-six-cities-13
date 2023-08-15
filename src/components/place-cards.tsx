import { FC } from 'react';

import { Offers } from '../types';
import PlaceCard from './place-card';

type PlaceCardsProp = {
  offers: Offers;
}


const PlaceCards: FC<PlaceCardsProp> = ({offers}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((value, index) => (<PlaceCard key={offers[index].id} offer={value}></PlaceCard>))}
    </div>
  )
};

export default PlaceCards;
