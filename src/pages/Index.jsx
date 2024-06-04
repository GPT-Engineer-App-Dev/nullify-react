import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* Navigation Bar */}
      <Box as="nav" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Text fontSize="xl" fontWeight="bold">My Website</Text>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Flex as="main" flex="1" py={8} bg="gray.50">
        <Container maxW="container.md" centerContent>
          <VStack spacing={4}>
            <Text fontSize="2xl">Welcome to My Website</Text>
            <Text>This is a simple, responsive layout using Chakra UI.</Text>
          </VStack>
        </Container>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="blue.500" color="white" py={4}>
        <Container maxW="container.md">
          <Text textAlign="center">&copy; 2023 My Website. All rights reserved.</Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default Index;