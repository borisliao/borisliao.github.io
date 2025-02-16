import type { Meta, StoryObj } from "@storybook/react";
import { Film } from "./Film";

const meta = {
  title: "Film",
} satisfies Meta;

export default meta;

export const _Film: StoryObj<typeof Film> = {
  render: (args) => <Film {...args} />,
  args: { src: "src/images/IMG_7524.jpeg" },
};
