import type { Meta, StoryObj } from "@storybook/react";
import { Film } from "./Film";

import image from "../images/A apartment tower under construction in Long Island City.jpeg?url";

const meta = {
  title: "Film",
} satisfies Meta;

export default meta;

export const _Film: StoryObj<typeof Film> = {
  render: (args) => <Film {...args} />,
  // storybook doesnt like the "," and "-" because it can't encode it in the URL
  // https://github.com/storybookjs/storybook/issues/24139
  // hopefully a fix comes soon
  args: {
    src: image,
    alt: "A apartment tower under construction in Long Island City, Jan 2025",
    className: "w-96 bg-neutral-50 dark:bg-neutral-600",
  },
};
