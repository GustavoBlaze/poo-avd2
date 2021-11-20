import React from "react";

import { Heading5, Text, Button, RedButton } from "..";
import api from "../../services/api";

import { Container, Title, EventCard, EventList, DeleteButton } from "./styles";

type IEvent = {
  id: string;
  nomeevento: string;
  horario: string;
  diasemana: string;
  local: string;
  like?: number;
  dislike?: number;
};

type IDashboard = {
  events: IEvent[];
};

const Dashboard: React.FC<IDashboard> = ({ events = [], fetchEvents }) => {
  function handleDelete(id: string) {
    api.delete(`/events/${id}`).then(fetchEvents);
  }

  function handleLike(id: string) {
    api.post(`/events/like/${id}`).then(fetchEvents);
  }

  function handleDislike(id: string) {
    api.post(`/events/dislike/${id}`).then(fetchEvents);
  }

  return (
    <Container>
      <Title>Eventos</Title>

      {events.length === 0 && <Text>Nenhum evento cadastrado</Text>}

      <EventList>
        {events.map((event) => (
          <EventCard key={event.id}>
            <DeleteButton
              onClick={() => {
                handleDelete(event.id);
              }}
            >
              Excluir
            </DeleteButton>
            <Heading5>{event.nomeevento}</Heading5>
            <Text>
              <strong>Dia: </strong>
              {event.diasemana}
            </Text>

            <Text>
              <strong>Horario: </strong>
              {event.horario}
            </Text>

            <Text>
              <strong>Local: </strong>
              {event.local}
            </Text>

            <Button onClick={() => handleLike(event.id)}>
              Curtir - {event.like ? event.like : 0}
            </Button>
            <RedButton onClick={() => handleDislike(event.id)}>
              Descurtir - {event.dislike ? event.dislike : 0}
            </RedButton>
          </EventCard>
        ))}
      </EventList>
    </Container>
  );
};

export { Dashboard };
