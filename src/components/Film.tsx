import type { HTMLAttributes } from "react";

export const Film = ({
  src,
  alt,
  ...divProps
}: { src: string; alt: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...divProps}>
      <img src={src} alt={alt} />
    </div>
  );
};
