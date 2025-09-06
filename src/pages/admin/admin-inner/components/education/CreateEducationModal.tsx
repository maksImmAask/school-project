import {
  Modal,
  TextInput,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEducationStore } from "../../../../../store/useEducationStore";

type Props = {
  opened: boolean;
  onClose: () => void;
};

export const CreateEducationModal = ({ opened, onClose }: Props) => {
  const { addEducation } = useEducationStore();

  const form = useForm({
    initialValues: {
      title: "",
      desc: "",
      date: "",
      startTime: "",
      endTime: "",
    },
    validate: {
      title: (value) => (value.length < 2 ? "Минимум 2 символа" : null),
      date: (value) => (!value ? "Укажите дату" : null),
      startTime: (value) => (!value ? "Укажите время начала" : null),
      endTime: (value) => (!value ? "Укажите время окончания" : null),
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    await addEducation(values);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить обучение" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Название" {...form.getInputProps("title")} mb="sm" />
        <TextInput label="Описание" {...form.getInputProps("desc")} mb="sm" />
        <TextInput type="date" label="Дата" {...form.getInputProps("date")} mb="sm" />
        <TextInput type="time" label="Время начала" {...form.getInputProps("startTime")} mb="sm" />
        <TextInput type="time" label="Время окончания" {...form.getInputProps("endTime")} mb="sm" />

        <Group mt="md">
          <Button type="submit">Создать</Button>
        </Group>
      </form>
    </Modal>
  );
};
