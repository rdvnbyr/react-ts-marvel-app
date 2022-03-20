import React from 'react';
import styled from 'styled-components';

export function UICard(props: { children: React.ReactNode }) {
  return <StyledUICard>{props.children}</StyledUICard>;
}
export function UICardImageContainer(props: { src: string; title?: string }) {
  return (
    <StyledUICardImageContainer>
      <img src={props.src} alt={props.title || 'no-title'} />
    </StyledUICardImageContainer>
  );
}
export function UICardBody(props: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <StyledUICardBody>
      <h4>{props.title}</h4>
      <p>{props.description || 'There is no description'}</p>
      <StyledUICardBodyLinks>{props.children}</StyledUICardBodyLinks>
    </StyledUICardBody>
  );
}

const StyledUICard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 56rem;
  margin: 1rem 0;
  @media (max-width: 600px) {
    width: 18rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const StyledUICardImageContainer = styled.div`
  width: 24rem;
  height: auto;
  border-radius: var(--border-radius);
  & img {
    width: 24rem;
    height: 100%;
  }
  @media (max-width: 600px) {
    width: 18rem;
    height: auto;
    & img {
      width: 18rem;
      height: 100%;
    }
  }
`;

const StyledUICardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 32rem;
  padding: 1rem;
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
  }
  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  @media (max-width: 600px) {
    width: 18rem;
    padding: 0.5rem;
    h4 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
const StyledUICardBodyLinks = styled.div`
  width: min(100%, 600px);
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1rem;
  button {
    margin-right: 0.5rem;
  }
`;
