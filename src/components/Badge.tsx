import React, { FC } from 'react';
import { BadgeProps } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';

/**
 * Badge component wraps all button styles in the design system
 */
export const Badge: FC<BadgeProps> = ({ count = 0, theme = "primary", icon, className, style }) => {
    return (
        <span className={`${getButtonTheme(theme)} w-8 h-8 flex items-center justify-center rounded-full ${className}`} style={style}>
            {icon ? React.createElement(icon, { size: 12 }) : <span className="text-xs">{count > 9 ? "9+" : count.toString()}</span>}
        </span>
    );
};
