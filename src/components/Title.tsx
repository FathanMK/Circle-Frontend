import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <Text
      as="h1"
      color="accent"
      fontWeight={900}
      fontSize="4xl"
      letterSpacing="wide"
    >
      {children}
    </Text>
  );
}
