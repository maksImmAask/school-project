import { Modal, TextInput, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useFacultiesStore } from "../../../../../store/useFacultyStore";

type Props = {
  opened: boolean;
  onClose: () => void;
};

export const CreateFacultyModal = ({ opened, onClose }: Props) => {
  const { addFaculty } = useFacultiesStore();

  const form = useForm({
    initialValues: {
      name: "", 
      desc: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Название слишком короткое" : null,
      desc: (value) =>
        value.length < 5 ? "Описание слишком короткое" : null,
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    await addFaculty(values);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Добавить факультет" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Название"
            placeholder="Введите название"
            {...form.getInputProps("name")} 
          />
          <TextInput
            label="Описание"
            placeholder="Введите описание"
            {...form.getInputProps("desc")}
          />
          <Button type="submit">Создать</Button>
        </Stack>
      </form>
    </Modal>
  );
};
