import { Modal, TextInput, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useFacultiesStore } from "../../../../../store/useFacultyStore";

type Props = {
  opened: boolean;
  onClose: () => void;
  facultyId: string;
};

export const UpdateFacultyModal = ({ opened, onClose, facultyId }: Props) => {
  const { getFaculty, updateFaculty } = useFacultiesStore();

  const form = useForm({
    initialValues: {
      name: "",
      desc: "",
    },
  });

  useEffect(() => {
    if (opened && facultyId) {
      getFaculty(facultyId).then((faculty) => {
        if (faculty) {
          form.setValues({
            name: faculty.name,
            desc: faculty.desc,
          });
        }
      });
    }// eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened, facultyId]);

  const handleSubmit = async (values: typeof form.values) => {
    await updateFaculty(facultyId, values);
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Редактировать факультет" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput label="Название" {...form.getInputProps("name")} />
          <TextInput label="Описание" {...form.getInputProps("desc")} />
          <Button type="submit">Сохранить</Button>
        </Stack>
      </form>
    </Modal>
  );
};
