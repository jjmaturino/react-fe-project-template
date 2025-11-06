// src/components/layout/Footer.tsx
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.sizes.sm};
  margin: 0;
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        © {new Date().getFullYear()} My App. Built with React and TypeScript.
      </FooterText>
    </FooterContainer>
  );
}
