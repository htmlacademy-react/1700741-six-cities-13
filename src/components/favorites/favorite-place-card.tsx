import type { FC } from 'react';
import { Offer } from '../../types';
import PlaceCardMark from '../place-card-mark';
import PlaceCardImg from '../place-card-img';
import PlaceCardPrice from '../place-card-price';
import BookmarksButton from '../bookmarks-button';
import PlaceCardRating from '../place-card-rating';
import PlaceCardName from '../place-card-name';
import PlaceCardType from '../place-card-type';

interface FavoritePlaceCardProps {
  favoriteOffer: Offer;
};

const FavoritePlaceCard: FC<FavoritePlaceCardProps> = ({favoriteOffer}) => {
  return (
    <article key={favoriteOffer.id} className="favorites__card place-card">
      <PlaceCardMark isPremium={favoriteOffer.isPremium} className={"place-card__mark"}></PlaceCardMark>
      <PlaceCardImg href={favoriteOffer.previewImage} width={150} height={110} className={"favorites__image-wrapper"}></PlaceCardImg>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <PlaceCardPrice summ={favoriteOffer.price}></PlaceCardPrice>
          <BookmarksButton label={'In bookmarks'}></BookmarksButton>
        </div>
        <PlaceCardRating rating={4.2}></PlaceCardRating>
        <PlaceCardName label={favoriteOffer.title}></PlaceCardName>
        <PlaceCardType label={favoriteOffer.type}></PlaceCardType>
      </div>
    </article>
  )
};

export default FavoritePlaceCard;
