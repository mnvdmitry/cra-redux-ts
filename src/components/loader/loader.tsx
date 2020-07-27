import React from 'react';

import s from './loader.module.css';
import { Props } from './loader.types';
import { cn } from 'lib/utils/class-names';

function Loader({ size, color, className, attributes }: Props) {
  let rootClassNames = cn(
    s.root,
    className,
    size && s[`--size-${size}`],
    color && s[`--color-${color}`]
  );

  return (
    <span {...attributes} className={rootClassNames}>
      <span className={s.inner} />
    </span>
  );
}

export { Loader };
