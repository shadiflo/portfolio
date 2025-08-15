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
import SimpleGlassCard from '../components/simple-glass-card'
import SimpleGlassButton from '../components/simple-glass-button'
import GlassCard from '../components/glass-card'
import { IoLogoTwitter, IoLogoDiscord, IoLogoGithub } from 'react-icons/io5'
import thumbInkdrop from '../public/images/works/super.png'
import Image from 'next/image'

const Home = () => (
  <Layout>
    <Container>
      <Box display="flex" justifyContent="center" mb={6}>
        <GlassCard
          width="100%"
          height="80px"
          maxWidth="600px"
        >
          <Box textAlign="center" fontSize="lg" fontWeight="500">
            Hello, I&apos;m an app developer based in Milan!
          </Box>
        </GlassCard>
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
          <SimpleGlassButton
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            size="lg"
          >
            My portfolio
          </SimpleGlassButton>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={4} mb={6}>
          <GlassCard
            title="Education"
            description="Pursued IT studies at university level with a focus on practical applications."
            width="100%"
            height="140px"
          />
          <GlassCard
            title="Career Start"
            description="Began professional journey as an automation specialist working with PLC systems."
            width="100%"
            height="140px"
          />
          <GlassCard
            title="Entrepreneurship"
            description="Founded and developed a startup for the local municipality that was later acquired."
            width="100%"
            height="140px"
          />
          <GlassCard
            title="Present"
            description="Working as a freelance developer and building new ventures in the gaming space."
            width="100%"
            height="140px"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Box display="flex" justifyContent="center" mb={6}>
          <GlassCard
            width="100%"
            height="100px"
            maxWidth="600px"
          >
            <Box textAlign="center" fontSize="md" opacity="0.9">
              Music, Gaming, Watching Movies, Driving, Technology, and Creative Problem Solving
            </Box>
          </GlassCard>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List spacing={3}>
          <ListItem>
            <SimpleGlassButton
              as="a"
              href="https://github.com/shadiflo"
              target="_blank"
              leftIcon={<IoLogoGithub />}
              size="md"
            >
              @shadiflo
            </SimpleGlassButton>
          </ListItem>
          <ListItem>
            <SimpleGlassButton
              as="a"
              href="https://twitter.com/superclubgg"
              target="_blank"
              leftIcon={<IoLogoTwitter />}
              size="md"
            >
              @superclubgg
            </SimpleGlassButton>
          </ListItem>
          <ListItem>
            <SimpleGlassButton
              as="a"
              href="https://discord.gg/cYAYpWhdb8"
              target="_blank"
              leftIcon={<IoLogoDiscord />}
              size="md"
            >
              @discord (superclubgg)
            </SimpleGlassButton>
          </ListItem>
          <ListItem>
            <SimpleGlassButton
              as="a"
              href="https://twitter.com/shadigm_"
              target="_blank"
              leftIcon={<IoLogoTwitter />}
              size="md"
            >
              @shadigm_
            </SimpleGlassButton>
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
