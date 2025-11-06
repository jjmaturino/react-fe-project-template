// src/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

function Home() {
  return (
    <HomeContainer>
      <Title>Welcome to Your React App</Title>
      <Description>
        This is a starter template built with React, TypeScript, TanStack Router,
        TanStack Query, and styled-components.
      </Description>
      <Description>
        Navigate to the About page to learn more about this project.
      </Description>
    </HomeContainer>
  );
}

export const Route = createFileRoute('/')({
  component: Home,
});
