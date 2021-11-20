import React, { useState, useEffect, useCallback } from "react";
import { GlobalStyle } from "./styles/global";
import { Header, Modal, Dashboard } from "./components";

import api from "./services/api";

const App: React.FC = () => {
  const [events, setEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const fetchEvents = useCallback(async () => {
    const response = await api.get("/events");
    setEvents(response.data);
  }, []);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <>
      <GlobalStyle />
      <Header openModal={openModal} />

      <Dashboard events={events} fetchEvents={fetchEvents} />
      {isOpen && <Modal closeModal={closeModal} fetchEvents={fetchEvents} />}
    </>
  );
};

export default App;
