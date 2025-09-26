import { Flex, Box, Text, Button, Grid, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";
import { useGalleryStore } from "../../../../store/useGaleryStore";
export const Images = () => {
  const { t } = useTranslation();
  const {gallery, fetchGallery}=useGalleryStore()
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isNotebook = useMediaQuery('(min-width: 1024px)')
  const isLargeNotebook = useMediaQuery('(min-width: 1440px)')
  const sixgallery = gallery.slice(0,6)
  useEffect(()=>{
    fetchGallery()
  }, [fetchGallery])
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
                    <Grid className="box-flex">
                      {sixgallery.map((item)=>{
                        return (
                      <Grid.Col span={4}>
                        <Image h={276} src={item.img} className="img-item-section" alt="" />
                      </Grid.Col>
                        )
                      })}
                    </Grid>
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