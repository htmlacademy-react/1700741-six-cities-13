import { FC } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../const';

interface  PlaceCardNameProps {
  label: string;
  id: string;
};

const PlaceCardName: FC<PlaceCardNameProps> =({label, id}) => {

  return (
    <h2 className="place-card__name">
      <Link
        to={`${AppRoutes.Offer}/${id}`}
        // onClick={handleClick}
        >
      {label}</Link>
    </h2>
  )
};

export default PlaceCardName;

