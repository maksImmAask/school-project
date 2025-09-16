import {
  Modal,
  Button,
  TextInput,
  Stack,
  Group,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useEducationStore } from "../../../../../store/useEducationStore";
import { DateInput, TimeInput } from "@mantine/dates";

interface EducationModalProps {
  educationId?: string | null; 
}

export const EducationModal = ({ educationId }: EducationModalProps) => {
  const { addEducation, updateEducation, getEducation } = useEducationStore();

  const [opened, { open, close }] = useDisclosure(false);

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      date: "",
      startTime: "",
      endTime: "",
    },
    validate: {
      title: (value) =>
        value.trim().length < 2 ? "Название должно содержать минимум 2 символа" : null,
      desc: (value) =>
        value.trim().length < 5 ? "Описание должно содержать минимум 5 символов" : null,
      date: (value) => (!value.trim() ? "Дата обязательна" : null),
      startTime: (value) => (!value.trim() ? "Время начала обязательно" : null),
      endTime: (value) => (!value.trim() ? "Время окончания обязательно" : null),
    },
  });

  useEffect(() => {
    if (opened && educationId) {
      const fetchEducation = async () => {
        const education = await getEducation(educationId);
        if (education) {
          form.setValues({
            title: education.title,
            desc: education.desc,
            date: education.date,
            startTime: education.startTime,
            endTime: education.endTime,
          });
        }
      };
      fetchEducation();
    } else if (opened && !educationId) {
      form.reset();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, educationId, getEducation]);

  const handleSubmit = form.onSubmit(async (values) => {
    if (educationId) {
      await updateEducation(educationId, values);
    } else {
      await addEducation(values);
    }
    close();
  });

  return (
    <>
      <Button
        variant={educationId ? "light" : "filled"}
        onClick={open}
      >
        {educationId ? "Редактировать обучение" : "Добавить обучение"}
      </Button>

      <Modal
        opened={opened}
        onClose={close}
        title={educationId ? "Редактировать обучение" : "Добавить обучение"}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack>
            <TextInput
              label="Название"
              placeholder="Введите название обучения"
              {...form.getInputProps("title")}
            />

            <TextInput
              label="Описание"
              placeholder="Введите описание"
              {...form.getInputProps("desc")}
            />

            <DateInput
              label="Дата"
              {...form.getInputProps("date")}
            />

            <Group grow>
              <TimeInput
                label="Время начала"
                {...form.getInputProps("startTime")}
              />
              <TimeInput
                label="Время окончания"
                {...form.getInputProps("endTime")}
              />
            </Group>

            <Group justify="flex-end" mt="md">
              <Button variant="default" onClick={close}>
                Отмена
              </Button>
              <Button type="submit" color="blue">
                {educationId ? "Сохранить" : "Добавить"}
              </Button>
            </Group>
          </Stack>
        </form>
      </Modal>
    </>
  );
};
