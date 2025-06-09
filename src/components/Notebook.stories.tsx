import type { Meta, StoryObj } from "@storybook/react-vite";
import { Notebook } from "./Notebook";

const meta = {
  title: "Notebook",
  component: Notebook,
  args: {
    href: "https://borisliao.com/",
  },
} satisfies Meta<typeof Notebook>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _Notebook: Story = {
  render: (args) => (
    <div className="w-50">
      <Notebook {...args}>Field Notes</Notebook>
    </div>
  ),
};
