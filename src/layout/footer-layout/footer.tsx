import { Flex, Box, Text, Button, Input } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { BinanceCoin, Instagram, Facebook, Twitch } from "iconsax-reactjs";
import { useTranslation } from 'react-i18next';
export const Footer = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isNotebook = useMediaQuery('(min-width: 1024px)')
  const isLargeNotebook = useMediaQuery('(min-width: 1440px)')
  return (
    <>
      <footer className="footer">
        <div className="container">
          <Box className="box-footer">
          <Flex className="footer-flex" gap={'lg'} direction={isLargeNotebook ? 'row' : (isNotebook ? 'row' : (isTablet ? 'row' :  (isMobile ? 'column' : 'row')))}>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <BinanceCoin
                  size="32"
                  color="var(--mantine-color-blue-6)"
                  />
                </Box>
                <Box flex={4} className="footer-links">
                  <Text className="description">{t("home.footer.footer-desc")}</Text>
                </Box>
                <Box className="footer-icons" flex={1}>
                  <Instagram size="32" color="var(--mantine-color-blue-6)"/>
                  <Facebook size="32" color="var(--mantine-color-blue-6)"/>
                  <Twitch size='32' color="var(--mantine-color-blue-6)"/>
                </Box>
              </Flex>
            </Box>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <Text className="title">{t("home.footer.footer-links")}</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'} gap={'lg'}>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("header.about")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("header.learn")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("header.news")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("header.support")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("header.rules")}</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <Text className="title">{t("header.contactus")}</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'} gap={'lg'}>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("home.footer.adress")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("home.footer.phone-number")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">{t("home.footer.email")}</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                    </Box>
                    <Box flex={1} className="links-box">
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <Text className="title">{t("home.footer.newsletter")}</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'}>
                    <Box className="links-box" flex={1}>
                      <Text className="description">{t("home.footer.news-desc")}</Text>
                    </Box>
                    <Box className="links-box" flex={1}>
                      <Flex direction={'column'} gap={'10px'}>
                      <Input variant="filled" size="md" radius="xl" placeholder="Email" />
                      <Button type="submit" className="btn-filled" fullWidth>{t("home.footer.subsc")}</Button>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
          </Box>
        </div>
      </footer>
    </>
  )
}