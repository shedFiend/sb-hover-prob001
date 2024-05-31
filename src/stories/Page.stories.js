import { waitFor, within, userEvent, expect } from "@storybook/test";

import { Page } from "./Page";

export default {
  title: "Example/Hover",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
};

export const Hidden = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByTestId("button")).not.toBeVisible();
  },
};

export const Hover_Visible = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const $hoverTarget = canvas.getByTestId("HOVER-TARGET");

    console.log($hoverTarget); // in the browser dev tools, right click, force state, :hover makes the button visible
    userEvent.hover($hoverTarget, { force: true });

    // await expect($button).toBeVisible();
    await waitFor(() => expect(canvas.getByTestId("button")).toBeVisible());
  },
};
