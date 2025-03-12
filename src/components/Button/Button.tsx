/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      css={css`
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;

        &:hover {
          background-color: #0056b3;
        }
      `}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
