import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

export const AbCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.section`
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 550px;
  height: 374px;
  padding: 48px 32px 48px 48px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
