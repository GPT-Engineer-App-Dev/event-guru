import { Box, Heading, Text, Button, Flex, Spacer } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useEvent } from "../integrations/supabase/index.js";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: event, isLoading, error } = useEvent(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error loading event details</Text>;
  }

  if (!event) {
    return <Text>Event not found</Text>;
  }

  return (
    <Box p={5}>
      <Heading>{event.name}</Heading>
      <Text mt={4}>{event.description}</Text>
      <Flex mt={4}>
        <Button colorScheme="teal" onClick={() => navigate("/")}>
          Back to Events
        </Button>
      </Flex>
    </Box>
  );
};

export default EventDetails;