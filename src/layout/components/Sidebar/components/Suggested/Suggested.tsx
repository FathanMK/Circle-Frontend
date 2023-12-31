import { Flex } from "@chakra-ui/react";
import Profile from "./components/Profile";

export default function Suggested() {
  return (
    <Flex
      direction="column"
      bg="background.400"
      borderRadius="lg"
      gap={4}
      p={4}
      overflowY="scroll"
      shadow="sm"
    >
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
      <Profile />
    </Flex>
  );
}
