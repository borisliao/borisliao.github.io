import type { Preview } from "@storybook/react-vite";

import "../src/styles/tailwind.css";

// remove this if you remove the managerHead script in main.ts
declare global {
  interface Window {
    goatcounter?: {
      count: (options: { path: string }) => void;
    };
  }
}

if (window.goatcounter) {
  window.goatcounter.count({
    path: location.pathname + location.search + location.hash,
  })
}

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
