import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Faceit-Visa">
    <Container>
      <Title>
        Faceit-Visa <Badge>2024</Badge>
      </Title>
      <P>
        The easiest way to add FACEIT OAuth2 authentication to any web application.
        Inspired by the simplicity of getting a visa - just the essentials you need to authenticate with FACEIT.
      </P>
      <P>
        A lightweight OAuth implementation that simplifies the process of integrating FACEIT authentication
        into web applications. Built with developer experience in mind, providing a clean and simple API
        for handling FACEIT's OAuth2 flow.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Node.js / npm package</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>JavaScript, OAuth2, FACEIT API</span>
        </ListItem>
        <ListItem>
          <Meta>Source</Meta>
          <Link href="https://github.com/shadiflo/faceit-visa" target="_blank">
            GitHub Repository <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Package</Meta>
          <Link href="https://www.npmjs.com/package/faceit-visa" target="_blank">
            NPM Package <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'