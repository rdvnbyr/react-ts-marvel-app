import styled from 'styled-components';

export default function Footer() {
  return <StyledFooter>Created by @WebDots</StyledFooter>;
}

const StyledFooter = styled.footer`
  background-color: var(--darkGray);
  padding: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  color: var(--white);
  height: 3rem;
`;
