import React from 'react';
import styled from 'styled-components';

type CardHeaderProps = {
  title: string;
  source: string;
};
type CardBodyProps = {
  title: string;
  description: string | null | undefined;
};

export const Card = (props: { children: React.ReactNode }) => (
  <StyledCard>{props.children}</StyledCard>
);
export const CardHeader = (props: CardHeaderProps) => (
  <StyledCardHeader>
    <img src={props.source} alt={props.title} />
  </StyledCardHeader>
);
export const CardBody: React.FC<CardBodyProps> = (props) => (
  <StyledCardBody>
    <h4>{props.title}</h4>
    <p>{props.description || "There is no description"}</p>
  </StyledCardBody>
);
export const CardFooter: React.FC = (props) => (
  <StyledCardFooter>{props.children}</StyledCardFooter>
);

const StyledCard = styled.div`
  border: 1px solid var(--dark);
  /* border-left: none;
  border-right: none; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 18rem;
  height: 30rem;
  margin: 2rem 1rem;
  border-radius: 3px;
`;
const StyledCardHeader = styled.div`
  width: 100%;
  height: 10rem;
  display: grid;
  place-content: center;
  & img {
    width: 100%;
    max-height: 10rem;
    border-radius: 5px;
  }
`;
const StyledCardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h4 {
    font-size: 1.2rem;
    font-weight: bold;
    margin: 1rem 0;
    color: var(--secondary);
  }
  p {
    font-size: 0.8rem;
    text-align: left;
  }
`;
const StyledCardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: auto;
  margin-bottom: 1rem;
  padding: 1rem;
`;
