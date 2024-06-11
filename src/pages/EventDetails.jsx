import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";

import { useEvent } from "../integrations/supabase/index.js";

const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: event, isLoading, isError } = useEvent(id);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError || !event) {
    return <Text>Event not found</Text>;
  }

  return (
    <Box p={5}>
      <Heading>{event.name}</Heading>
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