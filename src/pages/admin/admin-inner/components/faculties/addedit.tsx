import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { isNotEmpty, useForm } from "@mantine/form";
import { useEffect } from "react";
import { useFacultiesStore } from "../../../../../store/useFacultyStore";

interface FacultyModalProps {
  facultyId?: string | null;
}
const INITIAL_VALUES = {
  name: { ru: "", en: "", uz: "" },
  desc: { ru: "", en: "", uz: "" },
}
export const FacultyModal = ({ facultyId }: FacultyModalProps) => {
  const { addFaculty, updateFaculty, getFaculty } = useFacultiesStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: {
      name: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
      desc: {
        ru: isNotEmpty("Обязательное поле"),
        en: isNotEmpty("Обязательное поле"),
        uz: isNotEmpty("Обязательное поле"),
      },
    },
  });

  useEffect(() => {
    if (opened && facultyId) {
      const fetchFaculty = async () => {
        const faculty = await getFaculty(facultyId);
        if (faculty) {
          form.setValues({
            name: faculty.name,
            desc: faculty.desc,
          });
        }
      };
      fetchFaculty();
    } else if (opened && !facultyId) {
      form.reset();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, facultyId, getFaculty]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (facultyId) {
      await updateFaculty(facultyId, values);
    } else {
      await addFaculty(values);
    }
    close();
  });

  return (
    <>
      <Button
        variant={facultyId ? "light" : "filled"}
        onClick={open}
      >
        {facultyId ? "Редактировать" : "Добавить факультет"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={facultyId ? "Редактировать факультет" : "Добавить факультет"}
        centered
        size="md"
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
                {facultyId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
