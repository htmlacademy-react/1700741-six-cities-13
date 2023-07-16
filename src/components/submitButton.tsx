import type { FC } from 'react';

interface SubmitButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  label: string;
}

const SubmitButton: FC<SubmitButtonProps> = ({label}) => {
  return (
    <button className="login__submit form__submit button" type="submit">{label}</button>
  )
};

export default SubmitButton;
