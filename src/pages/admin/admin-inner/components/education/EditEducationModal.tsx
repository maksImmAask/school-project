import {
  Modal,
  TextInput,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEducationStore } from "../../../../../store/useEducationStore";
import { useEffect } from "react";

type Props = {
  opened: boolean;
  onClose: () => void;
  educationId: string | null;
};

export const EditEducationModal = ({ opened, onClose, educationId }: Props) => {
  const { getEducation, updateEducation } = useEducationStore();

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  });

  useEffect(() => {
    const load = async () => {
      if (!educationId) return;
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
    load();// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [educationId]);

  const handleSubmit = async (values: typeof form.values) => {
    if (!educationId) return;
    await updateEducation(educationId, values);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать обучение" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Название" {...form.getInputProps("title")} mb="sm" />
        <TextInput label="Описание" {...form.getInputProps("desc")} mb="sm" />
        <TextInput type="date" label="Дата" {...form.getInputProps("date")} mb="sm" />
        <TextInput type="time" label="Время начала" {...form.getInputProps("startTime")} mb="sm" />
        <TextInput type="time" label="Время окончания" {...form.getInputProps("endTime")} mb="sm" />

        <Group mt="md">
          <Button type="submit">Сохранить</Button>
        </Group>
      </form>
    </Modal>
  );
};
