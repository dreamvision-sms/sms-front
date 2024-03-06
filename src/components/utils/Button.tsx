import React from 'react';

interface Props {
  title: string;
  func: () => void;
}
const Button: React.FC<Props> = ({ title, func }: Props) => {
  return (
    <div>
      <button
        onClick={func}
        className="inline-flex items-center justify-center bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
