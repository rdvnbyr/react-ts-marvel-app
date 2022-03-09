import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <h3>MARVEL-API</h3>
      </div>
      <StyledLinks>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </StyledLinks>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  background: var(--primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: center;
  padding: 0 2rem;
`;
const StyledLinks = styled.div`
  display: flex;
  flex-direction: row;
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
    padding: 0 1rem;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: 0.3s ease-in-out;
    }
  }
  .active {
    transform: scale(1.1);
    color: var(--secondary);
  }
`;
