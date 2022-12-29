import { Flex, Text } from '@mantine/core';

import { Layout } from '~/components/meta/Layout';

function Home() {
  return (
    <Layout>
      <Flex bg="red">
        <Text>
          Welcome to Next JS! Edit src/pages/index.tsx to get started...
        </Text>
      </Flex>
    </Layout>
  );
}

export default Home;
