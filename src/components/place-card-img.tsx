import { FC } from 'react';

interface  PlaceCardImgProps {
  href: string;
  width: number;
  height: number;
  className: string;
};

const PlaceCardImg: FC<PlaceCardImgProps> =({href, width, height, className}) => {
  const classNameWrapper = `${className} place-card__image-wrapper`;
  return (
    <div className={classNameWrapper}>
        <a href="#">
          <img className="place-card__image" src={href} width={width} height={height} alt="Place image" />
        </a>
    </div>
  )
};

export default PlaceCardImg;
