import type { HTMLAttributes } from "react";

export const Film = ({
  src,
  alt,
  caption,
  ...divProps
}: {
  src: string;
  alt: string;
  caption?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <figure
      {...divProps}
      className={`${divProps.className} pt-7 pr-4 ${caption ? "pb-6" : "pb-16"} pl-4 shadow-md`}
    >
      <img src={src} alt={alt} />
      <figcaption className="text-sm/6">{caption}</figcaption>
    </figure>
  );
};
