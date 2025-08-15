import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import GlassCard from '../components/glass-card'
import NextLink from 'next/link'

const Snippets = () => (
  <Layout title="Snippets">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Code Snippets & Components
      </Heading>
      <Box mb={6}>
        <GlassCard
          width="100%"
          height="80px"
          maxWidth="600px"
        >
          <Box textAlign="center" fontSize="lg" fontWeight="500">
            A collection of useful code snippets and components I've built
          </Box>
        </GlassCard>
      </Box>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/snippets/react" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="React Components"
                  description="Reusable React components including hooks, UI elements, and utility functions"
                  width="100%"
                  height="160px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/snippets/javascript" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="JavaScript Utilities"
                  description="Handy JavaScript functions, algorithms, and browser APIs implementations"
                  width="100%"
                  height="160px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/snippets/css" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="CSS & Animations"
                  description="Cool CSS effects, animations, and styling techniques including glassmorphism"
                  width="100%"
                  height="160px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/snippets/nodejs" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="Node.js & Backend"
                  description="Server-side utilities, API helpers, and backend development snippets"
                  width="100%"
                  height="160px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Snippets
export { getServerSideProps } from '../components/chakra'