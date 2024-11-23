import { forwardRef } from 'react';
import DrunkEffect from '../effects/drunk-effect';

const Drunk = forwardRef((props, ref) => {
  const effect = new DrunkEffect(props);
  return <primitive ref={ref} object={effect} />;
});

export default Drunk;
