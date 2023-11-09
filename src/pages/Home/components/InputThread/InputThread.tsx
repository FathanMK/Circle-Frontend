import {
  Flex,
  Avatar,
  Textarea,
  Button,
  Text,
  Image,
  Box,
  CircularProgress,
} from "@chakra-ui/react";
import { MdAddPhotoAlternate, MdClose } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";

import useImageUpload from "./hooks/useImageUpload";
import useTextarea from "./hooks/useTextarea";

export default function InputThread() {
  const { image, handleImageUpload, handleImageRemove } = useImageUpload();
  const { text, progress, textareaRef, handleTextareaChange } = useTextarea();

  return (
    <Flex
      alignItems="center"
      borderBottom="1px solid"
      borderColor="whiteAlpha.200"
      p={4}
      gap={4}
    >
      <Avatar alignSelf="flex-start" />
      <Flex w="full" direction="column" position="relative">
        <Textarea
          as={TextareaAutosize}
          pb={2}
          pt={3}
          maxLength={200}
          minH="50px"
          ref={textareaRef}
          resize="none"
          variant="unstyled"
          letterSpacing="wider"
          placeholder="What is happening?!"
          _placeholder={{ fontSize: "xl" }}
          onChange={handleTextareaChange}
        />
        <Box pos="relative" borderRadius="xl" overflow="hidden">
          <Button
            pos="absolute"
            size="sm"
            top={2}
            right={2}
            borderRadius="full"
            p={0}
            bg="accent"
            color="white"
            _hover={{ bg: "white", color: "black" }}
            onClick={handleImageRemove}
          >
            <MdClose size={20} />
          </Button>
          {image && (
            <Image
              w="full"
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
            />
          )}
        </Box>
        <Flex
          pt={2}
          direction="column"
          bg="background.500"
          pos="sticky"
          bottom={0}
        >
          <Flex py={2} align="center" justify="space-between">
            <Button
              px={0}
              bg="none"
              color="accent"
              _hover={{ bg: "none", color: "white" }}
              onClick={handleImageUpload}
            >
              <MdAddPhotoAlternate size="30" />
            </Button>
            <Flex gap={2} align="center">
              {progress > 0 && (
                <CircularProgress size="28px" color="accent" value={progress} />
              )}
              <Button
                isDisabled={image === null && text === ""}
                size="sm"
                borderRadius="full"
                bg="accent"
                color="white"
                px={6}
                _hover={{ color: "black", bg: "white" }}
              >
                <Text>Post</Text>
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
