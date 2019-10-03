import React from 'react';
import Demo from './demo';

export default {
  title: 'Components|Counter'
};

export const defaultExample = () => (
  <div className="row-gap">
    <Demo />
    <Demo />
  </div>
)

defaultExample.story = {
  name: 'Default'
}