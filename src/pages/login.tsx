import { Helmet } from "react-helmet-async";
import Form from "../components/form";
import Logo from "../components/logo";
import LocationsItem from "../components/location-item";

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo width={81} height={41}></Logo>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <Form></Form>
          </section>
          <section className="locations locations--login locations--current">
            <LocationsItem label="Amsterdam"></LocationsItem>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
