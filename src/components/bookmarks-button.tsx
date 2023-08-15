import { FC } from 'react';

interface BookmarksButtonProps {
  label: string
}

const BookmarksButton: FC<BookmarksButtonProps> =({label}) => {
  return (
    <button className="place-card__bookmark-button button" type="button">
      <svg className="place-card__bookmark-icon" width={18} height={19}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{label}</span>
    </button>
  )
};

export default BookmarksButton;
