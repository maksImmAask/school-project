import { Flex, Box, Button, Select } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { SearchNormal1, BinanceCoin, HamburgerMenu } from "iconsax-reactjs";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const change = (value: string | null) => {
    if (value) {
      i18n.changeLanguage(value);
    }
  };

  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="container">
      <Flex className="header-flex">
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

        <Box className="box" flex={1}>
          <Button className="btn">
            <SearchNormal1 size="32" color="var(--mantine-color-blue-6)" />
          </Button>
        </Box>
        <Box className="box lang" flex={1}>

          <Select
          className="lang-sel"
            placeholder={i18n.language}
            data={[
              { value: "ru", label: "ru" },
              { value: "en", label: "en" },
              { value: "uz", label: "uz" }
            ]}
            value={i18n.language}
            onChange={change}
          />
        </Box>

        <Box className="box" flex={1}>
          <Button className="btn-contact">{t("header.contactus")}</Button>
        </Box>
      </Flex>
    </div>
    </header>
  );
};
