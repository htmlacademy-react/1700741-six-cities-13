import { FC } from "react";

interface FieldProps  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  name: string;
  placeholder: string;
}

const Field: FC = ({label, name, type, placeholder, ...rest}) => {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input className="login__input form__input" type={type} name={name} placeholder={placeholder} required={false} />
    </div>
  )
};

export default Field;
