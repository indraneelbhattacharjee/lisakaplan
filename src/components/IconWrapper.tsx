import React from 'react';
import { IconType } from 'react-icons/lib/esm/iconBase';

interface IconWrapperProps {
  icon: IconType;
  className?: string;
  size?: number;
}

export const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, className, size = 16 }) => {
  return <Icon className={className} size={size} />;
};
