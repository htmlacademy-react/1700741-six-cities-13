import { FC } from 'react';

interface  PlaceCardImgProps {
  href: string;
};

const PlaceCardImg: FC<PlaceCardImgProps> =({href}) => {
  return (
    <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={href} width={260} height={200} alt="Place image" />
        </a>
      </div>
  )
};

export default PlaceCardImg;
