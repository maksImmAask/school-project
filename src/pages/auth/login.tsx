import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import {
  Text,
  Button,
  Paper,
  Title,
  Stack,
  Container,
  Anchor,
  Input,
  Box,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";

export const LoginPage = () => {
  const nav = useNavigate();
  const { login, loading, isAuthenticated } = useAuthStore();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email address",
      password: (value) =>
        value.length >= 5 ? null : "Password must be at least 6 characters",
    },
  });

  const handleSubmit = async (values: typeof form.values) => {
    await login(values.email, values.password);
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
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box style={{ position: "absolute", top: 20, left: 20 }}>
        <Button
          variant="light"
          onClick={() => nav("/")}
        >
          Назад
        </Button>
      </Box>

      <Paper shadow="md" radius="md" p="xl" withBorder w={400}>
        <Title order={2} ta="center" mb="lg">
          Login
        </Title>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <Stack>
            <Text>Email</Text>
            <Input
              type="email"
              className="input-auth"
              placeholder="you@example.com"
              {...form.getInputProps("email")}
            />
            <Text>Password</Text>
            <Input
              type="password"
              className="input-auth"
              placeholder="Your password"
              {...form.getInputProps("password")}
            />

            <Button fullWidth type="submit" loading={loading}>
              Login
            </Button>
          </Stack>
        </form>

        <Anchor
          component="button"
          onClick={() => nav("/register")}
          style={{ display: "block", marginTop: 20, textAlign: "center" }}
        >
          Don't have an account? Register
        </Anchor>
      </Paper>
    </Container>
  );
};
