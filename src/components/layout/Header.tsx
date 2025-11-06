// src/components/layout/Header.tsx
import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.md};
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  &.active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }
`;

export function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Logo>My App</Logo>
        <NavLinks>
          <NavLink to="/" activeOptions={{ exact: true }}>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}
