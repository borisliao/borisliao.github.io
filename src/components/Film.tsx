import type { HTMLAttributes } from "react";

export const Film = ({
  src,
  alt,
  ...divProps
}: { src: string; alt: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <figure
      {...divProps}
      className={`${divProps.className} pt-7 pr-4 ${alt ? "pb-4" : "pb-16"} pl-4 shadow-md`}
    >
      <img src={src} alt={alt} />
      <figcaption className="text-sm/6">{alt}</figcaption>
    </figure>
  );
};
