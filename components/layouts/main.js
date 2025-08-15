import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlassNavbar from '../glass-navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import RocketLoader from '../voxel-diamond-loader'

const LazyVoxelRocket = dynamic(() => import('../voxel-diamond'), {
  ssr: false,
  loading: () => <RocketLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} position="relative">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="florin's homepage" />
        <meta name="author" content="Florin shadi" />
        <meta name="author" content="shadi" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="shadigm" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shadigm" />
        <meta name="twitter:creator" content="@shadigm" />
        <meta property="og:site_name" content="Florin Stefanescu" />
        <meta name="og:title" content="Florin Stefanescu" />
        <meta property="og:type" content="website" />
        <title>Florin  - Homepage</title>
      </Head>

      {/* Static Sand Background */}
      <Box
        position="fixed"
        top="0"
        left="0"
        width="100vw"
        height="100vh"
        zIndex="-1"
        backgroundImage="url('/images/sand1.jpeg')"
        backgroundSize="100%"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        opacity="0.8"
      />

      <GlassNavbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelRocket />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
