import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="SuperClub.gg">
      <Container>
        <Title>
          SuperClub.gg <Badge>2023-Present</Badge>
        </Title>
        <P>
          SuperClub.gg is a talent platform designed to help esports players showcase their
          skills and abilities. The platform offers various tools for players and organizations
          to improve performance and track progress, with a particular focus on integrating
          with Faceit API to provide enhanced statistics and insights.
        </P>
        <P>
          The platform serves as a hub for competitive gamers looking to advance their careers,
          with tools that make tracking progress and improvement easier for both individual players
          and organizations scouting new talent.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://superclub.gg" target="_blank">
              https://superclub.gg <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, Node.js, Faceit API, MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Player statistics, team management, performance tracking, talent showcasing</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key Features</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            Comprehensive player profiles with detailed statistics
          </ListItem>
          <ListItem>
            Team formation and management tools
          </ListItem>
          <ListItem>
            Advanced analytics for performance improvement
          </ListItem>
          <ListItem>
            Integration with Faceit API for seamless data access
          </ListItem>
          <ListItem>
            Talent discovery system for organizations and teams
          </ListItem>
        </UnorderedList>

        {/* Placeholder for images - you'll add your own screenshots */}
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/streamertool.png" alt="SuperClub.gg" />
          <WorkImage src="/images/works/league.png" alt="SuperClub.gg" />
        </SimpleGrid>
        <WorkImage src="/images/works/super.png" alt="SuperClub.gg" />
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
