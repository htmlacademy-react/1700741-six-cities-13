import type { FC } from 'react';

interface PlaceCardMarkProps {
  isPremium: boolean;
  className: string
};


<<<<<<< Updated upstream
const PlaceCardMark: FC<PlaceCardMarkProps> = ({exist}) => {
  if ({exist}) {return (
    <div className="place-card__mark">
          <span>Premium</span>
    </div>)
  };
=======
const PlaceCardMark: FC<PlaceCardMarkProps> = ({isPremium, className}) => {
  return (
    isPremium ?
      <div className={className}>
        <span>Premium</span>
      </div>
      :
      ''
  )
>>>>>>> Stashed changes
};

export default PlaceCardMark;
