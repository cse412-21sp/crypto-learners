const React = require('react');
import { Flex, Box, Text, Link } from '@chakra-ui/react';

class Nav extends React.Component {
  render() {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        minWidth="100%"
        height="10vh"
        borderBottom="2px solid black"
        position="fixed"
        top="0"
        zIndex="9999"
        backgroundColor="white"
      >
        <Flex
          width="96vw"
          justifyContent="space-between"
          fontSize="6vh"
          fontWeight="500"
          color="black"
        >
          <Box>
            <Text margin="0">Crypto Learners</Text>
          </Box>
        </Flex>
      </Flex>
    );
  }
}

module.exports = Nav;
