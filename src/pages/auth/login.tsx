import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Stack,
  Container,
  NavLink,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const nav = useNavigate()
  const { login, loading , isAuthenticated} = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    await login(email, password);
    nav('/')
  }; 
  if(isAuthenticated) {
    nav('/')
  }

  return (
    <Container
      fluid
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        w={400}
      >
        <Title order={2} ta="center" mb="lg">
          Login
        </Title>
        <Stack>
          <TextInput
            label="Email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button fullWidth loading={loading} onClick={handleSubmit}>
            Login
          </Button>
        </Stack>
        <NavLink
          label="Don't have an account? Register"
          href="/register"
          style={{ marginTop: 20, textAlign: "center" }}
        />
      </Paper>
    </Container>
  );
};
