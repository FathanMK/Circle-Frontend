import { Flex } from "@chakra-ui/react";
import Profile from "./components/Profile/Profile";
import Suggested from "./components/Suggested/Suggested";

export default function Sidebar() {
  return (
    <Flex direction="column" gap={4} overflow="hidden" p={4}>
      <Profile />
      <Suggested />
    </Flex>
  );
}
