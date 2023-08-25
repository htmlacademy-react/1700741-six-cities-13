import { FC } from 'react';
import { useState } from 'react';
import PlaceCardMark from './place-card-mark';
import PlaceCardImg from './place-card-img';
import PlaceCardPrice from './place-card-price';
import BookmarksButton from './bookmarks-button';
import PlaceCardRating from './place-card-rating';
import PlaceCardName from './place-card-name';
import PlaceCardType from './place-card-type';
import { Offer } from '../types';

type PlaceCardProp = {
  offer: Offer;
}

const PlaceCard: FC<PlaceCardProp> = ({offer}) => {
  const [isActive, setIsActive] = useState(false);
  const handleListItemHover = (event:MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemHover(event.currentTarget.id);
  };

  const handleListItemUnHover = (event:MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    onListItemUnHover(event.currentTarget.id);
  };

  return (
    <article className="cities__card place-card"
      onMouseEnter={handleListItemHover}
      onMouseLeave={handleListItemUnHover}
    >
      <PlaceCardMark isPremium={offer.isPremium} className={"place-card__mark"}></PlaceCardMark>
      <PlaceCardImg href={offer.previewImage} width={260} height={200} className={"cities__image-wrapper"}></PlaceCardImg>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <PlaceCardPrice summ={offer.price}></PlaceCardPrice>
          <BookmarksButton label={'To bookmarks'}></BookmarksButton>
        </div>
        <PlaceCardRating rating={offer.rating}></PlaceCardRating>
        <PlaceCardName label={offer.title} id={offer.id}></PlaceCardName>
        <PlaceCardType label={offer.type}></PlaceCardType>
      </div>
    </article>
  )
};

export default PlaceCard;
