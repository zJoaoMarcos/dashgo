import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>João Matos</Text>
          <Text color="gray.300" fontSize="small">
            joaomarcosm.silva@outlook.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="João Matos" />
    </Flex>
  );
}
