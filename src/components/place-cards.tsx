import { FC } from 'react';

import { Offers } from '../types';
import PlaceCard from './place-card';

import {MouseEvent} from 'react';

type PlaceCardsProp = {
  offers: Offers;
  onListItemHover: (listItemName: string) => void;
  onListItemUnHover:(listItemName: string) => void;
}


const PlaceCards: FC<PlaceCardsProp> = ({offers, onListItemHover, onListItemUnHover}) => {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((value, index) => <PlaceCard
        key={offers[index].id}
        offer={value}
        ></PlaceCard> )}
    </div>
  )
};

export default PlaceCards;
