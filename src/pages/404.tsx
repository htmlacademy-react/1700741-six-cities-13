import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Страница не найдена</title>
      </Helmet>
      <main>
        <h1 className="favorites__title">Ошибка 404. Страница не найдена</h1>
        <p className="favorites__title">
          Вернитесь на
          <Link className="locations__item-link" to={"/"}> ГЛАВНУЮ СТРАНИЦУ
          </Link>
        </p>
      </main>
    </>
  );
}

export default NotFoundScreen;
