const React = require('react');
import { Flex, Box, Text, VStack } from '@chakra-ui/react';

class Contents extends React.Component {
  render() {
    const { title, chapters, ...props } = this.props;
    return (
      <Flex
        justifyContent="start"
        alignItems="center"
        height="50vh"
        boxSizing="border-box"
        flexDirection="column"
      >
        <VStack
          minW="100vw"
          h="80vh"
          fontSize="30px"
          fontWeight="500"
          borderTop="2px solid black"
        >
          {chapters.map((chapter) => {
            const { id, name } = chapter;
            return (
              <Box
                key={id}
                w="100%"
                marginTop="0.5rem"
                marginBottom="0"
                borderBottom="2px solid black"
              >
                <Text marginLeft="8px">
                  {id}. {name}
                </Text>
              </Box>
            );
          })}
        </VStack>
      </Flex>
    );
  }
}

module.exports = Contents;
