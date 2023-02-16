import React from 'react';
import styled from 'styled-components';

export interface InputFieldProps {
  label: string;
  value: string;
  type?: 'text' | 'email' | 'password' | 'date';
  onChange: (value: string) => void;
}

export const AbInputText: React.FC<InputFieldProps> = ({
  label,
  onChange,
  value,
  type = 'text',
}) => {
  return (
    <Wrapper>
      <FieldName>{label}</FieldName>
      <Input
        type={type}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 8px;
  width: 509px;
`;

const FieldName = styled.label`
  color: #002f52;
  font-size: 16px;
  line-height: 24px;
  font-family: sans-serif;
  font-weight: 700;
  margin-left: 24px;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  border: 1px solid #002f52;
  border-radius: 24px;
  padding: 10px 24px;
  color: #a4a4a4;
  font-size: 16px;
`;
