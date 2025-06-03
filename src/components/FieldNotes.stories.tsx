import type { Meta, StoryObj } from "@storybook/react-vite";
import { FieldNotes } from "./FieldNotes";

const meta = {
  title: "FieldNotes",
  component: FieldNotes,
  args: {
    href: "https://borisliao.github.io/",
  },
} satisfies Meta<typeof FieldNotes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _FieldNotes: Story = {
  render: (args) => (
    <div className="w-50">
      <FieldNotes {...args} />
    </div>
  ),
};
