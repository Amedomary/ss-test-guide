import React from 'react';
import Heading  from './index';

export default {
  title: 'Components|Heading'
};

export const defaultExample = () => (
  <div className="row-gap">
    <Heading> Стандартный Заголовок </Heading>
  </div>
)

defaultExample.story = {
  name: 'Default'
}