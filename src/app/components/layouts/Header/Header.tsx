import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h3>MARVEL-API</h3>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  line-height: 5rem;
  background: var(--primary);
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  padding: 0 2rem;
`;
