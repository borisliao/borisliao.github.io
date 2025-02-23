import type { Meta, StoryObj } from "@storybook/react";
import { Film } from "./Film";

import image from "../images/IMG_7524.jpeg?url";

const meta = {
  title: "Film",
} satisfies Meta;

export default meta;

export const _Film: StoryObj<typeof Film> = {
  render: (args) => <Film {...args} />,
  args: { src: image },
};
