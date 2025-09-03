import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import {
  TextInput,
  PasswordInput,
  NumberInput,
  Button,
  Paper,
  Title,
  Stack,
  Container,
  Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export const RegisterPage = () => {
  const nav = useNavigate();
  const { register, loading, isAuthenticated } = useAuthStore();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: undefined as number | undefined,
      phone: "",
    },

    validate: {
      name: (value) => (value.length > 0 ? null : "Name is required"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length >= 6 ? null : "Password must be at least 6 characters",
      age: (value) =>
        value !== undefined && value > 0 ? null : "Age must be a positive number",
      phone: (value) =>
        value.length >= 5 ? null : "Phone number must be at least 5 digits",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    await register({
      name: values.name,
      email: values.email,
      password: values.password,
      age: values.age ?? 0,
      phone: values.phone,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      nav("/");
    }
  }, [isAuthenticated, nav]);

  return (
    <Container
      fluid
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper shadow="md" radius="md" p="xl" withBorder w={400}>
        <Title order={2} ta="center" mb="lg">
          Register
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <TextInput
              label="Name"
              placeholder="Your name"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="you@example.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
            />
            <NumberInput
              label="Age"
              placeholder="Your age"
              {...form.getInputProps("age")}
              min={1}
            />
            <TextInput
              label="Phone"
              placeholder="+998..."
              {...form.getInputProps("phone")}
            />
            <Button fullWidth type="submit" loading={loading}>
              Register
            </Button>
          </Stack>
        </form>

        <Anchor
          component="button"
          onClick={() => nav("/login")}
          style={{ display: "block", marginTop: 20, textAlign: "center" }}
        >
          Already have an account? Login
        </Anchor>
      </Paper>
    </Container>
  );
};
