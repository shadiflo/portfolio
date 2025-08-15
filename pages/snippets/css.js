import { Container, Heading, SimpleGrid, Box, Code, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import GlassCard from '../../components/glass-card'

const CSSSnippets = () => (
  <Layout title="CSS & Animations">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        CSS Effects & Animations
      </Heading>

      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <GlassCard
            title="Glassmorphism Effect"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                The glassmorphism effect used in this portfolio
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
{`.glass-card {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}

@media (prefers-color-scheme: dark) {
  .glass-card {
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
}`}
              </Code>
            </Box>
          </GlassCard>
        </Section>

        <Section delay={0.1}>
          <GlassCard
            title="Smooth Hover Animations"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Smooth hover effects for interactive elements
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
{`.hover-effect {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(0);
}

.hover-effect:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.button-hover {
  transition: transform 0.2s ease;
}

.button-hover:hover {
  transform: scale(1.05);
}

.button-hover:active {
  transform: scale(0.95);
}`}
              </Code>
            </Box>
          </GlassCard>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default CSSSnippets
export { getServerSideProps } from '../../components/chakra'