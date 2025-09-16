import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
  Select,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useOwnersStore } from "../../../../../store/useOwnersStore";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface OwnerModalProps {
  ownerId?: string | null;
}

export const OwnerModal = ({ ownerId }: OwnerModalProps) => {
  const { addOwner, updateOwner, getOwner } = useOwnersStore();
  const { positions, fetchPositions } = usePositionsStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      surname: "",
      positionId: "",
      desc: "",
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? "Минимум 2 символа" : null),
      surname: (value) => (value.trim().length < 2 ? "Минимум 2 символа" : null),
      positionId: (value) => (!value ? "Выберите должность" : null),
    },
  });

  useEffect(() => {
    if (opened) {
      fetchPositions();
    }
  }, [opened, fetchPositions]);
  useEffect(() => {
    if (opened && ownerId) {
      const fetchOwner = async () => {
        const owner = await getOwner(ownerId);
        if (owner) {
          form.setValues({
            name: owner.name,
            surname: owner.surname,
            positionId: owner.positionId,
            desc: owner.desc,
          });
        }
      };
      fetchOwner();
    } else if (opened && !ownerId) {
      form.reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, ownerId]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (ownerId) {
      await updateOwner(ownerId, values);
    } else {
      await addOwner(values);
    }
    close();
  });

  return (
    <>
      <Button variant={ownerId ? "light" : "filled"} onClick={open}>
        {ownerId ? "Редактировать" : "Добавить владельца"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={ownerId ? "Редактировать владельца" : "Добавить владельца"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Имя"
              placeholder="Введите имя"
              {...form.getInputProps("name")}
            />

            <TextInput
              label="Фамилия"
              placeholder="Введите фамилию"
              {...form.getInputProps("surname")}
            />

            <Select
              label="Должность"
              placeholder="Выберите должность"
              data={positions.map((pos) => ({
                value: pos.id,
                label: pos.title,
              }))}
              {...form.getInputProps("positionId")}
            />

            <TextInput
              label="Описание"
              placeholder="Введите описание"
              {...form.getInputProps("desc")}
            />

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {ownerId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
