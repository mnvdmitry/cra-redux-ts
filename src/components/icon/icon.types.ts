type IconSize = 'smaller' | 'small' | 'large' | 'medium';

export interface Props {
  svg: React.ReactElement | React.ComponentType;
  size?: IconSize;
  className?: string;
  attributes?: React.HTMLAttributes<HTMLSpanElement>;
}
