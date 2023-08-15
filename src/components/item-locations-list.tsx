import { FC } from 'react';

interface ItemLocationsProps  {
  label: string;
  href: string;
  key: number;
};

const ItemLocations: FC<ItemLocationsProps> =({label, href}) => {
  return (
    <>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href={href}>
          <span>{label}</span>
        </a>
      </li>
    </>
  )
};

export default ItemLocations;
