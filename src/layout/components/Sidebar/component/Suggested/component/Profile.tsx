import { Flex, Link, Avatar, Box, Text, Button } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Link display="flex" alignItems="center" gap={4}>
        <Avatar />
        <Box>
          <Text fontWeight={700} fontSize="sm">
            Mohammed Jawahir
          </Text>
          <Text fontWeight={700} fontSize="sm" color="whiteAlpha.600">
            @em.jawahir
          </Text>
        </Box>
      </Link>
      <Button
        variant="outline"
        ml="auto"
        size="sm"
        color="white"
        px={6}
        borderRadius="full"
        _hover={{ bg: "green.500", border: "none" }}
      >
        <Text>Follow</Text>
      </Button>
    </Flex>
  );
}
