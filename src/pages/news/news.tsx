import { Box, Flex , Text, Button } from "@mantine/core";

export const News = () => {
  return (
    <>
      <section className="news-page-section">
        <div className="container">
          <Box className="news-box-page">
            <Flex className="news-page-flex" gap={'lg'} direction={'column'}>
              <Box className="news-item-box" flex={0.2}>
                <Text size="40px" fw={700}>School News</Text>
                <Text>Stay updated with the latest news, events, and announcements from our school community.</Text>
              </Box>
              <Box className="flex-box-item-page" flex={2}>
                <Flex className="news-page-flex" direction={'column'} gap={'md'}>
                  <Box className="news-page-item" flex={1} >
                    <Flex className="inner-flex-item" gap={'md'}>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=5b49ff2afa157f22dc2fbbc5b9fc4eee519f7d89-8427413-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>May 5, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>School Olympics Winners
Announced</Text>
                            <Text>Congratulations to all participants and winners of our
annual School Olympics competition. This year's event
saw record participation with over 300 students…</Text>
                            <Button>Read More</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=ffdf929885dbb9107d766d44e8cdf8af-5235644-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>April 28, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>New Computer Lab Opening</Text>
                            <Text>We're excited to announce the opening of our new state-
of-the-art computer laboratory. The lab features 30 new
computers with the latest software for programming,…</Text>
                            <Button>Read More</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=84e412fcbaa3cef4e09ebdfa1541a76f6cc5a1ed-10331033-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>April 15, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>Parent-Teacher Conference
Schedule</Text>
                            <Text>The schedule for the upcoming parent-teacher
conferences has been published. Parents can book their
preferred time slots through the online portal or by…</Text>
                            <Button>Read More</Button>
                          </Box>
                        </Flex>
                      </Box>
                    </Flex>
                  </Box>
                  <Box className="news-page-item" flex={1}>
                    <Flex className="inner-flex-item" gap={'md'}>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=f7d17e8e3fcb0d8f85db7d65481279bcbda94367-5236812-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>April 10, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>Students Win Regional Science Fair</Text>
                            <Text>Our science team has won first place at the Regional
Science Fair with their innovative project on renewable
energy. They will now advance to the national competitio…</Text>
                            <Button>Read More</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=5b49ff2afa157f22dc2fbbc5b9fc4eee519f7d89-8427413-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>April 5, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>Annual Arts Festival Next Week</Text>
                            <Text>Our annual Arts Festival will take place next week,
featuring student artwork, musical performances, and
theatrical productions. Join us to celebrate the creative…</Text>
                            <Button>Read More</Button>
                          </Box>
                        </Flex>
                      </Box>
                      <Box className="new-box-page" flex={1}>
                        <Flex className="inner-item-flex-page" direction={'column'}>
                          <Box flex={1} className="image-box-item"><img src="https://avatars.mds.yandex.net/i?id=302b5806b4a8ce903aed8c42f887cd33375157a6-5354201-images-thumbs&n=13" alt="image" className="image-box-item-inner" /></Box>
                          <Box flex={1}>
                            <Text>March 25, 2025</Text>
                            <Text size="30px" c={'black'} fw={700}>New Language Program Launching</Text>
                            <Text>Starting next semester, we will be offering an expanded
language program including Spanish and Chinese in
addition to our current language offerings. Registration is…</Text>
                            <Button>Read More</Button>
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