import React from 'react';
import Price  from './index';

export default {
  title: 'Components|Price'
};

export const defaultExample = () => (
  <div className="row-gap">
    <Price> Стандартная цена</Price>
    <Price isBold> 399 рублей isBold</Price>
  </div>
)

defaultExample.story = {
  name: 'Default'
}