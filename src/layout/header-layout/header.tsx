import { Flex, Box, Button, Select , Menu} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {  BinanceCoin, HamburgerMenu } from "iconsax-reactjs";
import { useTranslation } from "react-i18next";
import { useAuthStore } from "../../store/useAuthStore";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const { user, isAuthenticated, logout } = useAuthStore();
  const change = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
      <Flex className="header-flex" gap={'md'}>
        <Box className="burger-menu" flex={0.2}>
          <Button className="btn btn-burger">
            <HamburgerMenu size="32" color="black" />
          </Button>
        </Box>

        <Box className="box" flex={0.1}>
          <BinanceCoin size="32" color="var(--mantine-color-blue-6)" />
        </Box>

        <Box className="box nav" flex={7.7}>
          <Flex>
            <Button className="btn-page" flex={1} onClick={() => navigate("/")}>
              {t("header.home")}
            </Button>
            <Button className="btn-page" flex={1} onClick={() => navigate("/about")}>
              {t("header.about")}
            </Button>
            <Button className="btn-page" flex={1} onClick={() => navigate("/study")}>
              {t("header.learn")}
            </Button>
            <Button className="btn-page" flex={1} onClick={() => navigate("/rules")}>
              {t("header.rules")}
            </Button>
            <Button className="btn-page" flex={1} onClick={() => navigate("/news")}>
              {t("header.news")}
            </Button>
            <Button className="btn-page" flex={1} onClick={() => navigate("/helper")}>
              {t("header.support")}
            </Button>
          </Flex>
        </Box>
        <Box className="box lang" flex={1}>
          <Select
            placeholder={i18n.language}
            data={[
              { value: "ru", label: "RU" },
              { value: "en", label: "EN" },
              { value: "uz", label: "UZ" }
            ]}
            value={i18n.language}
            onChange={change}
          />
        </Box>

<Box className="box" flex={0.5}>
            {isAuthenticated ? (
              <Menu shadow="md" width={150}>
                <Menu.Target>
                  <Button variant="light">{user?.name}</Button>
                </Menu.Target>

                <Menu.Dropdown>
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
            ) : (
              <Button className="btn btn-login" onClick={() => navigate("/login")}>
                {t("header.login")}
              </Button>
            )}
</Box>
      </Flex>
    </div>
    </header>
  );
};