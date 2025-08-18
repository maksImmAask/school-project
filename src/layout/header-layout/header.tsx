import { Flex, Box,  Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { SearchNormal1, LanguageSquare, BinanceCoin, HamburgerMenu } from 'iconsax-reactjs';

export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width: 480px)');

  return (
    <header className="header">
      <Flex className="header-flex">
        <Box className="burger-menu" flex={0.2}>
          <Button className="btn btn-burger">
            <HamburgerMenu size="32" color="black"/>
          </Button>
        </Box>
        <Box className="box" flex={0.1}>
          <BinanceCoin
          size="32"
          color="var(--mantine-color-blue-6)"
          />
        </Box>

        <Box className="box nav" flex={7.7}>
          <Flex >
            <Button className="btn-page" flex={1} onClick={() => navigate("/")}>Home</Button>
            <Button className="btn-page" flex={1}  onClick={() => navigate("/about")}>О Школе</Button>
            <Button className="btn-page" flex={1}  onClick={() => navigate("/study")}>Обучение</Button>
            <Button className="btn-page" flex={1}  onClick={() => navigate("/rules")}>Правила</Button>
            <Button className="btn-page" flex={1}  onClick={() => navigate("/news")}>Новости</Button>
            <Button  className="btn-page" flex={1} onClick={() => navigate("/helper")}>Поддержка</Button>
          </Flex>
        </Box>

        <Box className="box" flex={2}>
          <Button className="btn">
            <SearchNormal1
            size="32"
            color="var(--mantine-color-blue-6)"
            />
          </Button>
          <Button className="btn">
            <LanguageSquare
            size="32"
            color="var(--mantine-color-blue-6)"
            />
            {!isMobile ? 'Язык' : ''}
          </Button>
        </Box>
        <Box className="box" flex={1}>
          <Button className="btn-contact" >
            Связаться с нами
          </Button>
        </Box>
      </Flex>
    </header>
  );
};
