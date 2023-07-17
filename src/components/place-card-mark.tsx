import type { FC } from 'react';

interface PlaceCardMarkProps {
  exist: boolean;
};


const PlaceCardMark: FC<PlaceCardMarkProps> = ({exist}) => {
  if ({exist}) {return (
    <div className="place-card__mark">
          <span>Premium</span>
    </div>)
  };
};

export default PlaceCardMark;
