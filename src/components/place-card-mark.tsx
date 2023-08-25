import type { FC } from 'react';

interface PlaceCardMarkProps {
  isPremium: boolean;
  className: string
};

const PlaceCardMark: FC<PlaceCardMarkProps> = ({isPremium, className}) => {
  return (
    isPremium ?
      <div className={className}>
        <span>Premium</span>
      </div>
      :
      ''
  )
};

export default PlaceCardMark;
