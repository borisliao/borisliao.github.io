import type { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export const FieldNotes = ({
  ...props
}: DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  // Ratio: 1.57:1 A6
  return (
    <a
      {...props}
      className="block aspect-[1/1.57] rounded-tr-lg rounded-br-lg border border-gray-300 bg-orange-200 p-10 text-gray-800 shadow-lg duration-300 hover:rotate-2 focus:rotate-2"
    >
      <p className="text-center font-[Futura] text-3xl font-semibold tracking-wider">
        FIELD NOTES
      </p>
    </a>
  );
};
