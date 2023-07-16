import { FC } from 'react';
import PlaceCardMark from './place-card-mark';
import PlaceCardImg from './place-card-img';
import PlaceCardPrice from './place-card-price';
import BookmarksButton from './bookmarks-button';
import PlaceCardRating from './place-card-rating';
import PlaceCardName from './place-card-name';
import PlaceCardType from './place-card-type';
import { PlaceCardsInfo } from '../const';

interface PlaceCardProps {

};

const PlaceCards: FC<PlaceCardProps> = () => {
  return (
    PlaceCardsInfo.map((value, index) => (
      <article className="cities__card place-card">
        <PlaceCardMark exist={PlaceCardsInfo[index].premium}></PlaceCardMark>
        <PlaceCardImg href={PlaceCardsInfo[index].imgSrc}></PlaceCardImg>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <PlaceCardPrice summ={PlaceCardsInfo[index].price}></PlaceCardPrice>
            <BookmarksButton></BookmarksButton>
          </div>
          <PlaceCardRating rating={PlaceCardsInfo[index].rating}></PlaceCardRating>
          <PlaceCardName label={PlaceCardsInfo[index].title}></PlaceCardName>
          <PlaceCardType label={PlaceCardsInfo[index].type}></PlaceCardType>
        </div>
      </article>
  )))
};

export default PlaceCards;
