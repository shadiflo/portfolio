import { forwardRef, useEffect, useRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const GlassLinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const linkRef = useRef(null)

  useEffect(() => {
    const element = linkRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      element.style.background = `radial-gradient(
        circle at ${x}px ${y}px,
        rgba(244, 164, 96, 0.4) 0%,
        rgba(244, 164, 96, 0.2) 30%,
        rgba(244, 164, 96, 0.1) 60%
      )`
    }

    const handleMouseLeave = () => {
      if (!active) {
        element.style.background = 'rgba(244, 164, 96, 0.1)'
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [active])

  return (
    <Link
      ref={linkRef}
      as={NextLink}
      href={href}
      scroll={false}
      p={3}
      borderRadius="8px"
      background={active ? 'rgba(244, 164, 96, 0.3)' : 'rgba(244, 164, 96, 0.1)'}
      color="white"
      fontWeight="600"
      fontSize="16px"
      target={target}
      transition="all 0.2s ease"
      textShadow="0 2px 4px rgba(139, 69, 19, 0.8), 0 1px 2px rgba(0,0,0,0.7)"
      border="1px solid rgba(244, 164, 96, 0.2)"
      _hover={{
        textDecoration: 'none',
        transform: 'translateY(-1px)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const GlassNavbar = props => {
  const { path } = props
  const navRef = useRef(null)

  useEffect(() => {
    const element = navRef.current
    if (!element) return

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(255,255,255,0.1) 0%,
          rgba(255,255,255,0.03) 30%,
          rgba(255,255,255,0) 60%
        )`
      }
    }

    const handleMouseLeave = () => {
      const specular = element.querySelector('.glass-specular')
      if (specular) {
        specular.style.background = 'none'
      }
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      <svg style={{ display: 'none' }}>
        <filter id="glass-nav-distortion">
          <feTurbulence 
            type="turbulence" 
            baseFrequency="0.008" 
            numOctaves="2" 
            result="noise" 
          />
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="40" 
          />
        </filter>
      </svg>

      <Box
        ref={navRef}
        position="fixed"
        as="nav"
        w="100%"
        zIndex={2}
        sx={{
          '--bg-color': 'rgba(139, 69, 19, 0.3)', // Sand brown with transparency
          '--highlight': 'rgba(244, 164, 96, 0.4)', // Sandy brown highlight
          
          '.glass-filter, .glass-overlay, .glass-specular': {
            position: 'absolute',
            inset: '0'
          },
          
          '.glass-filter': {
            zIndex: '1',
            backdropFilter: 'blur(8px) saturate(150%) brightness(1.2)',
            filter: 'url(#glass-nav-distortion)'
          },
          
          '.glass-overlay': {
            zIndex: '2',
            background: 'var(--bg-color)',
            borderBottom: '1px solid rgba(244, 164, 96, 0.3)',
            boxShadow: '0 4px 12px rgba(139, 69, 19, 0.2)'
          },
          
          '.glass-specular': {
            zIndex: '3',
            boxShadow: 'inset 0 1px 0 rgba(244, 164, 96, 0.2), inset 1px 0 0 rgba(244, 164, 96, 0.1)'
          },

          '@media (prefers-color-scheme: dark)': {
            '--bg-color': 'rgba(101, 67, 33, 0.4)', // Darker sand brown
            '--highlight': 'rgba(222, 184, 135, 0.3)' // Burlywood highlight
          }
        }}
        {...props}
      >
        {/* Animated Sand Background */}
        <Box
          position="absolute"
          inset="0"
          zIndex="1"
          overflow="hidden"
        >
          <Box
            position="absolute"
            width="120%"
            height="300%"
            top="-100%"
            left="-10%"
            backgroundImage="url('/images/sand.jpeg')"
            backgroundSize="150px 150px"
            backgroundRepeat="repeat"
            opacity="0.4"
            sx={{
              animation: 'navSandMove1 25s infinite linear',
              '@keyframes navSandMove1': {
                '0%': { transform: 'translate(0, 0)' },
                '100%': { transform: 'translate(-75px, -25px)' }
              }
            }}
          />
          <Box
            position="absolute"
            width="120%"
            height="300%"
            top="-100%"
            left="-10%"
            backgroundImage="url('/images/sand.jpeg')"
            backgroundSize="250px 250px"
            backgroundRepeat="repeat"
            opacity="0.2"
            sx={{
              animation: 'navSandMove2 35s infinite linear reverse',
              '@keyframes navSandMove2': {
                '0%': { transform: 'translate(0, 0) scale(1.1)' },
                '100%': { transform: 'translate(50px, 15px) scale(1.1)' }
              }
            }}
          />
        </Box>
        
        <div className="glass-filter" />
        <div className="glass-overlay" />
        <div className="glass-specular" />
        
        <Container
          position="relative"
          zIndex="4"
          display="flex"
          p={2}
          maxW="container.md"
          wrap="wrap"
          align="center"
          justify="space-between"
        >
          <Flex align="center" mr={5}>
            <Heading 
              as="h1" 
              size="lg" 
              letterSpacing={'tighter'}
              color="white"
              textShadow="0 2px 4px rgba(139, 69, 19, 0.8), 0 1px 2px rgba(0,0,0,0.7)"
            >
              <Logo />
            </Heading>
          </Flex>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            flexGrow={1}
            mt={{ base: 4, md: 0 }}
            spacing={4}
          >
            <GlassLinkItem href="/works" path={path}>
              Works
            </GlassLinkItem>
            <GlassLinkItem href="/snippets" path={path}>
              Snippets
            </GlassLinkItem>
            <GlassLinkItem href="https://superclub.gg" path={path} target="_blank">
              SuperClub
            </GlassLinkItem>
            <GlassLinkItem
              target="_blank"
              href="https://github.com/shadiflo"
              path={path}
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
            >
              <IoLogoGithub />
              Source
            </GlassLinkItem>
          </Stack>

          <Box flex={1} align="right">
            <ThemeToggleButton />

            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                  color="white"
                  borderColor="rgba(255,255,255,0.3)"
                  _hover={{
                    bg: 'rgba(255,255,255,0.1)',
                    borderColor: 'rgba(255,255,255,0.5)'
                  }}
                />
                <MenuList
                  bg="rgba(0,0,0,0.8)"
                  backdropFilter="blur(12px)"
                  border="1px solid rgba(255,255,255,0.1)"
                  color="white"
                >
                  <MenuItem 
                    as={MenuLink} 
                    href="/"
                    bg="transparent"
                    _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  >
                    About
                  </MenuItem>
                  <MenuItem 
                    as={MenuLink} 
                    href="/works"
                    bg="transparent"
                    _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  >
                    Works
                  </MenuItem>
                  <MenuItem 
                    as={MenuLink} 
                    href="/snippets"
                    bg="transparent"
                    _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  >
                    Snippets
                  </MenuItem>
                  <MenuItem 
                    as={MenuLink} 
                    href="https://superclub.gg" 
                    target="_blank"
                    bg="transparent"
                    _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  >
                    SuperClub
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="https://github.com/shadiflo/"
                    bg="transparent"
                    _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                  >
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default GlassNavbar