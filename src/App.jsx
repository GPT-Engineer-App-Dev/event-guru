import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import EventDetails from "./pages/EventDetails.jsx";
import Index from "./pages/Index.jsx";

function App() {
  const [events, setEvents] = useState([
    { id: 1, title: "Event 1", details: "Details about Event 1" },
    { id: 2, title: "Event 2", details: "Details about Event 2" },
  ]);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index events={events} setEvents={setEvents} />} />
        <Route path="/event/:id" element={<EventDetails events={events} />} />
      </Routes>
    </Router>
  );
}

export default App;
