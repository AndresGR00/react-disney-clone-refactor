import { useState } from "react";

export const useHighlightsCarousel = (initialIndex, carouselPictures) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(initialIndex);

  const handleNextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === carouselPictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? carouselPictures.length - 1 : prevIndex - 1
    );
  };

  const currentPicture = carouselPictures[currentPictureIndex];

  return { handleNextPicture, handlePrevPicture, currentPicture }
};
