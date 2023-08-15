import { FC } from 'react';
import { Offer } from '../../types';
import OfferImg from './offer-img';

type OfferImgsProps = {
  offer: Offer;
}

const OfferImgs: FC<OfferImgsProps> = ({offer}) => {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {offer.images.map((value, index) => (<OfferImg key={index} href={value}></OfferImg>))}
      </div>
    </div>
  )
};

export default OfferImgs;
