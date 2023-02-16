import React, { useState } from 'react';
import styled from 'styled-components';

export interface ABOption {
  id: number;
  title: string;
  body: string;
  footer: string;
}

export interface AbOptionsGroupProps {
  options: ABOption[];
  onChange?: (option: ABOption) => void;
  defaultOption?: ABOption | null;
}

export const AbOptionsGroup: React.FC<AbOptionsGroupProps> = ({
  options,
  defaultOption,
  onChange,
}) => {
  const [selection, setSelection] = useState<ABOption | null>(
    defaultOption ?? null
  );

  const selectOptionHandler = (option: ABOption) => {
    setSelection(option);
    if (onChange) {
      onChange(option);
    }
  };
  return (
    <>
      {options.map(option => (
        <Wrapper
          onClick={() => selectOptionHandler(option)}
          isSelected={selection?.id === option.id}
          key={option.id}
        >
          <Header>{option.title}</Header>
          <MainText>
            <strong>{option.body}</strong>
          </MainText>
          <Footer>{option.footer}</Footer>
        </Wrapper>
      ))}
    </>
  );
};

const Header = styled.header`
  font-size: 12px;
  text-transform: capitalize;
`;

const MainText = styled.p`
  margin: 0;
  line-height: 24px;
  font-size: 16px;
`;

const Footer = styled.footer`
  font-size: 12px;
`;

const Wrapper = styled.section<{ isSelected: boolean }>`
  box-sizing: border-box;
  background: ${({ isSelected }) =>
    isSelected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#fff'};
  border: 1px solid;
  border-color: ${({ isSelected }) =>
    isSelected
      ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)'
      : '#EB9B00'};
  width: 194px;
  height: 88px;
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  font-family: sans-serif;
  cursor: pointer;
  margin-bottom: 10px;

  ${Header}, ${MainText} {
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#EB9B00')};
  }

  ${Footer} {
    color: ${({ isSelected }) => (isSelected ? '#fff' : '#0000008A')};
  }
`;
