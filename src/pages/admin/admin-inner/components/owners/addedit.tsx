import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
  Select,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";
import { useForm, isNotEmpty } from "@mantine/form";
import { useEffect } from "react";
import { useOwnersStore } from "../../../../../store/useOwnersStore";
import { usePositionsStore } from "../../../../../store/usePositionStore";

interface OwnerModalProps {
  ownerId?: string | null;
}

const INITIAL_VALUES = {
  name: { ru: "", en: "", uz: "" },
  surname: { ru: "", en: "", uz: "" },
  positionId: "",
  desc: { ru: "", en: "", uz: "" },
};

export const OwnerModal = ({ ownerId }: OwnerModalProps) => {
  const {i18n}=useTranslation()
  const { addOwner, updateOwner, getOwner } = useOwnersStore();
  const { positions, fetchPositions } = usePositionsStore();
  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: {
      name: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      surname: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      positionId: isNotEmpty("Выберите должность"),
      desc: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
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
          form.setValues(owner); 
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
        size="lg"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Имя (ru)"
              placeholder="Введите имя на русском"
              {...form.getInputProps("name.ru")}
            />
            <TextInput
              label="Имя (en)"
              placeholder="Введите имя на английском"
              {...form.getInputProps("name.en")}
            />
            <TextInput
              label="Имя (uz)"
              placeholder="Введите имя на узбекском"
              {...form.getInputProps("name.uz")}
            />

            <TextInput
              label="Фамилия (ru)"
              placeholder="Введите фамилию на русском"
              {...form.getInputProps("surname.ru")}
            />
            <TextInput
              label="Фамилия (en)"
              placeholder="Введите фамилию на английском"
              {...form.getInputProps("surname.en")}
            />
            <TextInput
              label="Фамилия (uz)"
              placeholder="Введите фамилию на узбекском"
              {...form.getInputProps("surname.uz")}
            /><Select
                label="Должность"
                placeholder="Выберите должность"
                data={positions.map((pos) => ({
                  value: pos.id,
                  label: pos.title[i18n.language as "ru" | "en" | "uz"],
                }))}
                {...form.getInputProps("positionId")}
              />
            <TextInput
              label="Описание (ru)"
              placeholder="Введите описание на русском"
              {...form.getInputProps("desc.ru")}
            />
            <TextInput
              label="Описание (en)"
              placeholder="Введите описание на английском"
              {...form.getInputProps("desc.en")}
            />
            <TextInput
              label="Описание (uz)"
              placeholder="Введите описание на узбекском"
              {...form.getInputProps("desc.uz")}
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
