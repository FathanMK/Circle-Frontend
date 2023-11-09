import { Flex } from "@chakra-ui/react";
import Profile from "./component/Profile/Profile";
import Suggested from "./component/Suggested/Suggested";

export default function Sidebar() {
  return (
    <Flex direction="column" gap={4} overflow="hidden" p={4}>
      <Profile />
      <Suggested />
    </Flex>
  );
}
