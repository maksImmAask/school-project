import {  Select, Menu, Flex, Text, Avatar } from "@mantine/core";
import { Outlet, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../store/useAuthStore";

export const AdminHeader = () => {
  const { i18n } = useTranslation();
  const { logout, user } = useAuthStore();
  const navigate = useNavigate();

  const change = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  return (
    <>
      <header
        style={{
          padding: "12px 24px",
          position: "sticky",
          border: "3px solid var(--mantine-color-blue-6)"
          ,

          top: 0,
          zIndex: 100,
        }}
      >
        <Flex align="center" justify="space-between">
          <Text
            size="xl"
            fw={600}
            onClick={() => navigate("/admin")}
          >
            Admin Panel
          </Text>

          <Flex align="center" gap="md">
            <Select
              data={[
                { value: "ru", label: "RU" },
                { value: "en", label: "EN" },
                { value: "uz", label: "UZ" },
              ]}
              value={i18n.language}
              onChange={change}
              w={90}
              radius="md"
              styles={{
                input: {
                  fontWeight: 500,
                  textAlign: "center",
                },
              }}
            />

            <Menu shadow="md" width={160} position="bottom-end">
              <Menu.Target>
                <Flex
                  align="center"
                  gap="sm"
                  style={{
                    backgroundColor: "#f9fafb",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  <Avatar size={28} color="blue">
                    {user?.name?.[0] || "U"}
                  </Avatar>
                  <Text size="sm" fw={500}>
                    {user?.name || "User"}
                  </Text>
                </Flex>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item
                  onClick={() => navigate("/")}
                >
                  Home
                </Menu.Item>
                <Menu.Item
                  color="red"
                  onClick={() => {
                    logout();
                    navigate("/");
                  }}
                >
                  Logout
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </Flex>
        </Flex>
      </header>

      <main
      >
        <Outlet />
      </main>
    </>
  );
};
