import type { FC } from 'react';

interface ItemSortingListProps {
  label: string;
  active: boolean;
};


const  ItemSortingList: FC<ItemSortingListProps> = ({label, active}) => {
  return (
    <>
      <li className={'places__option' + ' ' + ({active}? 'places__option--active' : '' )} tabIndex={0}>{label}</li>
    </>
  )
};

export default ItemSortingList;
