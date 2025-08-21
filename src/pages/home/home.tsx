import { Flex, Box, Text, Button, Input } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar, Blogger, Profile2User, Book, BinanceCoin, Instagram, Facebook, Twitch } from "iconsax-reactjs";
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(min-width: 480px)');
  const isLargeNotebook = useMediaQuery('(min-width: 1440px)')
  const isNotebook = useMediaQuery('(min-width: 1024px)')
  return (
    <>
      <section className="section">
        <div className="container">
          <Box className="home-box">
            <Flex className="home-flex" justify="center" align="center" gap='md' >

              <Box flex={1} className="bg-img">
                <img className="img-main" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYpwT22GwVvmr7ftNyToExO9ajQkD8t47EQ&s" alt="" />
              </Box>
              <Box flex={1}>
                <Flex direction={'column'}>
                  <Box>
                    <Text className="title title-home" size="60px" fw={900} c="blue">
                      {t("home.first-section.welcome")}
                    </Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text>{t("home.first-section.welcome-description")}</Text>
                    </Box>
                    <Box>
                      <Flex gap="md" justify="flex-start" align="center" mt="md">
                      <Button>{t("home.first-section.contact-btn")}</Button>
                      <Button variant="outline">{t("home.first-section.more-btn")}</Button>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
      <section className="last-news">
        <div className="container">
          <Box className="news-box">
            <Flex className="news-flex" direction={isLargeNotebook ? 'row' : ( isNotebook ? 'row':'column')} justify="space-between" align="center" gap="md">
              <Box flex={2} className="news-content">
                <Flex className="news-content-flex" direction={'column'}>
                  <Box flex={0.1} className="header-news">
                    <Flex>
                    <Box flex={3}>
                      <Text className="title-news" size="30px" fw={700} c="blue">
                        {t("home.second-section.last-news")}
                      </Text>
                    </Box>
                    <Box flex={1} ></Box>
                    <Box flex={1}><Button className="btn-all">{t("home.second-section.all-btn")}</Button></Box>
                    </Flex>
                  </Box>
                  <Box flex={1} className="news-item-box">
                    <Flex direction={'column'} className="news-item-flex" gap="md">
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex" direction={isMobile ? 'column' : 'row'}>
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.news-1")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-1-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex" direction={isMobile ? 'column' : 'row'}>
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date2")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.new-2")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-2-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="news-item">
                        <Flex className="news-text-flex" direction={isMobile ? 'column' : 'row'}>
                          <Box flex={1} >Тут будет картина</Box>
                          <Box flex={2}>
                            <Flex direction={'column'}>
                              <Box flex={0.5}>
                                <Text className="data"  c={'gray'} fs={'5px'}>
                                  <Calendar size="16" color="gray"/>
                                   {t("home.second-section.date3")}
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">{t("home.second-section.new-3")}</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  {t("home.second-section.new-3-desc")}
                                </Text>
                              </Box>
                              <Button>{t("home.first-section.more-btn")}</Button>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex={1} className="news-links">
                <Flex direction={'column'} className="news-links-flex" gap="md">
                  <Box flex={0.1} className="header-links">
                    <Flex >
                    <Text className="title-link">{t("home.second-section.fast-link")}</Text>
                    </Flex>
                  </Box>

                  <Box flex={1}>
                    <Flex direction={"column"}>
                      <Box className="link-box-item" flex={1}>
                        <Flex direction={'column'} gap={'lg'}>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Calendar size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link1")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Blogger size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link2")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Profile2User size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link3")}
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Book size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                {t("home.second-section.fast-link4")}
                              </Box>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1} className="empty-link"></Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
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
                            Тут будет картина
                          </Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">{t("home.third-section.teacher-name1")}</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
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
                            Тут будет картина
                          </Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">{t("home.third-section.teacher-name3")}</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
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
      <section className="about-section">
        <div className="container">
          <Box className="about-box">
            <Flex direction={isMobile ? 'column' : 'row'} className="about-flex" justify="space-between" align="center" gap="md">
              <Box flex={1} className="about-content">
                <Flex direction={'column'} className="about-content-flex" gap="md">
                  <Box flex={1}>
                    <Flex direction={'column'} className="about-header-flex" gap="md">
                      <Box flex={1}>
                      </Box>
                      <Box flex={1} className="about-title">
                        <Text className="title-about" size="30px" fw={700} c="blue">
                          {t("home.fourth-section.about-school")}
                        </Text>
                        <Text className="description-about">
                          {t("home.fourth-section.about_desc")}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>
                  <Box flex={1}>
                    <Flex className="about-items-flex" direction={'column'}>
                      <Box flex={4}>
                        <Flex className="about-item-flex">
                          <Box  flex={1}>
                            <Flex className="about-item" direction={'column'} gap="md">
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">500+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.students")}</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">50+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.teachers")}</Text>
                              </Box>
                            </Flex>
                          </Box>
                          <Box flex={1}>
                            <Flex className="about-item" direction={'column'} gap="md">
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">20+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.class")}</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">25+</Text>
                                <Text className="about-item-description">{t("home.fourth-section.years")}</Text>
                              </Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1}>
                          <Button className="btn-filled">{t("home.first-section.more-btn")}</Button>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex={1.4} className="about-content">
                <Flex direction={'column'} className="about-content-item-flex">
                  <Box >
                    <Text className="title">{t("home.fourth-section.events")}</Text>
                  </Box>
                  <Box flex={6}>
                    <Flex direction={'column'} className="event-item-flex">
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event1")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event1desc")}</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event2")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event2desc")}</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>{t("home.fourth-section.event3")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3date")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3time")}</Text>
                          <Text className="description" flex={1}>{t("home.fourth-section.event3desc")}</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box flex={1}>
                    <Button className="event-btn" variant="outline" fullWidth>{t("home.fourth-section.all-events")}</Button>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </div>
      </section>
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
                      <Input variant="filled" size="md" radius="xl" placeholder="Input component" />
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
  );
}
export default Home;