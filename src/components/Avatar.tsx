import React, { FC } from 'react';
import { AvatarProps } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';

/**
 * Avatar component wraps all button styles in the design system
 */
export const Avatar: FC<AvatarProps> = ({ children = "Primary", theme = "primary", icon, rounded = false, className, style, onClick }) => {
    return (
        <span className={`${getButtonTheme(theme)} ${rounded ? "rounded-full" : "rounded-md"} w-12 h-12 flex items-center justify-center ${className}`} style={style} onClick={onClick}>
            {icon ? React.createElement(icon, { size: 24 }) : <span className="text-base">{children.charAt(0)}</span>}
        </span>
    );
};

