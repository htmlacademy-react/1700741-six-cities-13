import type { FC } from 'react';

interface CityTitleProps {
  label: string;
};

const CityTitle: FC<CityTitleProps> = ({label}) => {
  // ВПР как сделать так, чтобы надпись города появлялась только в первом предложении из города,
  return (
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{label}</span>
        </a>
      </div>
    </div>
  )
};

export default CityTitle;
