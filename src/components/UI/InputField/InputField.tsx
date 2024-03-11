import React, { ChangeEvent } from 'react';

interface InputFieldProps {
  id?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  error?: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  id,
}) => {
  return (
    <div className="flex flex-col mt-5 w-full">
      <label htmlFor={name} className="heading text-base">
        {label}
      </label>
      <input
        className="input-field mobile:w-full"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error ? <div className="error-text">{error}</div> : null}
    </div>
  );
};

export default InputField;
