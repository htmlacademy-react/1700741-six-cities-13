import type { FC } from 'react';
import Field from './field';
import SubmitButton from './submitButton';

const Form: FC = () => {
  return (
    <form className="login__form form" action="#" method="post">
      <Field label="E-mail" name="email" placeholder="E-mail"></Field>
      <Field label="Password" name="password" placeholder="password"></Field>
      <SubmitButton label="Sign in"></SubmitButton>
    </form>
  )
};

export default Form;
