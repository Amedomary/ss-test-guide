import { configure, addDecorator } from "@storybook/react";
import React from "react";
import { withInfo } from '@storybook/addon-info';
import { addReadme } from 'storybook-readme';

addDecorator(withInfo({
  header: true, // Global configuration for the info addon across all of your stories.
}));
addDecorator(addReadme);

// global storybook styled
const storybokStyle = `
    .row-gap > * {
        margin: 8px;
    }
`;

addDecorator(content => (
  <div className="storybook-wrapper">
    {content()} <style>{storybokStyle}</style>
  </div>
));

// automatically import all files ending in *.stories.js
configure(
  require.context("../src/components/", true, /\.stories\.js$/),
  module
);
