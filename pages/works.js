import { Container, Heading, SimpleGrid, Box, Text, LinkBox, LinkOverlay, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'

// Custom component that doesn't require images
const WorkItem = ({ id, title, children }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      cursor="pointer"
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="whiteAlpha.200"
      backdropFilter="blur(10px)"
      transition="all 0.2s"
      _hover={{ transform: 'scale(1.02)', shadow: 'md' }}
    >
      <VStack>
        <Heading as="h3" fontSize={20} mb={2}>
          <LinkOverlay as={NextLink} href={`/works/${id}`}>
            {title}
          </LinkOverlay>
        </Heading>
        <Text>{children}</Text>
      </VStack>
    </LinkBox>
  </Box>
)

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkItem id="superclub" title="SuperClub.gg">
            A talent platform to help esports players showcase themselves with tools for
            improvement, statistics tracking, and team management
          </WorkItem>
        </Section>
        <Section>
          <WorkItem
            id="faceitvisuals"
            title="FaceitVisuals"
          >
            Chrome extension for faceit.com with 10k+ users offering Elo calculators,
            V.I.P. badges, ban history, and more
          </WorkItem>
        </Section>

        <Section delay={0.1}>
          <WorkItem
            id="outlawzcs"
            title="OutlawzCS.net"
          >
            The largest Italian CS 1.6 community with multiple game servers, tournaments,
            and competitive leagues with prize money
          </WorkItem>
        </Section>
        <Section delay={0.1}>
          <WorkItem id="websites" title="Local Business Websites">
            Various web development projects for local businesses including schools,
            kindergartens, and window manufacturers
          </WorkItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
