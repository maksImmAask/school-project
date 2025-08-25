import { Tabs, Box , Text} from '@mantine/core';

export const Tab = () => {
  return (
    <>
    <section className='tab-section'>
      <div className="container">
    <Tabs  variant="pills" radius="lg" defaultValue="mission" className='tab'>
      <Tabs.List className='tab-list'>
        <Tabs.Tab value="mission">
          Our Mission & Vision
        </Tabs.Tab>
        <Tabs.Tab value="history">
          Our History
        </Tabs.Tab>
        <Tabs.Tab value="values">
          Core Values
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="mission" className='tab-item'>
        <Box className='tab-box'>
          <Text size={'40px'} fw={700} >Our Mission & Vision</Text>
          <Text className="description" size={'20px'}>Mission: To provide a nurturing and inclusive learning environment that empowers students to become lifelong learners, critical thinkers, and
responsible global citizens.</Text>
          <Text className="description" size={'20px'}>Vision: To be recognized as a center of educational excellence that prepares students to thrive in a rapidly changing world and make positive
contributions to society.</Text>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="history" className='tab-item'>
        <Box className='tab-box'>
          <Text size={'40px'} fw={700} >Our History</Text>
          <Text className="description" size={'20px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent</Text>
        </Box>
      </Tabs.Panel>

      <Tabs.Panel value="values" className='tab-item'>
        <Box className='tab-box'>
          <Text size={'40px'} fw={700} >Our Values</Text>
          <Text className="description" size={'20px'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cent</Text>
        </Box>
      </Tabs.Panel>
    </Tabs>
      </div>
    </section>
    </>
  );
}