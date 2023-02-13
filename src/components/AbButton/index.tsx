import React from 'react';
import styled, { css } from 'styled-components';

export interface AbButtonProps {
  text?: string;
  buttonType?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const AbButton: React.FC<AbButtonProps> = ({
  onClick,
  text,
  buttonType = 'primary',
}) => {
  return (
    <Button onClick={onClick} buttonType={buttonType}>
      {text}
    </Button>
  );
};

const Button = styled.button<AbButtonProps>`
  background: ${({ buttonType }) =>
    buttonType === 'primary' ? '#eb9b00' : '#fff'};
  padding: 16px 32px;
  border: 2px solid #eb9b00;
  color: ${({ buttonType }) => (buttonType === 'primary' ? '#fff' : '#eb9b00')};
  font-size: 20px;
  cursor: pointer;
  ${({ buttonType }) =>
    buttonType === 'primary'
      ? css`
          &:hover {
            background: #b87900;
            border: 2px solid #b87900;
          }
        `
      : css`
          &:hover {
            background: #fff;
            border: 2px solid #b87900;
            color: #b87900;
          }
        `}
`;
