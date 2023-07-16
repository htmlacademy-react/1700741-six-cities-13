import { FC } from 'react';

interface LocationsItemProps {
  label: string;
};

const LocationsItem: FC<LocationsItemProps> = ({label}: LocationsItemProps) => {
  return (
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{label}</span>
      </a>
    </div>
  )
};

export default LocationsItem;


