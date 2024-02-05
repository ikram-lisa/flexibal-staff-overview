import React from "react";
import CollapsibleNav from "./CollapsibleNav";

export default {
  title: "CollapsibleNav",
  component: CollapsibleNav,
};

const Template = (args) => (
  <div style={{ width: args.isInitiallyCollapsed ? "20%" : "30%" }}>
    <CollapsibleNav {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  isInitiallyCollapsed: false,
};
export const Collapsed = Template.bind({});
Collapsed.args = {
  isInitiallyCollapsed: true,
};
