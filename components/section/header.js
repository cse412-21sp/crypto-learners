const React = require('react');
import { Flex, Heading, Box, Text } from '@chakra-ui/react';

class Header extends React.Component {
  render() {
    const { title, subtitle, team } = this.props;
    return (
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        textAlign="center"
        backgroundColor="lightbrown"
        color="black"
      >
        <Heading fontWeight="700" fontSize="10vw" margin="0" padding="0">
          {title}
        </Heading>
        <Heading fontSize="24px" fontWeight="400" marginTop="0">
          {subtitle}
        </Heading>
        <Flex
          position="absolute"
          bottom="40px"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text fontSize="1.5em" fontWeight="800" margin="0">
            Created by:
          </Text>
          {team.map((member) => {
            const { id, name } = member;
            return (
              <Box key={id}>
                <Text fontSize="1.25em" marginBottom="1px">
                  {name}
                </Text>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    );
  }
}

module.exports = Header;
