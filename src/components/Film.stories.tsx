import type { Meta, StoryObj } from "@storybook/react";
import { Film } from "./Film";

import image from "../images/IMG_7524.jpeg?url";

const meta = {
  title: "Film",
} satisfies Meta;

export default meta;

export const _Film: StoryObj<typeof Film> = {
  render: (args) => <Film {...args} />,
  args: {
    src: image,
    alt: "A apartment tower under construction in Long Island City, Jan 2025",
    className: "w-96 bg-neutral-50 dark:bg-neutral-300",
  },
};
