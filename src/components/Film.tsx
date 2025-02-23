import type { HTMLAttributes } from "react";

export const Film = ({
  src,
  alt,
  ...divProps
}: { src: string; alt: string } & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...divProps}
      className={`${divProps.className} pt-7 pr-4 pb-16 pl-4 shadow-md`}
    >
      <img src={src} alt={alt} />
    </div>
  );
};
