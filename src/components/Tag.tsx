import React, { FC, HTMLAttributes } from 'react';
import { Theme, Icon } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
    /** Text inside tag component */
    children: string;
    /** Optional. Specifies the tag theme defined in the design system */
    theme?: Theme;
    /** Optional. Prefix icon before the tag component */
    icon?: Icon;
}

/**
 * Tag component wraps all tag styles in the design system
 */
export const Tag: FC<TagProps> = ({ children = "Primary", theme = "primary", icon }) => {
    return (
        <span className={`${getButtonTheme(theme)} items-center space-x-1 px-3 py-1 rounded-md inline-flex`}>
            {icon && React.createElement(icon, { size: 14 })}
            <span className="text-xs whitespace-nowrap">{children}</span>
        </span>
    );
};
