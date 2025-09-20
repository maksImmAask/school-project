import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty} from "@mantine/form";
import { useEffect } from "react";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface PositionModalProps {
  positionId?: string | null;
}

export const PositionModal = ({ positionId }: PositionModalProps) => {
  const { addPosition, updatePosition, getPositionById } = usePositionsStore();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: {
        ru: "",
        en: "",
        uz: "",
      },
    },
    validate: {
      title: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
    },
  });

  useEffect(() => {
    if (opened && positionId) {
      const fetchPosition = async () => {
        const position = await getPositionById(positionId);
        if (position) {
          form.setValues({
            title: {
              ru: position.title.ru,
              en: position.title.en,
              uz: position.title.uz,
            },
          });
        }
      };
      fetchPosition();
    } else if (opened && !positionId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, positionId, getPositionById]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (positionId) {
      await updatePosition(positionId, values.title);
    } else {
      await addPosition(values.title);
    }
    close();
  });

  return (
    <>
      <Button
        variant={positionId ? "light" : "filled"}
        onClick={open}
      >
        {positionId ? "Редактировать" : "Добавить должность"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={positionId ? "Редактировать должность" : "Добавить должность"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Название (Русский)"
              placeholder="Введите название на русском"
              {...form.getInputProps("title.ru")}
            />
            <TextInput
              label="Название (Английский)"
              placeholder="Введите название на английском"
              {...form.getInputProps("title.en")}
            />
            <TextInput
              label="Название (Узбекский)"
              placeholder="Введите название на узбекском"
              {...form.getInputProps("title.uz")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {positionId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
