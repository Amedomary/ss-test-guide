import { withNaming } from '@bem-react/classname';
const cnBem = withNaming({
  n: '',
  e: '__',
  m: '_',
  v: '_'
});
export default cnBem; // cat() // Cat
// cat({ size: 'm' }) // Cat Cat_size_m
// cat('Tail') // Cat-Tail
// cat('Tail', { length: 'small' }) // Cat-Tail Cat-Tail_length_small