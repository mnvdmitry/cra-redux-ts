import React from 'react';

import { cn } from 'lib/utils/class-names';

import s from './loader.module.css';
import { Props } from './loader.types';

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
