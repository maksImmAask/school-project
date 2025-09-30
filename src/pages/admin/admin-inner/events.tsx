import { useEffect } from "react";
import { Flex, Stack, Table, Text } from "@mantine/core";
import { useEventsStore } from "../../../store/useEventsStore";
import { ConfirmDeleteModal } from "../../../shared/ui/confirmDelete";
import { EventModal } from "./components/events/addedit";
import { useTranslation } from "react-i18next";

export const Events = () => {
  const { events, loading, fetchEvents, deleteEvent } = useEventsStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  const rows = events.map((event, index) => (
    <Table.Tr key={event.id}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{event.title[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>{event.place[i18n.language as "ru" | "en" | "uz"]}</Table.Td>
      <Table.Td>{event.date}</Table.Td>

      <Table.Td>
        <EventModal eventId={event.id} />
        <ConfirmDeleteModal onConfirm={() => deleteEvent(event.id)} />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack m="auto" mt={10}>
      <Flex justify="space-between" mb="md">
        <Text size="30px" fw={700}>
          Events
        </Text>

        <EventModal />
      </Flex>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Place</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {loading ? (
            <Table.Tr>
              <Table.Td colSpan={5} style={{ textAlign: "center" }}>
                Загрузка...
              </Table.Td>
            </Table.Tr>
          ) : (
            rows
          )}
        </Table.Tbody>
      </Table>
    </Stack>
  );
};
