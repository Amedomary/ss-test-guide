import React from 'react';
import { Link } from '..';

export default {
  title: 'Components|Link'
};

export const defaultExample = () => (
  <div className="row-gap">
    <Link>Стандартная ссылка</Link>
  </div>
)

export const styleExample = () => (
  <div className="row-gap">
    <Link style={{background: 'red'}}>Style - background: red</Link>
    <Link style={{textTransform: 'uppercase'}}>Style - text-transform: uppercase</Link>
    <Link style={{marginLeft: '40px'}}>Style - margin-left: 40px</Link>
  </div>
);

export const urlExample = () => (
  <div className="row-gap">
    <Link url="https://pikabu.ru/" color="blue">Pikabu</Link>
    <Link url="https://vk.com/feed">Vk</Link>
    <Link url="https://www.youtube.com/?gl=RU&hl=ru">YouTube</Link>
  </div>
);

export const targetExample = () => (
  <div className="row-gap">
    <Link url="https://www.youtube.com/?gl=RU&hl=ru" target="_blank" hasBorder="orange" borderStyle="dashed">YouTube target: _blank</Link>
    <Link url="https://www.youtube.com/?gl=RU&hl=ru" color="blue" hasBorder="blue" borderStyle="solid">YouTube target: _self</Link>
    <Link url="https://www.youtube.com/?gl=RU&hl=ru" target="_parent">YouTube target: _parent</Link>
    <Link url="https://www.youtube.com/?gl=RU&hl=ru" target="_top" color="blue">YouTube target: _top</Link>
  </div>
);

export const tabIndexExample = () => (
  <div className="row-gap">
    <Link tabIndex={2} color="blue">tabIndex=2</Link>
    <Link tabIndex={3}>tabIndex=3</Link>
    <Link tabIndex={1} color="blue" hasBorder="blue" borderStyle="dotted">tabIndex=1</Link>
    <Link tabIndex={4}>tabIndex=4</Link>
  </div>
);

const iconArrow = <svg id="Capa_1" xmlns="http://www.w3.org/2000/svg" data-name="Capa 1" viewBox="0 0 25 25 " width="30" height="18"><path d="m21.205 5.007c-0.429-0.444-1.143-0.444-1.587 0-0.429 0.429-0.429 1.143 0 1.571l8.047 8.047h-26.554c-0.619 1e-3 -1.111 0.493-1.111 1.112s0.492 1.127 1.111 1.127h26.554l-8.047 8.032c-0.429 0.444-0.429 1.159 0 1.587 0.444 0.444 1.159 0.444 1.587 0l9.952-9.952c0.444-0.429 0.444-1.143 0-1.571l-9.952-9.953z" fill="#1E201D"/></svg>

const iconCar = <svg id="Capa_2" data-name="Capa 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="50" height="30"><path d="m21.427 21.712h-11.38c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h11.38c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path d="m7.339 24.42c-1.77 0-3.209-1.439-3.209-3.208 0-1.77 1.439-3.209 3.209-3.209 1.769 0 3.208 1.439 3.208 3.209 0 1.768-1.44 3.208-3.208 3.208zm0-5.417c-1.218 0-2.209 0.991-2.209 2.209s0.991 2.208 2.209 2.208 2.208-0.99 2.208-2.208-0.99-2.209-2.208-2.209z"/><path d="m24.135 24.42c-1.769 0-3.208-1.439-3.208-3.208 0-1.77 1.439-3.209 3.208-3.209 1.77 0 3.209 1.439 3.209 3.209 0 1.768-1.44 3.208-3.209 3.208zm0-5.417c-1.218 0-2.208 0.991-2.208 2.209s0.99 2.208 2.208 2.208 2.209-0.99 2.209-2.208-0.991-2.209-2.209-2.209z"/><path d="m21.431 21.712h-11.383c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h11.383c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/><path d="M28.833,21.712h-1.992c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5h1.992c0.767,0,1.391-0.624,1.391-1.391v-1.931c0-0.712-0.29-1.408-0.796-1.911l-2.243-2.229c-0.042-0.042-0.076-0.091-0.102-0.145l-1.839-3.98c-0.371-0.803-1.182-1.321-2.065-1.321H2.584C1.711,7.804,1,8.515,1,9.388v9.934c0,0.767,0.623,1.391,1.39,1.391h2.236c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H2.39C1.072,21.712,0,20.64,0,19.321V9.388c0-1.425,1.159-2.584,2.584-2.584h20.595c1.272,0,2.439,0.746,2.974,1.901l1.801,3.899l2.18,2.166c0.693,0.688,1.091,1.644,1.091,2.62v1.931C31.224,20.64,30.151,21.712,28.833,21.712z"/><path d="m21.498 14.838h-14.403c-0.276 0-0.5-0.224-0.5-0.5s0.224-0.5 0.5-0.5h14.403c0.276 0 0.5 0.224 0.5 0.5s-0.224 0.5-0.5 0.5z"/></svg>

export const iconExapmle = () => (
  <div className="row-gap">
    <Link icon={iconCar} />
    <Link icon={iconArrow} color="blue"> + icon </Link>
    <Link icon={iconArrow} hasBorder="orange" borderStyle="dotted"> orange </Link>
  </div>
)

export const colorExample = () => (
  <div className="row-gap">
    <Link>Orange</Link>
    <Link color="blue">Blue</Link>
  </div>
)

export const borderExample = () => (
  <div className="row-gap">
    <Link>no border</Link>
    <Link hasBorder="orange" borderStyle="solid">Orange solid</Link>
    <Link hasBorder="blue" borderStyle="dotted" color="blue">Blue dotted</Link>
    <Link hasBorder="orange" borderStyle="dashed">Orange dashed</Link>
  </div>
)

export const boldExample = () => (
  <div className="row-gap">
    <Link isBold>Orange bold</Link>
    <Link isBold color="blue" borderStyle="dotted">blue bold</Link>
  </div>
)

export const disabledExample = () => (
  <div className="row-gap">
    <Link isDisabled>isDisabled</Link>
    <Link isDisabled hasBorder="orange" borderStyle="dashed">isDisabled border</Link>
    <Link isDisabled color="blue">isDisabled color: blue</Link>
  </div>
)

defaultExample.story = {
  name: 'Default'
};

styleExample.story = {
  name: 'Style'
};

urlExample.story = {
  name: 'Url'
};

targetExample.story = {
  name: 'Target'
};

tabIndexExample.story = {
  name: 'TabIndex'
};

colorExample.story = {
  name: 'Color',
};

borderExample.story = {
  name: 'Border',
};

boldExample.story = {
  name: 'Bold',
};


disabledExample.story = {
  name: 'Disabled',
};

iconExapmle.story = {
  name: 'With icon',
}