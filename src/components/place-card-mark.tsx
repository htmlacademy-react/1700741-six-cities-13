import type { FC } from 'react';

interface PlaceCardMarkProps {
  exist: boolean;
};


const PlaceCardMark: FC<PlaceCardMarkProps> = ({exist}) => {
  // НЕ СРАБОТАЛО. ПОЧЕМУ?
  return (
    `
      ${{exist}? <div className="place-card__mark">
          <span>Premium</span>
      </div> : ''}
    `
  )
};

export default PlaceCardMark;
