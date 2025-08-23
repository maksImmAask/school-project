import {Box, Flex, Text } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useTranslation } from 'react-i18next';
export const Teachers = () => {
  const { t} = useTranslation()
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (<>

        <section className="teachers">
          <div className="container">
            <Box className="teachers-box">
              <Flex direction={'column'} className="teachers-flex">
                <Box className="teachers-header " flex={isTablet ? 0.1 : (isMobile ? 0.1 : 1)}>
                  <Text className="title-teachers">{t("header.about")}</Text>
                  <Text className="description">{t("home.third-section.teachers-desc")}</Text>
                </Box>
                <Box className="teachers-items" flex={2}>
                  <Flex direction={isTablet ? 'row' : 'column'} className="teachers-items-flexs" gap={'md'}>
                    <Box className="teachers-item-teacher" flex={1}>
                      <Flex className="item-teacher-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
                        <Box className="teacher" flex={1}>
                          <Flex direction={'column'} className="teacher-item-flex">
                            <Box flex={3}>
                              <img src="https://avatars.mds.yandex.net/i?id=84ff0c141fd7bb3fca7eb74369b6fcef57c4dcc8-8193383-images-thumbs&n=13" alt="" className="img-news" />
                            </Box>
                            <Box flex={1} className="teacher-name">
                              <Text className="teacher-title">{t("home.third-section.teacher-name1")}</Text>
                            </Box>
                          </Flex>
                        </Box>
                        <Box className="teacher" flex={1}>
                          <Flex direction={'column'} className="teacher-item-flex">
                            <Box flex={3}><img src="https://avatars.mds.yandex.net/i?id=fbc1e51d0e763872789c290b7ddde2d417060d20b0863933-11402455-images-thumbs&n=13" alt="" className="img-news" /></Box>
                            <Box flex={1} className="teacher-name"> <Text className="teacher-title">{t("home.third-section.teacher-name2")}</Text></Box>
                          </Flex>
                        </Box>
                      </Flex>
                    </Box>
                    <Box className="teachers-item-teacher" flex={1}>
                      <Flex className="item-teacher-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
                        <Box className="teacher" flex={1}>
                          <Flex direction={'column'} className="teacher-item-flex">
                            <Box flex={3}>
                              <img src="https://avatars.mds.yandex.net/i?id=c4da3f6dae7fc300619e3e90265241a3a55f54ec-5597882-images-thumbs&n=13" alt="" className="img-news" />
                            </Box>
                            <Box flex={1} className="teacher-name">
                              <Text className="teacher-title">{t("home.third-section.teacher-name3")}</Text>
                            </Box>
                          </Flex>
                        </Box>
                        <Box className="teacher" flex={1}>
                          <Flex direction={'column'} className="teacher-item-flex">
                            <Box flex={3}><img src="https://avatars.mds.yandex.net/i?id=fd3cc579fb30a54b75c3937d8d455e4c8b5dcbb6-5014298-images-thumbs&n=13" alt="" className="img-news" /></Box>
                            <Box flex={1} className="teacher-name">
                              <Text className="teacher-title">{t("home.third-section.teacher-name4")}</Text>
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
  </>)
}