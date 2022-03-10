import styled from 'styled-components';
import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: string | undefined;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const Button: React.FC<Props> = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))<Props>`
  cursor: pointer;
  background-color: ${(props) => `var(--${props.color})`};
  border: 1px solid ${(props) => `var(--${props.color})`};
  border-radius: 3px;
  color: ${(props) => `var(--${props.color}-inverse)`};
  padding: 1rem 2rem;
  font-weight: bold;
  ${(props) => props.size === 'sm' && 'padding: 0.5rem 1rem;'}
  ${(props) => props.size === 'sm' && 'font-size: 0.8rem;'}
  ${(props) => props.size === 'lg' && 'padding: 1.5rem 2rem;'}
  ${(props) => props.size === 'xl' && 'padding: 2rem 2.5rem;'}
  /* height: 3rem; */
  &:hover,
  &:active {
    background-color: ${(props) => `var(--${props.color}-dark)`};
    border-color: ${(props) => `var(--${props.color}-dark)`};
  }
`;
