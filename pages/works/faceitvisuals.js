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
    <Layout title="FaceitVisuals">
      <Container>
        <Title>
          FaceitVisuals <Badge>2022-Present</Badge>
        </Title>
        <P>
          FaceitVisuals is a Chrome extension designed to enhance the Faceit.com experience with
          additional features and tools. With over 10,000 users, this extension has become a
          popular tool in the competitive CS:GO community.
        </P>
        <P>
          The extension provides players with advanced statistics, enhanced visual elements,
          and quality-of-life improvements that aren't available on the standard Faceit platform.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Chrome Extension</span>
          </ListItem>
          <ListItem>
            <Meta>Chrome Store</Meta>
            <Link href="https://chrome.google.com/webstore/detail/faceitvisuals" target="_blank">
              FaceitVisuals on Chrome Web Store <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Users</Meta>
            <span>10,000+</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, HTML/CSS, Chrome Extension API, Faceit API</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Key Features</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            Matchroom Elo Calculator - Calculate and display ELO statistics for all players in a match
          </ListItem>
          <ListItem>
            V.I.P. Badges - Custom badges to identify special users
          </ListItem>
          <ListItem>
            Ban History - Easy access to player ban records
          </ListItem>
          <ListItem>
            Matchroom Badges - Visual enhancements for the matchroom interface
          </ListItem>
          <ListItem>
            Steam Profile Integration - Adds Faceit information to Steam profiles
          </ListItem>
          <ListItem>
            Ongoing Development - New API functionalities being added regularly
          </ListItem>
        </UnorderedList>

        {/* Placeholder for images - you'll add your own screenshots */}
        <SimpleGrid columns={2} gap={2}>
          <WorkImage src="/images/works/faceitvisuals_01.png" alt="FaceitVisuals" />
          <WorkImage src="/images/works/faceitvisuals_02.png" alt="FaceitVisuals" />
        </SimpleGrid>
        <WorkImage src="/images/works/faceitvisuals_03.png" alt="FaceitVisuals" />
      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
