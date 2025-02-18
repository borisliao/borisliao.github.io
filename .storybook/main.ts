import type { StorybookConfig } from "@storybook/react-vite";

// remove this if you remove the managerHead script for goatcounter below
declare global {
  interface Window {
    goatcounter?: {
      count: (options: { path: string }) => void;
    };
  }
}

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");
    const tailwindcss = await import("@tailwindcss/vite");

    return mergeConfig(config, {
      plugins: [tailwindcss.default()],
    });
  },

  // remove the global type above if you remove this goatcounter script
  managerHead: (head) => (`${head}
    <script
      data-goatcounter="https://borisliao.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    ></script>
  `),
};
export default config;
