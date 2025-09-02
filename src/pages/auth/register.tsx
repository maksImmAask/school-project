import { useState } from "react";
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
  NavLink,
} from "@mantine/core";

export const RegisterPage = () => {
  const nav = useNavigate()
  const { register, loading , isAuthenticated} = useAuthStore();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState<number | undefined>(undefined);
  const [phone, setPhone] = useState("");

  const handleSubmit = async () => {
    if (!name || !email || !password) return;
    await register({ name, email, password, age: age ?? 0, phone });
    nav('/')
  };
  if(isAuthenticated) {
    nav('/')
  }

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
        <Stack>
          <TextInput
            label="Name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
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
          <NumberInput
            label="Age"
            placeholder="Your age"
            value={age}
            onChange={(value) => setAge(typeof value === "number" ? value : undefined)}
          />
          <TextInput
            label="Phone"
            placeholder="+998..."
            value={phone}
            onChange={(e) => setPhone(e.currentTarget.value)}
          />
          <Button fullWidth loading={loading} onClick={handleSubmit}>
            Register
          </Button>
        </Stack>
        <NavLink 
          label="Already have an account? Login"
          href="/login"
          style={{ marginTop: 20, textAlign: "center" }}
        />
      </Paper>
    </Container>
  );
};
