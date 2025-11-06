// src/routes/about.tsx
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes.xxl};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const TechItem = styled.li`
  font-size: ${({ theme }) => theme.typography.sizes.md};
  color: ${({ theme }) => theme.colors.text};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  &:before {
    content: '✓ ';
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`;

function About() {
  return (
    <AboutContainer>
      <Title>About This Project</Title>
      
      <Section>
        <SectionTitle>Tech Stack</SectionTitle>
        <Description>
          This project is built with modern tools and libraries:
        </Description>
        <TechList>
          <TechItem>React 18 with TypeScript</TechItem>
          <TechItem>TanStack Router for routing</TechItem>
          <TechItem>TanStack Query for data fetching</TechItem>
          <TechItem>styled-components for styling</TechItem>
          <TechItem>Vite for fast development</TechItem>
        </TechList>
      </Section>

      <Section>
        <SectionTitle>Getting Started</SectionTitle>
        <Description>
          This scaffold provides a solid foundation for building React applications
          with type safety, modern routing, efficient data management, and a flexible
          styling solution.
        </Description>
      </Section>
    </AboutContainer>
  );
}

export const Route = createFileRoute('/about')({
  component: About,
});
