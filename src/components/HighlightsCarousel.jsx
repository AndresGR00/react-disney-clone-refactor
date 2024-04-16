import { useState } from "react";
import HIGHLIGHT_CAROUSEL from "../data/highlightsCarousel.data";

const HighlightsCarousel = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === HIGHLIGHT_CAROUSEL.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? HIGHLIGHT_CAROUSEL.length - 1 : prevIndex - 1
    );
  };

  const currentPicture = HIGHLIGHT_CAROUSEL[currentPictureIndex];

  return (
    <div className="h-[550px] w-full m-auto py-9 px-4 flex justify-center items-center">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${[
            currentPicture.img,
          ]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="max-w-[1800px] w-full h-full rounded-2xl duration-500 relative"
      >
        <h2 className="absolute bottom-5 left-5 text-4xl font-semibold text-slate-100">
          {currentPicture.name}
        </h2>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 dark:bg-gray-900 dark:hover:bg-gray-800 bg-slate-400 text-white px-2 py-2 rounded-full"
          onClick={handlePrevPicture}
        >
          <svg width="24" height="24" className="dark:fill-slate-100 fill-neutral-950 pl-[0.5px] rotate-180">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </button>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 dark:bg-gray-900 dark:hover:bg-gray-800 bg-slate-400 text-white px-2 py-2 rounded-full"
          onClick={handleNextPicture}
        >
          <svg width="24" height="24" className="dark:fill-slate-100 fill-neutral-950 pl-[0.5px]">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HighlightsCarousel;
