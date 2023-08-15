import { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../const';

interface  PlaceCardNameProps {
  label: string;
  href: string;
};

const PlaceCardName: FC<PlaceCardNameProps> =({label, href}) => {
  // ВПР почему не сработал NAVIGATE?

  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate(AppRoutes.Offer);
  // }

  return (
    <h2 className="place-card__name">
      <Link
        to={`${AppRoutes.Offer}/id`}
        // onClick={handleClick}
        >
      {label}</Link>
    </h2>
  )
};

export default PlaceCardName;

