import { Container, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import GlassCard from '../components/glass-card'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/works/superclub" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="SuperClub.gg"
                  description="A talent platform to help esports players showcase themselves with tools for improvement, statistics tracking, and team management"
                  width="100%"
                  height="180px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/works/faceitvisuals" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="FaceitVisuals"
                  description="Chrome extension for faceit.com with 10k+ users offering Elo calculators, V.I.P. badges, ban history, and more"
                  width="100%"
                  height="180px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/works/outlawzcs" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="OutlawzCS.net"
                  description="The largest Italian CS 1.6 community with multiple game servers, tournaments, and competitive leagues with prize money"
                  width="100%"
                  height="180px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.1}>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/works/websites" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="Local Business Websites"
                  description="Various web development projects for local businesses including schools, kindergartens, and window manufacturers"
                  width="100%"
                  height="180px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Box w="100%" display="flex" justifyContent="center">
            <NextLink href="/works/faceitvisa" passHref>
              <Box as="a" style={{ textDecoration: 'none', width: '100%' }}>
                <GlassCard
                  title="Faceit-Visa"
                  description="The easiest way to add FACEIT OAuth2 authentication to any web application. Inspired by the simplicity of getting a visa - just the essentials you need."
                  width="100%"
                  height="180px"
                />
              </Box>
            </NextLink>
          </Box>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
