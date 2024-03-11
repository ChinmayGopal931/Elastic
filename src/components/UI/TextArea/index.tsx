import React, { ChangeEvent, ChangeEventHandler } from 'react';

interface TextAreaProps {
  name: string;
  label: string;
  value: string;
  placeholder: string;
  onChange: any;
  textClassName?: string;
  id?: string;
  error?: string | null;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  textClassName,
  error,
  id,
}) => {
  return (
    <div className="flex flex-col mt-5 w-full">
      <label htmlFor={name}>{label}</label>
      <textarea
        className={'text-area-field ' + textClassName}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error ? <div className="error-text">{error}</div> : null}
    </div>
  );
};

export default TextArea;
