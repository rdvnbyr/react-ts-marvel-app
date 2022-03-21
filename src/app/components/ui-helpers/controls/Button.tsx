import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  size?: string | undefined;
  color: string;
  onClick?: () => void;
  disabled?: boolean;
  isLink?: boolean;
  href?: string;
};

export const Button: React.FC<Props> = (props) =>
  props.isLink && props.href ? (
    <Link to={props.href}>
      <StyledButton {...props}>{props.children}</StyledButton>
    </Link>
  ) : (
    <StyledButton {...props}>{props.children}</StyledButton>
  );

const StyledButton = styled.button.attrs((props) => ({
  type: props.type || "button",
}))<Props>`
  cursor: pointer;
  background-color: ${(props) => `var(--${props.color})`};
  border: 1px solid ${(props) => `var(--${props.color})`};
  border-radius: var(--border-radius);
  color: ${(props) => `var(--${props.color}-inverse)`};
  padding: 0.65rem 1.25rem;
  font-weight: bold;
  ${(props) => props.size === "sm" && "padding: 0.35rem 0.85rem;"}
  ${(props) => props.size === "sm" && "font-size: 0.8rem;"}
  ${(props) => props.size === "lg" && "padding: 1rem 2rem;"}
  ${(props) => props.size === "xl" && "padding: 1.25rem 2.45rem;"}
  /* height: 3rem; */
  &:hover,
  &:active {
    background-color: ${(props) => `var(--${props.color}-dark)`};
    border-color: ${(props) => `var(--${props.color}-dark)`};
  }
`;
