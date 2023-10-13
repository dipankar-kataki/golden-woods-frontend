import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="text-[16px] bg-[#6747cd] rounded-sm text-white py-4 px-8 w-full overflow-hidden "
    >
      {children}
    </button>
  );
};

export default Button;
