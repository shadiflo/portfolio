import { Container, Heading, SimpleGrid, Box, Code, Text } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import GlassCard from '../../components/glass-card'

const NodeJSSnippets = () => (
  <Layout title="Node.js & Backend">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Node.js & Backend Utilities
      </Heading>

      <SimpleGrid columns={[1]} gap={6}>
        <Section>
          <GlassCard
            title="Express Rate Limiter"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Simple rate limiting middleware for Express.js
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="blackAlpha.300"
                fontSize="xs"
                overflow="auto"
              >
{`const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Usage
app.use('/api/', limiter);`}
              </Code>
            </Box>
          </GlassCard>
        </Section>

        <Section delay={0.1}>
          <GlassCard
            title="Async Error Handler"
            width="100%"
            height="auto"
            minHeight="200px"
          >
            <Box textAlign="left" width="100%" mt={4}>
              <Text mb={3} fontSize="sm" opacity="0.9">
                Wrapper for handling async errors in Express routes
              </Text>
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                borderRadius="md"
                bg="blackAlpha.300"
                fontSize="xs"
                overflow="auto"
              >
{`const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

// Usage
app.get('/api/users', asyncHandler(async (req, res) => {
  const users = await User.find();
  res.json(users);
}));

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});`}
              </Code>
            </Box>
          </GlassCard>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default NodeJSSnippets
export { getServerSideProps } from '../../components/chakra'