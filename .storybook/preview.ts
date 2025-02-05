import type { Preview } from "@storybook/react";

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
