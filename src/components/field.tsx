import { FC } from "react";

interface FieldProps  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
  label: string;
  name: string;
  placeholder: string;
}

// Вот тут rest Не пропускает, потому что  не используются  параметры кроме напрямую заявленных и почему если удалить type, то он подчеркивается в основе (он же должен быть заявленным от реактэлемента?)
const Field: FC<FieldProps> = ({label, name, type, placeholder, ...rest}) => {
  return (
    <div className="login__input-wrapper form__input-wrapper">
      <label className="visually-hidden">{label}</label>
      <input className="login__input form__input" type={type} name={name} placeholder={placeholder} required={false} />
    </div>
  )
};

export default Field;
