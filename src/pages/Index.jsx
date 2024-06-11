import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, Button, Spacer, Input, Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Event 1", details: "Details about Event 1" },
    { id: 2, title: "Event 2", details: "Details about Event 2" },
  ]);

  const [newEvent, setNewEvent] = useState({ title: "", details: "" });
  const [editingEvent, setEditingEvent] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingEvent) {
      const updatedEvents = events.map((event) =>
        event.id === editingEvent.id ? { ...editingEvent, ...newEvent } : event
      );
      setEvents(updatedEvents);
      setEditingEvent(null);
    } else {
      const newEventData = { ...newEvent, id: events.length + 1 };
      setEvents([...events, newEventData]);
    }
    setNewEvent({ title: "", details: "" });
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({ title: event.title, details: event.details });
  };

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
          {/* Event Form */}
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">{editingEvent ? "Edit Event" : "Create New Event"}</Heading>
            <form onSubmit={handleFormSubmit}>
              <FormControl id="title" isRequired>
                <FormLabel>Event Title</FormLabel>
                <Input
                  type="text"
                  name="title"
                  value={newEvent.title}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl id="details" isRequired mt={4}>
                <FormLabel>Event Details</FormLabel>
                <Textarea
                  name="details"
                  value={newEvent.details}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button mt={4} colorScheme="teal" type="submit">
                {editingEvent ? "Update Event" : "Create Event"}
              </Button>
            </form>
          </Box>

          {/* Event List */}
          {events.map((event) => (
            <Box key={event.id} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{event.title}</Heading>
              <Text mt={4}>{event.details}</Text>
              <Flex mt={4}>
                <Button size="sm" colorScheme="blue" leftIcon={<FaEdit />} onClick={() => handleEditEvent(event)}>
                  Edit
                </Button>
                <Spacer />
                <Button size="sm" colorScheme="red" leftIcon={<FaTrash />}>
                  Delete
                </Button>
              </Flex>
            </Box>
          ))}
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