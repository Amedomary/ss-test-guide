import React from 'react';
import Counter  from './index';

export default {
  title: 'Components|Counter'
};

export const defaultExample = () => (
  <div className="row-gap">
    <Counter />
    <Counter />
  </div>
)

defaultExample.story = {
  name: 'Default'
}