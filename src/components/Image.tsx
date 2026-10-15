import NextImage from "next/image";

// Figma "Image": type=character(펭귄 캐릭터 201px) · flag(깃발 48px)
// 그림 파일은 public/images/ 에 있다
const images = {
  character: { src: "/images/character.png", size: 201, className: "size-201" },
  flag: { src: "/images/flag.png", size: 48, className: "size-48 rounded-scaled-media-16-8" },
};

type ImageProps = {
  type?: "character" | "flag";
  alt: string; // 그림 설명. 꾸밈용이면 "" (빈 글자)
  className?: string;
};

export default function Image({ type = "character", alt, className = "" }: ImageProps) {
  const image = images[type];
  return (
    <NextImage
      src={image.src}
      alt={alt}
      width={image.size}
      height={image.size}
      className={`shrink-0 object-cover ${image.className} ${className}`}
    />
  );
}
