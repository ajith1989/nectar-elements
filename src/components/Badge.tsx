import React, { FC, HTMLAttributes } from 'react';
import { Theme, Icon } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    /** Optional. Number inside Avatar component */
    count?: number;
    /** Optional. Specifies the Badge theme defined in the design system */
    theme?: Theme;
    /** Optional. Icon instead of text for the Badge component */
    icon?: Icon;
}

/**
 * Badge component wraps all button styles in the design system
 */
export const Badge: FC<BadgeProps> = ({ count = 0, theme = "primary", icon }) => {
    return (
        <span className={`${getButtonTheme(theme)} w-8 h-8 flex items-center justify-center rounded-full`}>
            {icon ? React.createElement(icon, { size: 12 }) : <span className="text-xs">{count > 9 ? "9+" : count.toString()}</span>}
        </span>
    );
};
