import React from 'react';

import s from './icon.module.css';
import { Props } from './icon.types';
import { cn } from 'lib/utils/class-names';

export const Icon = ({
  svg: Component,
  className,
  size = 'small',
  attributes
}: Props) => {
  let rootClassName = cn(s.root, className, size && s[`--size-${size}`]);

  let icon = typeof Component === 'object' ? Component : <Component />;

  return (
    <span {...attributes} aria-hidden="true" className={rootClassName}>
      {React.cloneElement(icon, { focusable: false })}
    </span>
  );
};