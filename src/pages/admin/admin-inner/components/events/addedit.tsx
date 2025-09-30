import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty } from "@mantine/form";
import { useEffect } from "react";
import { useEventsStore } from "../../../../../store/useEventsStore";
import { DateInput } from "@mantine/dates";

interface EventModalProps {
  eventId?: string | null;
}

const INITIAL_VALUES = {
  title: { ru: "", en: "", uz: "" },
  date: "",
  place: { ru: "", en: "", uz: "" }
};

export const EventModal = ({ eventId }: EventModalProps) => {
  const { addEvent, updateEvent, getEvent } = useEventsStore();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: {
      title: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      date: isNotEmpty("Укажите дату события"),
      place: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      }
    },
  });

  useEffect(() => {
    if (opened && eventId) {
      const fetchEvent = async () => {
        const event = await getEvent(eventId);
        if (event) {
          form.setValues(event);
        }
      };
      fetchEvent();
    } else if (opened && !eventId) {
      form.reset();
    } // eslint-disable-next-line
  }, [opened, eventId]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (eventId) {
      await updateEvent(eventId, values);
    } else {
      await addEvent(values);
    }
    close();
  });

  return (
    <>
      <Button variant={eventId ? "light" : "filled"} onClick={open}>
        {eventId ? "Редактировать" : "Добавить событие"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={eventId ? "Редактировать событие" : "Добавить событие"}
        centered
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Название (ru)"
              placeholder="Введите название на русском"
              {...form.getInputProps("title.ru")}
            />
            <TextInput
              label="Название (en)"
              placeholder="Введите название на английском"
              {...form.getInputProps("title.en")}
            />
            <TextInput
              label="Название (uz)"
              placeholder="Введите название на узбекском"
              {...form.getInputProps("title.uz")}
            />

            <DateInput
              label="Дата события"
              placeholder="Введите дату (например, 2025-10-01)"
              {...form.getInputProps("date")}
            />

            <TextInput
              label="Место проведения (ru)"
              placeholder="Введите место на русском"
              {...form.getInputProps("place.ru")}
            />
            <TextInput
              label="Место проведения (en)"
              placeholder="Введите место на английском"
              {...form.getInputProps("place.en")}
            />
            <TextInput
              label="Место проведения (uz)"
              placeholder="Введите место на узбекском"
              {...form.getInputProps("place.uz")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {eventId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
