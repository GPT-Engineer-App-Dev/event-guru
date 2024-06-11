import { Box, Heading, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <Box p={5}>
      <Heading>{event.title}</Heading>
      <Text mt={4}>{event.details}</Text>
      <Flex mt={4}>
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Back to Events
        </Button>
      </Flex>
    </Box>
  );
};

export default EventDetails;