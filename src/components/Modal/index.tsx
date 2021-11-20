import React, { useCallback } from "react";

import { Input, Select, Button } from "..";

import { Overlay, Content, Title, InputList, CloseButton } from "./styles";

import api from "../../services/api";

function Modal({ closeModal, fetchEvents }) {
  function handleSubmit(event) {
    event.preventDefault();
    const { name, place, day, hour } = event.target;

    const data = {
      nomeevento: name.value,
      local: place.value,
      diasemana: day.value,
      horario: hour.value,
    };

    event.target.reset();
    closeModal();
    api.post("/events", data).then(fetchEvents);
  }

  return (
    <Overlay>
      <Content as="form" onSubmit={handleSubmit}>
        <Title>Novo evento</Title>

        <CloseButton onClick={closeModal} type="button">
          Fechar
        </CloseButton>
        <InputList>
          <Input
            name="name"
            required
            label="Nome"
            placeholder="Ex: Festa Julina"
          />

          <Input
            name="place"
            required
            label="Local"
            placeholder="Ex: Ilha sao joão"
          />
          <Select name="day" required label="Dia da semana">
            <option value="Domingo">Domingo</option>
            <option value="Segunda-feira">Segunda-feira</option>
            <option value="Terça-feira">Terça-feira</option>
            <option value="Quarta-feira">Quarta-feira</option>
            <option value="Quinta-feira">Quinta-feira</option>
            <option value="Sexta-feira">Sexta-feira</option>
          </Select>
          <Input
            name="hour"
            type="time"
            required
            label="Horário"
            placeholder="Ex: 18:00"
          />
        </InputList>

        <Button type="submit">Salvar</Button>
      </Content>
    </Overlay>
  );
}

export { Modal };
