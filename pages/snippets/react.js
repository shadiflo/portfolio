import { Container, Heading, SimpleGrid, Box, Code, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import GlassCard from '../../components/glass-card'

const ReactSnippets = () => (
  <Layout title="React Components">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        React Components & Hooks
      </Heading>

      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <GlassCard
            title="useLocalStorage Hook"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                A custom hook for managing localStorage with React state
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="blackAlpha.300"
                fontSize="xs"
                overflow="auto"
              >
{`import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`}
              </Code>
            </Box>
          </GlassCard>
        </Section>

        <Section delay={0.1}>
          <GlassCard
            title="Copy to Clipboard Hook"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Hook for copying text to clipboard with success feedback
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="blackAlpha.300"
                fontSize="xs"
                overflow="auto"
              >
{`import { useState } from 'react';

function useCopyToClipboard() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  return [isCopied, copyToClipboard];
}`}
              </Code>
            </Box>
          </GlassCard>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default ReactSnippets
export { getServerSideProps } from '../../components/chakra'