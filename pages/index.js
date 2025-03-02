import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon} from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'
import thumbInkdrop from '../public/images/works/super.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an app developer based in Milan!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Florin
          </Heading>
          <p>Digital  ( Developer / Entrepreneur / Gamer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/shadiflo.jpg"
              alt="Profile image"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
        Florin is a freelance developer based in Milan with a passion for building esports tools, services and applications. He works across the entire development process, from planning and designing to implementing practical solutions with code. When not coding, he loves playing CS2, WoW, and Hearthstone. Currently, he is freelancing while working on building his own startup focused on gaming and esports solutions.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>Education</BioYear>
          Pursued IT studies at university level with a focus on practical applications.
        </BioSection>
        <BioSection>
          <BioYear>Career Start</BioYear>
          Began professional journey as an automation specialist working with PLC systems.
        </BioSection>
        <BioSection>
          <BioYear>Entrepreneurship</BioYear>
          Founded and developed a startup for the local municipality that was later acquired.
        </BioSection>
        <BioSection>
          <BioYear>Present</BioYear>
          Working as a freelance developer and building new ventures in the gaming space.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Gaming, Watching Movies, Driving, Technology, and Creative Problem Solving
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/shadiflo" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @shadiflo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/superclubgg" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @superclubgg
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://discord.gg/cYAYpWhdb8" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoDiscord />}
              >
                @disocord (superclubgg)
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/shadigm_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @shadigm_
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>

          <GridItem
            href="https://www.superclub.gg/"
            title="SUPERCLUB"
            thumbnail={thumbInkdrop}
          >
            An esports platform
          </GridItem>
        </SimpleGrid>

      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
