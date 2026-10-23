import type { LucideProps, LucideIcon } from 'lucide-react';

interface IconProps extends LucideProps {
  icon: LucideIcon;
}

export function Icon({ icon: IconComponent, className, ...props }: IconProps) {
  return (
    <IconComponent
      aria-hidden="true"
      strokeWidth={1.8}
      className={className}
      {...props}
    />
  );
}
