import {
    Container,
    Badge,
    List,
    ListItem,
    UnorderedList,
    Heading,
    Center
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title,  Meta } from '../../components/work'
  import P from '../../components/paragraph'

  const Work = () => (
    <Layout title="Local Business Websites">
      <Container>
        <Title>
          Local Business Websites <Badge>Various Years</Badge>
        </Title>
        <P>
          Throughout my freelance career, I&apos;ve designed and developed websites for a diverse
          range of local businesses and organizations. These projects have included educational
          institutions like kindergartens and schools, as well as commercial businesses such as
          window manufacturers and retailers.
        </P>
        <P>
          Each project was approached with a customized solution based on the client&apos;s specific
          needs, target audience, and business goals. This portfolio represents my ability to
          adapt to different industries and create effective web presences for various types of
          organizations.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Clients</Meta>
            <span>Educational institutions, manufacturing businesses, local retailers</span>
          </ListItem>
          <ListItem>
            <Meta>Industries</Meta>
            <span>Education, Manufacturing, Retail, Services</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML/CSS, JavaScript, PHP, WordPress, Custom CMS solutions</span>
          </ListItem>
          <ListItem>
            <Meta>Services</Meta>
            <span>Web design, development, content management, SEO optimization</span>
          </ListItem>
        </List>

        <Heading as="h4" fontSize={16} my={6}>
          <Center>Project Highlights</Center>
        </Heading>

        <UnorderedList my={4}>
          <ListItem>
            <Badge mr={2}>Education</Badge>
            Developed interactive websites for schools featuring student portals, event calendars,
            and resource libraries
          </ListItem>

          <ListItem>
            <Badge mr={2}>Kindergarten</Badge>
            Created child-friendly, colorful websites with parent information areas, photo galleries,
            and registration forms
          </ListItem>

          <ListItem>
            <Badge mr={2}>Manufacturing</Badge>
            Built product showcase websites for window manufacturers with detailed catalogs,
            quote request systems, and installation galleries
          </ListItem>

          <ListItem>
            <Badge mr={2}>Custom Solutions</Badge>
            Implemented tailored content management systems allowing clients to easily update
            their own website content
          </ListItem>
        </UnorderedList>

        {/* Placeholder for images - you'll add your own screenshots */}

      </Container>
    </Layout>
  )

  export default Work
  export { getServerSideProps } from '../../components/chakra'
