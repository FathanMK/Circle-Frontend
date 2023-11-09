import { Link, Text } from "@chakra-ui/react";
import { NavLink as NavLinkReactRouter, To } from "react-router-dom";
import { IconType } from "react-icons";

interface INavLinkprops {
  Icon: IconType;
  label: string;
  to: To;
}

export default function NavLink({ Icon, label, to }: INavLinkprops) {
  return (
    <Link
      as={NavLinkReactRouter}
      to={to}
      display="flex"
      alignItems="center"
      gap={4}
      color="whiteAlpha.600"
      cursor="pointer"
      w="full"
      transition="color 150ms ease-in-out"
      _hover={{ color: "white" }}
      _activeLink={{ color: "white" }}
    >
      <Icon size="2.2rem" />
      <Text fontSize="18px" fontWeight={700}>
        {label}
      </Text>
    </Link>
  );
}
