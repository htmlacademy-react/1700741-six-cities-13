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
  // ВПР Почему подчеркивает isActive
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="cities__card place-card"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <PlaceCardMark isPremium={offer.isPremium} className={"place-card__mark"}></PlaceCardMark>
      <PlaceCardImg href={offer.previewImage} width={260} height={200} className={"cities__image-wrapper"}></PlaceCardImg>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <PlaceCardPrice summ={offer.price}></PlaceCardPrice>
          <BookmarksButton label={'To bookmarks'}></BookmarksButton>
        </div>
        <PlaceCardRating rating={offer.rating}></PlaceCardRating>
        <PlaceCardName label={offer.title} href={offer.id}></PlaceCardName>
        <PlaceCardType label={offer.type}></PlaceCardType>
      </div>
    </article>
  )
};

export default PlaceCard;
