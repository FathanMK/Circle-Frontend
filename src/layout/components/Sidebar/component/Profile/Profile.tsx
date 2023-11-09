import { Box, Image, Avatar, Text, Flex, Button } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Box bg="background.400" p={4} borderRadius="lg" shadow="sm">
      <Box mb={6} pos="relative">
        <Image
          borderRadius="lg"
          src="https://res.cloudinary.com/dts5hyzdq/image/upload/v1698804475/j19x3xnfap1pt6wbwrfc.avif"
          maxH="100px"
          w="full"
        />
        <Avatar
          pos="absolute"
          bottom={-6}
          left={4}
          size="lg"
          border="3px solid black"
          src="https://res.cloudinary.com/dts5hyzdq/image/upload/v1698223958/vfygy9mtsax2i7zehkyl.jpg"
        />
      </Box>
      <Flex gap={1} direction="column" mt={8}>
        <Text fontSize="xl" fontWeight={600} noOfLines={1}>
          ✨ Stella Audhina ✨
        </Text>
        <Text
          fontSize="sm"
          letterSpacing="wide"
          color="whiteAlpha.600"
          noOfLines={1}
        >
          @audhinafh
        </Text>
        <Text noOfLines={2} lineHeight={1.2}>
          picked over by the worms, and weird fishes picked over by the worms,
          and weird fishes picked over by the worms, and weird fishes picked
          over by the worms, and weird fishes
        </Text>
        <Flex mt={3} gap={4}>
          <Text color="whiteAlpha.700">
            <Text as="span" color="white" fontWeight={700}>
              231{" "}
            </Text>
            Following
          </Text>
          <Text color="whiteAlpha.700">
            <Text as="span" color="white" fontWeight={700}>
              230{" "}
            </Text>
            Followers
          </Text>
        </Flex>
        <Button
          bg="teal.700"
          color="white"
          mt={4}
          borderRadius="full"
          _hover={{ color: "black", bg: "white" }}
        >
          Edit Profile
        </Button>
      </Flex>
    </Box>
  );
}
