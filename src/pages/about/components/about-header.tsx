import {Box, Flex, Text} from '@mantine/core'

export const WelcomeAbout = () => {
  return (
  <>
    <section className="about-welcome">
      <div className="container">
        <Box className="welcome-about-box">
          <Flex className="about-welcome-flex">
            <Box flex={1} className='welcome-about-item'>
              <Text fw={700} size='40px' className='title' >About Our School</Text>
              <Text className="description">Our school has been providing quality education since 1998. We
                focus on developing not only academic knowledge but also critical
                thinking, creativity, and social skills in our students.
              </Text>
              <Text className="description">Our school has been providing quality education since 1998. We
                focus on developing not only academic knowledge but also critical
                thinking, creativity, and social skills in our students.
              </Text>
            </Box>
            <Box flex={1} className='welcome-about-item'>
              <img className='img-about' src="https://avatars.mds.yandex.net/i?id=424e4f4a9c5b665669205af0043679f5df17ebb7-5273845-images-thumbs&n=13" alt="" />
            </Box>
          </Flex>
        </Box>
      </div>
    </section>
  </>
  )
}