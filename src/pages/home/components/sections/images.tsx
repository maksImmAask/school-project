import { Flex, Box, Text, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from 'react-i18next';
export const Images = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isNotebook = useMediaQuery('(min-width: 1024px)')
  const isLargeNotebook = useMediaQuery('(min-width: 1440px)')
  return (
    <>
      <section className="images-section">
        <div className="container">
          <Box className="images-box">
            <Flex direction={'column'} className="images-flex">
              <Box className="images-header">
                <Text className="title-img">{t("home.fifth-section.photo-gallery")}</Text>
                <Button className="btn-filled">{t("home.second-section.all-btn")}</Button>
              </Box>
              <Box className="images-imgs" flex={1}>
                <Flex className="imgs-flex" direction={isLargeNotebook ? 'column' : ( isNotebook ?  'column' : (isTablet ? 'column' : isMobile ? 'row' : 'column') )} gap={'md'}>
                  <Box className="imgs-box" flex={1}>
                    <Flex className="box-flex" direction={isLargeNotebook ? 'row' : ( isNotebook ?  'row' : (isTablet ? 'row' : isMobile ? 'column' : 'row') )} gap={'md'}>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
                      </Box>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
                      </Box>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
                      </Box>
                    </Flex>
                  </Box>
                  <Box className="imgs-box" flex={1}>
                    <Flex className="box-flex" direction={isLargeNotebook ? 'row' : ( isNotebook ?  'row' : (isTablet ? 'row' : 'column') )} gap={'md'}>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
                      </Box>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
                      </Box>
                      <Box className="img-item" flex={1}>
                        <img src="" className="img-item-section" alt="" />
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