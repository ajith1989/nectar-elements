import React, { FC } from 'react';
import { getButtonTheme } from '../utils/helpers';
import { TagProps } from '../utils/types';

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
