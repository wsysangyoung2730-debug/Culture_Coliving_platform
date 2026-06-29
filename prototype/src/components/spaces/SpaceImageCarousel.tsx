import { useState } from "react";
import type { MouseEvent } from "react";
import type { SpaceImage } from "../../data/spaces";

type SpaceImageCarouselProps = {
  images: SpaceImage[];
};

export function SpaceImageCarousel({ images }: SpaceImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentImage = images[currentIndex] ?? images[0];

  const stopCardSelection = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const showPreviousImage = (event: MouseEvent<HTMLButtonElement>) => {
    stopCardSelection(event);
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const showNextImage = (event: MouseEvent<HTMLButtonElement>) => {
    stopCardSelection(event);
    setCurrentIndex((index) => (index + 1) % images.length);
  };

  const showImage = (index: number) => (event: MouseEvent<HTMLButtonElement>) => {
    stopCardSelection(event);
    setCurrentIndex(index);
  };

  return (
    <div className="space-image-carousel">
      <img
        alt={currentImage.alt}
        className="space-card-photo"
        src={currentImage.src}
      />
      <div className="space-image-gradient" aria-hidden="true" />
      <span className="space-image-label">{currentImage.label}</span>
      <button
        aria-label="이전 공간 사진 보기"
        className="space-carousel-button space-carousel-button-prev"
        onClick={showPreviousImage}
        type="button"
      >
        ‹
      </button>
      <button
        aria-label="다음 공간 사진 보기"
        className="space-carousel-button space-carousel-button-next"
        onClick={showNextImage}
        type="button"
      >
        ›
      </button>
      <div className="space-carousel-dots" aria-label="공간 사진 선택">
        {images.map((image, index) => (
          <button
            aria-label={`${image.label} 사진 보기`}
            aria-pressed={index === currentIndex}
            className={`space-carousel-dot ${index === currentIndex ? "space-carousel-dot-active" : ""}`}
            key={image.label}
            onClick={showImage(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
