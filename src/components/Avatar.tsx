import React, { FC, HTMLAttributes } from 'react';
import { Theme, Icon } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
    /** Text inside Avatar component */
    children?: string;
    /** Optional. Specifies rounded box or rectangular box for Avatar */
    rounded?: boolean;
    /** Optional. Specifies the Avatar theme defined in the design system */
    theme?: Theme;
    /** Optional. Icon instead of text for the Avatar component */
    icon?: Icon;
}

/**
 * Avatar component wraps all button styles in the design system
 */
export const Avatar: FC<AvatarProps> = ({ children = "Primary", theme = "primary", icon, rounded = false }) => {
    return (
        <span className={`${getButtonTheme(theme)} ${rounded ? "rounded-full" : "rounded-md"} w-12 h-12 flex items-center justify-center`}>
            {icon ? React.createElement(icon, { size: 24 }) : <span className="text-base">{children.charAt(0)}</span>}
        </span>
    );
};

