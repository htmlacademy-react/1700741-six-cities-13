import type { FC } from 'react';
import { SortingItems } from '../const';
import ItemSortingList from './item-sorting-list';

interface FormSortingPlacesProps {
  label: string;
};


const FormSortingPlaces: FC<FormSortingPlacesProps> = ({label}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {label}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {SortingItems.map(
            (value, index) =>
<<<<<<< Updated upstream
              (<ItemSortingList key={index} label={Object.keys(SortingItems)[index]} active={Object.values(SortingItems)[index]}>

              </ItemSortingList>
              )
=======
              <ItemSortingList key={index} label={value} active></ItemSortingList>
>>>>>>> Stashed changes
            )
          }
      </ul>
    </form>
  )
};

export default FormSortingPlaces;
