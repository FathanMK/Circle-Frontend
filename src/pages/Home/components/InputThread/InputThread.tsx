import {
  Flex,
  Avatar,
  Textarea,
  Button,
  Text,
  Image,
  Box,
  Divider,
  CircularProgress,
} from "@chakra-ui/react";
import { MdAddPhotoAlternate, MdClose } from "react-icons/md";
import { useRef, useCallback, useState, ChangeEvent } from "react";

export default function InputThread() {
  const [threadText, setThreadText] = useState("");
  const [threadImage, setThreadImage] = useState<File | null>(null);
  const [threadProgress, setThreadProgress] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaInput = useCallback(() => {
    if (textareaRef.current) {
      const { scrollHeight, style } = textareaRef.current;
      style.height = "auto";
      style.height = `${scrollHeight}px`;
    }
  }, []);

  const handleTextareaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const characterLength = e.target.value.length;
      const progress = (characterLength / 200) * 100;

      setThreadText(e.target.value);
      setThreadProgress(Math.min(progress, 100));
    },
    []
  );

  const handleImageChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setThreadImage(file);
    }
  };

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.id = "image";
    input.name = "image";
    input.onchange = handleImageChange;
    input.click();
  };

  const handleImageRemove = () => {
    setThreadImage(null);
  };

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
          py={0}
          maxLength={200}
          ref={textareaRef}
          resize="none"
          variant="unstyled"
          placeholder="What is happening?!"
          _placeholder={{ fontSize: "xl" }}
          onInput={handleTextareaInput}
          onChange={handleTextareaChange}
        />
        <Box pos="relative">
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
          {threadImage && (
            <Image w="full" src={URL.createObjectURL(threadImage as File)} />
          )}
        </Box>
        <Flex
          pt={2}
          direction="column"
          bg="background.500"
          pos="sticky"
          bottom={0}
        >
          <Divider />
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
              {threadProgress > 0 && (
                <CircularProgress
                  size="28px"
                  color="accent"
                  value={threadProgress}
                />
              )}
              <Button
                isDisabled={threadImage === null && threadText === ""}
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
