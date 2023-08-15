import { FC } from 'react';

type OfferImgProps = {
  href: string;
}

const OfferImg: FC<OfferImgProps> = ({href}) => {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={href} alt="Photo studio" />
    </div>
  )
};

export default OfferImg;
