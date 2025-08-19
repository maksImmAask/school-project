import { Flex, Box,Text, Button, Input } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Calendar, Blogger, Profile2User, Book, BinanceCoin, Instagram, Facebook, Twitch } from "iconsax-reactjs";
const Home = () => {
  const isTablet = useMediaQuery('(max-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 480px)')
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
                      Добро пожаловать в нашу школу
                    </Text>
                  </Box>
                  <Box>
                    <Box>
                      <Text>Место, где знания встречаются с инновациями, а
ученики готовятся к вызовам завтрашнего дня.</Text>
                    </Box>
                    <Box>
                      <Flex gap="md" justify="flex-start" align="center" mt="md">
                      <Button>Связаться с нами</Button>
                      <Button variant="outline">Узнать Больше</Button>
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
            <Flex className="news-flex" direction={isTablet ? 'column' : 'row'} justify="space-between" align="center" gap="md">
              <Box flex={2} className="news-content">
                <Flex className="news-content-flex" direction={'column'}>
                  <Box flex={0.1} className="header-news">
                    <Flex>
                    <Box flex={3}>
                      <Text className="title-news" size="30px" fw={700} c="blue">
                        Последние новости
                      </Text>
                    </Box>
                    <Box flex={1} ></Box>
                    <Box flex={1}><Button className="btn-all">Смотреть все</Button></Box>
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
                                   5 мая 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Объявлены победители школьной олимпиады</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Поздравляем всех участников и победителей нашей
ежегодной школьной олимпиады.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
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
                                   28 апреля 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Открытие нового компьютерного класса</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Мы рады сообщить об открытии нашей новой современной
компьютерной лаборатории.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
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
                                   15 апреля 2025
                                </Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="title">Расписание родительских собраний</Text>
                              </Box>
                              <Box flex={1}>
                                <Text className="description">
                                  Опубликовано расписание предстоящих родительских
собраний.
                                </Text>
                              </Box>
                              <Button>Читать дальше</Button>
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
                    <Text className="title-link">Быстрые ссылки</Text>
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
                                Расписание уроков
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Blogger size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Школьные документы
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                              <Box flex={1} className="link-icon">
                                <Profile2User size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Наши учителя
                              </Box>
                          </Box>
                          <Box flex={1} className="link-item">
                            
                              <Box flex={1} className="link-icon">
                                <Book size={32} />
                              </Box>
                              <Box flex={2} className="link-text">
                                Доступные курсы
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
              <Box className="teachers-header " flex={isTablet ? 0.1 : 1}>
                <Text className="title-teachers">Our Teachers</Text>
                <Text className="description">Meet our dedicated team of educators committed to providing the highest quality
education and support for our students.</Text>
              </Box>
              <Box className="teachers-items" flex={2}>
                <Flex direction={isTablet ? 'column' : 'row'} className="teachers-items-flexs" gap={'md'}>
                  <Box className="teachers-item-teacher" flex={1}>
                    <Flex className="item-teacher-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>
                            Тут будет картина
                          </Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">DR Sarah Johnson</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
                          <Box flex={1} className="teacher-name"> <Text className="teacher-title">Prof. Michael Chen</Text></Box>
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
                            <Text className="teacher-title">Dr. Emily Rodriguez</Text>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="teacher" flex={1}>
                        <Flex direction={'column'} className="teacher-item-flex">
                          <Box flex={3}>Тут будет картина</Box>
                          <Box flex={1} className="teacher-name">
                            <Text className="teacher-title">Prof. David Kim</Text>
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
            <Flex direction={isTablet ? 'column' : 'row'} className="about-flex" justify="space-between" align="center" gap="md">
              <Box flex={1} className="about-content">
                <Flex direction={'column'} className="about-content-flex" gap="md">
                  <Box flex={1}>
                    <Flex direction={'column'} className="about-header-flex" gap="md">
                      <Box flex={1}>
                        <img className="img" src="https://avatars.mds.yandex.net/get-altay/9954022/2a0000018a4275178b1c7b3eeaf53579cff9/XXL_height" alt="" />
                      </Box>
                      <Box flex={1} className="about-title">
                        <Text className="title-about" size="30px" fw={700} c="blue">
                          О нашей школе
                        </Text>
                        <Text className="description-about">
                          Наша школа стремится обеспечить высококачественное образование, поддерживая учеников в их стремлении к знаниям и развитию.
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
                                <Text className="about-item-description">учеников</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">50+</Text>
                                <Text className="about-item-description">учетилей</Text>
                              </Box>
                            </Flex>
                          </Box>
                          <Box flex={1}>
                            <Flex className="about-item" direction={'column'} gap="md">
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">20+</Text>
                                <Text className="about-item-description">классов</Text>
                              </Box>
                              <Box flex={1} className="about-item-title">
                                <Text className="about-item-text">25+</Text>
                                <Text className="about-item-description">лет опыта</Text>
                              </Box>
                            </Flex>
                          </Box>
                        </Flex>
                      </Box>
                      <Box flex={1}>
                          <Button className="btn-filled">Узнать больше о нас</Button>
                      </Box>
                    </Flex>
                  </Box>
                </Flex>
              </Box>
              <Box flex={1} className="about-content">
                <Flex direction={'column'} className="about-content-item-flex">
                  <Box >
                    <Text className="title">Upcoming events</Text>
                  </Box>
                  <Box flex={6}>
                    <Flex direction={'column'} className="event-item-flex">
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>Parent-Teacher Conference</Text>
                          <Text className="description" flex={1}>May 15, 2025</Text>
                          <Text className="description" flex={1}>4:00 PM - 7:00 PM</Text>
                          <Text className="description" flex={1}>Main Building, Floor 2</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1}>Science Fair</Text>
                          <Text className="description" flex={1}>May 20, 2025</Text>
                          <Text className="description" flex={1}>10:00 AM - 3:00 PM</Text>
                          <Text className="description" flex={1}>School Gymnasium</Text>
                        </Flex>
                      </Box>
                      <Box className="event-item">
                        <Flex direction={'column'} className="event-item-flex">
                          <Text className="title" flex={1} >End of Year Concert</Text>
                          <Text className="description" flex={1}>June 5, 2025</Text>
                          <Text className="description" flex={1}>6:00 PM - 8:00 PM</Text>
                          <Text className="description" flex={1}>School Auditorium</Text>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box flex={1}>
                    <Button className="event-btn" variant="outline" fullWidth>View all events</Button>
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
                <Text className="title-img">Photo Gallery</Text>
                <Button className="btn-filled">See All</Button>
              </Box>
              <Box className="images-imgs" flex={1}>
                <Flex className="imgs-flex" direction={isMobile ? 'row' : 'column'} gap={'md'}>
                  <Box className="imgs-box" flex={1}>
                    <Flex className="box-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
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
                    <Flex className="box-flex" direction={isMobile ? 'column' : 'row'} gap={'md'}>
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
          <Flex className="footer-flex" gap={'lg'}>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <BinanceCoin
                  size="32"
                  color="var(--mantine-color-blue-6)"
                  />
                </Box>
                <Box flex={4} className="footer-links">
                  <Text className="description">Providing quality education since
1998. Developing knowledge,
creativity, and character.</Text>
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
                  <Text className="title">Quick Links</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'} gap={'lg'}>
                    <Box flex={1} className="links-box">
                      <Text className="description">About Us</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">Education</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">News & Events</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">Support</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">Rules & Documents</Text>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Box>
            <Box className="footer-box" flex={1}>
              <Flex direction={'column'} gap={'lg'}>
                <Box flex={1} className="footer-title">
                  <Text className="title">Contact Us</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'} gap={'lg'}>
                    <Box flex={1} className="links-box">
                      <Text className="description">ул. Школьная 123, Город,
Страна</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">+1 234 567 890</Text>
                    </Box>
                    <Box flex={1} className="links-box">
                      <Text className="description">info@schoolname.edu</Text>
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
                  <Text className="title">Newsletter</Text>
                </Box>
                <Box flex={4} className="footer-links">
                  <Flex direction={'column'}>
                    <Box className="links-box" flex={1}>
                      <Text className="description">Subscribe to our newsletter to
receive updates and news.</Text>
                    </Box>
                    <Box className="links-box" flex={1}>
                      <Flex direction={'column'} gap={'10px'}>
                      <Input variant="filled" size="md" radius="xl" placeholder="Input component" />
                      <Button type="submit" className="btn-filled" fullWidth>Subscribe</Button>
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