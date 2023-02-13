import React from 'react';
import styled from 'styled-components';

export interface AbTagProps {
  text?: string;
}

export const AbTag: React.FC<AbTagProps> = ({ text }) => {
  return <Tag>{text}</Tag>;
};

const Tag = styled.span`
  padding: 24px 32px;
  color: #ffffff;
  background: #eb9b00;
  font-weight: 700;
  font-size: 24px;
  display: inline-block;
  font-family: sans-serif;
`;
