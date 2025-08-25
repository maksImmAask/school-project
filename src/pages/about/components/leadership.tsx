import { Box, Flex, Text } from "@mantine/core"
import { Book, Medal, Profile2User } from "iconsax-reactjs"

export const Leadership = () => {
  return (
    <>
      <section className="leadership">
        <div className="container">
          <Box className="leadership-box">
            <Text size="40px" fw={700}>School Leadership</Text>
            <Box className="items-leader">
              <Flex className="leader-flex" gap={'md'}>
                <Box className="flex-item-leader" flex={1}>
                  <Profile2User className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">John Smith</Text>
                  <Text>Principal</Text>
                  <Text>With over 20 years of experience in
education, Mr. Smith leads our school with
vision and dedication.</Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <Book className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Maria Johnson</Text>
                  <Text>Academic Director</Text>
                  <Text>Dr. Johnson oversees our academic
programs, ensuring high standards and
innovative teaching methods.</Text>
                </Box>
                <Box className="flex-item-leader" flex={1}>
                  <Medal className="icon-leader" size="80" color="var(--mantine-color-blue-6)"/>
                  <Text className="leader-title">Robert Davis</Text>
                  <Text>Student Affairs</Text>
                  <Text>Mr. Davis coordinates student activities and
ensures a supportive environment for all
students.</Text>
                </Box>
              </Flex>
            </Box>
          </Box>
        </div>
      </section>
    </>
  )
}