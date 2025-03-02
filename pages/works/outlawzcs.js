import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Box
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="OutlawzCS.net">
      <Container>
        <Title>
          OutlawzCS.net <Badge>2000s-2010s</Badge>
        </Title>
        <P>
          OutlawzCS.net was one of the largest Italian Counter-Strike 1.6 communities,
          offering a complete gaming experience with multiple game servers, tournaments,
          and competitive leagues with prize money.
        </P>
        <P>
          The community hosted 3 Counter-Strike 1.6 servers, 2 CS:GO public servers, and 1 CS:GO
          surf server. All servers were consistently at full capacity, with daily 10-man pickup
          games and organized tournament leagues offering cash prizes.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Web, Game Servers</span>
          </ListItem>
          <ListItem>
            <Meta>Archive</Meta>
            <Link href="https://web.archive.org/web/*/outlawzcs.net" target="_blank">
              Internet Archive - OutlawzCS.net <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Servers</Meta>
            <span>3x CS 1.6, 2x CS:GO Public, 1x CS:GO Surf</span>
          </ListItem>
          <ListItem>
            <Meta>Features</Meta>
            <span>Community forums, tournament system, player statistics, team management</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Community Highlights</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            Established one of Italy's most active Counter-Strike gaming communities
          </ListItem>
          <ListItem>
            Consistently maintained full servers with active player base
          </ListItem>
          <ListItem>
            Organized competitive leagues and tournaments with cash prizes
          </ListItem>
          <ListItem>
            Facilitated daily 10-man pickup games for competitive practice
          </ListItem>
          <ListItem>
            Managed multiple game servers across different CS versions and game modes
          </ListItem>
        </UnorderedList>

        <Box my={6}>
          <P>
            Note: OutlawzCS.net is no longer active but was a significant part of the Italian
            Counter-Strike community history. The website can still be partially viewed through
            Internet Archive's Wayback Machine.
          </P>
        </Box>

        {/* Placeholder for images - you'll add your own screenshots */}
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/outlawzcs_01.png" alt="OutlawzCS.net" />
          <WorkImage src="/images/works/outlawzcs_02.png" alt="OutlawzCS.net" />
        </SimpleGrid>
        <WorkImage src="/images/works/outlawzcs_03.png" alt="OutlawzCS.net" />
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
