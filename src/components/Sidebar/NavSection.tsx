import { Box, Stack, Text } from "@chakra-ui/react";

interface NavSectionProps {
  title: string;
  children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="small" color="gray.400">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
