import React from 'react';
import { IconType } from 'react-icons';

interface Props {
  placeholder: string;
  name: string;
  label: string;
  Icon: IconType;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
}

const TextFieldFormik: React.FC<Props> = ({
  value,
  onChange,
  onBlur,
  Icon,
  label,
  name,
  placeholder,
  error,
}) => {
  // Correcting props usage
  return (
    <div className="w-full mb-4">
      <label
        className="mb-3 block text-sm font-medium text-black dark:text-white"
        htmlFor={name} // Using name for htmlFor
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-4.5 top-4">
          <Icon />
        </span>
        <input
          className={`w-full rounded border ${
            error
              ? 'border-danger dark:border-danger focus:border-danger dark:focus:border-danger '
              : 'border-stroke  focus:border-primary dark:focus:border-primary'
          } bg-gray py-3 pl-11.5 pr-4.5 text-black  focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white `}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          id={name}
          placeholder={placeholder}
          value={value}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextFieldFormik;
