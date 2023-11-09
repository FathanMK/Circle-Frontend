import { useState, useRef, useCallback, ChangeEvent } from "react";

export default function useTextarea() {
  const [text, setText] = useState("");
  const [progress, setProgress] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTextareaChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const characterLength = e.target.value.length;
      const progress = (characterLength / 200) * 100;

      setText(e.target.value);
      setProgress(Math.min(progress, 100));
    },
    []
  );

  return {
    text,
    progress,
    textareaRef,
    handleTextareaChange,
  };
}
