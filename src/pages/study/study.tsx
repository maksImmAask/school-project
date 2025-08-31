import { Box, Flex, NavLink, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";

export const Study = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(min-width: 400px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <>
     <section className="study-section">
      <div className="container">
        <Box className="study-box">
          <Flex className="study-flex" direction='column' gap={'20px'}>
            <Text size="40px" fw={700}>{t("study.title")}</Text>
            <Text>{t("study.desc")}</Text>
            <Box className="item-study" flex={1}>
              <Flex className="item-flex-study" direction={'column'}>
                <Text size="30px">{t("study.extracurricular")}</Text>
                <Box flex={1}>
                  <Flex direction={isDesktop ? 'column' : isTablet ? 'row' : isMobile ? 'column' : 'row'}>
                    <Box>
                      <Flex direction={isDesktop ? 'row' : isTablet ? 'column' : isMobile ? 'column' : 'row'}>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.chess.title")}</Text>
                          <Text>{t("study.clubs.chess.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.chess.schedule")} />
                        </Box>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.music.title")}</Text>
                          <Text>{t("study.clubs.music.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.music.schedule")} />
                        </Box>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.art.title")}</Text>
                          <Text>{t("study.clubs.art.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.art.schedule")} />
                        </Box>
                      </Flex>
                    </Box>
                    <Box>
                      <Flex direction={isDesktop ? 'row' : isTablet ? 'column' : isMobile ? 'column' : 'row'}>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.sports.title")}</Text>
                          <Text>{t("study.clubs.sports.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.sports.schedule")} />
                        </Box>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.theater.title")}</Text>
                          <Text>{t("study.clubs.theater.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.theater.schedule")} />
                        </Box>
                        <Box className="item-study-box" flex={1}>
                          <Text size="20px" fw={700}>{t("study.clubs.science.title")}</Text>
                          <Text>{t("study.clubs.science.desc")}</Text>
                          <NavLink href="#" label={t("study.clubs.science.schedule")} />
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </div>
     </section>
    </>
  );
}
