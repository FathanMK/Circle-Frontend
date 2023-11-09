import { useState } from "react";

export default function useImageUpload() {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      setImage(file);
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
    setImage(null);
  };

  return {
    image,
    handleImageUpload,
    handleImageRemove,
  };
}
