import { Box, Container, Flex, Heading, Text, VStack, Button, Spacer } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="brand.700" color="white" padding="1.5rem">
        <Heading size="lg">Events Management</Heading>
        <Spacer />
        <Button colorScheme="teal" variant="outline" leftIcon={<FaPlus />}>
          Add Event
        </Button>
      </Flex>

      {/* Main Content Area */}
      <Container maxW="container.md" py={10}>
        <VStack spacing={4} align="stretch">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Event 1</Heading>
            <Text mt={4}>Details about Event 1</Text>
            <Flex mt={4}>
              <Button size="sm" colorScheme="blue" leftIcon={<FaEdit />}>
                Edit
              </Button>
              <Spacer />
              <Button size="sm" colorScheme="red" leftIcon={<FaTrash />}>
                Delete
              </Button>
            </Flex>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Event 2</Heading>
            <Text mt={4}>Details about Event 2</Text>
            <Flex mt={4}>
              <Button size="sm" colorScheme="blue" leftIcon={<FaEdit />}>
                Edit
              </Button>
              <Spacer />
              <Button size="sm" colorScheme="red" leftIcon={<FaTrash />}>
                Delete
              </Button>
            </Flex>
          </Box>
          {/* Add more event boxes as needed */}
        </VStack>
      </Container>

      {/* Footer */}
      <Flex as="footer" bg="brand.700" color="white" padding="1.5rem" justifyContent="center">
        <Text>© 2023 Events Management. All rights reserved.</Text>
      </Flex>
    </Box>
  );
};

export default Index;