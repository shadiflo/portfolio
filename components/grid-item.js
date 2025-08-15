import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import GlassCard from './glass-card'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" display="flex" justifyContent="center">
    <GlassCard
      title={title}
      description={children}
      href={href}
      width="320px"
      height="240px"
    >
      {thumbnail && (
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="1"
          opacity="0.3"
        >
          <Image
            src={thumbnail}
            alt={title}
            fill
            style={{ 
              objectFit: 'cover',
              borderRadius: '20px'
            }}
            loading="lazy"
          />
        </Box>
      )}
    </GlassCard>
  </Box>
)

export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" display="flex" justifyContent="center">
    <NextLink href={`/${category}/${id}`} scroll={false} passHref>
      <GlassCard
        title={title}
        description={children}
        width="320px"
        height="240px"
        as="a"
      >
        {thumbnail && (
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="1"
            opacity="0.3"
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              style={{ 
                objectFit: 'cover',
                borderRadius: '20px'
              }}
            />
          </Box>
        )}
      </GlassCard>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
