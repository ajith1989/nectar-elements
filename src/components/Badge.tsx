import React, { FC } from 'react';
import { BadgeProps } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';
import { Loader } from 'react-feather';

/**
 * Badge component wraps all button styles in the design system
 */
export const Badge: FC<BadgeProps> = ({ count = 0, theme = "primary", icon, className, style, loading = false }) => {

    if (loading) {
        return (
            <span className={`${getButtonTheme(theme)} w-8 h-8 flex items-center justify-center animate-pulse rounded-full ${className}`} style={style}>
                <Loader className='animate-spin' size={12} />
            </span>
        )
    }
    return (
        <span className={`${getButtonTheme(theme)} w-8 h-8 flex items-center justify-center rounded-full ${className}`} style={style}>
            {icon ? React.createElement(icon, { size: 12 }) : <span className="text-xs">{count > 9 ? "9+" : count.toString()}</span>}
        </span>
    );
};
