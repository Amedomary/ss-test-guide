import React from 'react';
import { storiesOf } from '@storybook/react';
import Demo from './demo';
import {Counter} from '..';

// export default {
//   title: 'Components|Counter'
// };

// export const defaultExample = () => (
//   <div className="row-gap">
//     <Demo />
//     <Demo />
//   </div>
// )

// defaultExample.story = {
//   name: 'Default'
// }

storiesOf('Widgets|Button/Button', module)
  .add('DemoDemoDemo', () => <Counter />);