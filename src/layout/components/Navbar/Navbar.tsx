import { Button, Flex, Text } from "@chakra-ui/react";
import {
  MdAccountCircle,
  MdHome,
  MdLogout,
  MdPeople,
  MdSearch,
} from "react-icons/md";
import NavLink from "./components/NavLink";

export default function Navbar() {
  return (
    <Flex direction="column" py={4} px={8}>
      <Text
        as="h1"
        color="accent"
        fontWeight={900}
        fontSize="4xl"
        letterSpacing="wide"
      >
        circle
      </Text>
      <Flex my={8} direction="column" gap={8}>
        <NavLink Icon={MdHome} to="/home" label="Home" />
        <NavLink Icon={MdSearch} to="/search" label="Search" />
        <NavLink Icon={MdPeople} to="/follows" label="Follows" />
        <NavLink Icon={MdAccountCircle} to="/profile" label="Profile" />
      </Flex>
      <Button
        colorScheme="red"
        mt="auto"
        w="full"
        gap={2}
        _hover={{ color: "black", bg: "white" }}
      >
        <MdLogout size="1.4em" />
        <Text>Logout</Text>
      </Button>
    </Flex>
  );
}
