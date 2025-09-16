import {
  Modal,
  Button,
  TextInput,
  Textarea,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useFacultiesStore } from "../../../../../store/useFacultyStore";

interface FacultyModalProps {
  facultyId?: string | null;
}

export const FacultyModal = ({ facultyId }: FacultyModalProps) => {
  const { addFaculty, updateFaculty, getFaculty } = useFacultiesStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      name: "",
      desc: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 ? "Название должно содержать минимум 2 символа" : null,
      desc: (value) =>
        value.trim().length < 5 ? "Описание должно содержать минимум 5 символов" : null,
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
              label="Название факультета"
              placeholder="Введите название"
              {...form.getInputProps("name")}
            />

            <Textarea
              label="Описание"
              placeholder="Введите описание факультета"
              autosize
              minRows={3}
              {...form.getInputProps("desc")}
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
