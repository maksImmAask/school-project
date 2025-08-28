import { Box, Button, Flex , Input, Text } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
export const NewPage = () => {
  const {t} = useTranslation()
  const nav = useNavigate()
  return (
    <>
      <section className="new-page-section">
        <div className="container">
          <Box className="new-box-pages">
            <Flex className="new-flex-page" direction={'column'}>
              <Button variant='outline' className="back-to-news" onClick={() => {nav('/news')}}>Back to news</Button>
              <Text className="new-text-page" size="30px" fw={700}>School Olympics Winners Announced</Text>
              <Flex className="new-item-page">
                <Box className="inner-item-box-page" flex={1}>
                  <img className="new-img" src="https://avatars.mds.yandex.net/i?id=a4f30d4d77294b27b428654f7126a9f64b4625ef-16559529-images-thumbs&n=13" alt="" />
                  <Text className="new-desc">We are delighted to announce the winners of our annual School Olympics competition. This year's event saw record
participation with over 300 students competing in various disciplines including mathematics, science, literature, and
arts.</Text>
                  <Text className="new-desc">The competition was fierce, with students demonstrating exceptional knowledge, creativity, and problem-solving skills.
After several rounds of challenging tasks and evaluations, the following students emerged as winners:</Text>
                  <ul>
                    <Text className="title-page">Mathematics Category</Text>
                    <li className="li-new">Gold Medal: Sarah Johnson (Grade 10)</li>
                    <li className="li-new">Silver Medal: Michael Chen (Grade 11)</li>
                    <li className="li-new">Bronze Medal: Aisha Patel (Grade 9)</li>
                  </ul>
                  <ul>
                    <Text className="title-page">Science Category</Text>
                    <li className="li-new">Gold Medal: David Kim (Grade 11)</li>
                    <li className="li-new">SSilver Medal: Emma Rodriguez (Grade 10)</li>
                    <li className="li-new">Bronze Medal: James Wilson (Grade 12)</li>
                  </ul>
                  <ul>
                    <Text className="title-page">Literature Category</Text>
                    <li className="li-new">Gold Medal: Olivia Brown (Grade 12)</li>
                    <li className="li-new">SSilver Medal: Noah Davis (Grade 11)</li>
                    <li className="li-new">Bronze Medal: Sophia Martinez (Grade 10)</li>
                  </ul>
                  <Text className="new-desc">We would like to congratulate all the winners and participants for their hard work and dedication. The School Olympics
is not just about winning medals but also about fostering a spirit of healthy competition, teamwork, and academic
excellence.</Text>
                  <Text className="new-desc">Special thanks to all the teachers who prepared the students and organized the event, as well as the parents who
supported their children throughout the competition.</Text>
                  <Text className="new-desc">The medals and certificates will be presented during a special assembly next week. Photos from the competition will
be available in the school gallery soon.</Text>
                  <Text className="new-desc">We look forward to an even bigger and better School Olympics next year!</Text>
                </Box>

                <Box className="related-news">
                  <Flex className="reladet-flex" direction={'column'}>
                    <Box className="related-item" flex={1.3}>
                      <Flex direction="column">
                        <Text size="30px">Related news</Text>
                        <Box flex={1}>
                          <Flex direction={'column'} gap={'xs'}>
                            <Box>
                              <Flex align={'center'} gap={'xs'}>
                              <img className="related-image" src="https://avatars.mds.yandex.net/i?id=9d631c7a06271bcb3a08de4443cee0a51ade31f1-8497046-images-thumbs&n=13" alt="" />
                              <Text size="20px">Computer class opening</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex align={'center'} gap={'xs'}>
                              <img className="related-image" src="https://avatars.mds.yandex.net/i?id=0836571b2129e9f1256e491582256fb12aa4230d-12179187-images-thumbs&n=13" alt="" />
                              <Text size="20px">Students Win Regional Science Fair</Text>
                              </Flex>
                            </Box>
                            <Box>
                              <Flex align={'center'} gap={'xs'}>
                              <img className="related-image" src="https://avatars.mds.yandex.net/i?id=edcbc36a025a90910b4a153fe634415795512c2f-4259532-images-thumbs&n=13" alt="" />
                              <Text size="20px">Annual Arts Festival Next Week</Text>
                              </Flex>
                            </Box>
                          </Flex>
                        </Box>
                      </Flex>
                      
                    </Box>
                    <Box className="related-item-2" flex={1}>
                      <Box className="links-box-page" flex={1}>
                        <Text className="description">{t("home.footer.news-desc")}</Text>
                      </Box>
                      <Box className="links-box-page" flex={1}>
                        <Flex direction={'column'} gap={'10px'}>
                        <Input variant="filled" size="md" radius="xl" placeholder="Email" />
                        <Button type="submit" fullWidth>{t("home.footer.subsc")}</Button>
                        </Flex>
                      </Box>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </div>
      </section>
    </>
  )
}