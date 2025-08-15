import { Container, Heading, SimpleGrid, Box, Code, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import GlassCard from '../../components/glass-card'

const JavaScriptSnippets = () => (
  <Layout title="JavaScript Utilities">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        JavaScript Utilities & Functions
      </Heading>

      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <GlassCard
            title="Debounce Function"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Utility function to debounce function calls
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
{`function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);`}
              </Code>
            </Box>
          </GlassCard>
        </Section>

        <Section delay={0.1}>
          <GlassCard
            title="Array Shuffle"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Fisher-Yates shuffle algorithm for arrays
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
{`function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Usage
const cards = ['A', 'K', 'Q', 'J'];
const shuffled = shuffleArray(cards);`}
              </Code>
            </Box>
          </GlassCard>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default JavaScriptSnippets
export { getServerSideProps } from '../../components/chakra'