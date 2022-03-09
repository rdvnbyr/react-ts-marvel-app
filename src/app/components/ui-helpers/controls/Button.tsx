import styled from 'styled-components';
import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || 'button',
}))`
  cursor: pointer;
  background-color: ${(props) => `var(--${props.color})`};
  border: 1px solid ${(props) => `var(--${props.color})`};
  color: white;
  padding: 0 2rem;
  font-weight: bold;
  height: 3rem;
  &:hover,
  &:active {
    background-color: ${(props) => `var(--${props.color}-dark)`};
    border-color: ${(props) => `var(--${props.color}-dark)`};
  }
`;
