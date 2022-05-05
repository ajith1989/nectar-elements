import React, { FC } from 'react';
import { Loader } from 'react-feather';
import { getButtonTheme } from '../utils/helpers';
import { TagProps } from '../utils/types';

/**
 * Tag component wraps all tag styles in the design system
 */
export const Tag: FC<TagProps> = ({ children = "Primary", theme = "primary", icon, loading = false }) => {

    if (loading) {
        return (
            <span className={`${getButtonTheme(theme)} items-center space-x-1 px-3 py-1 rounded-md inline-flex animate-pulse`}>
                {React.createElement(Loader, { size: 14, className: 'animate-spin' })}
                <span className="text-xs whitespace-nowrap">Loading</span>
            </span>
        )
    }

    return (
        <span className={`${getButtonTheme(theme)} items-center space-x-1 px-3 py-1 rounded-md inline-flex`}>
            {icon && React.createElement(icon, { size: 14 })}
            <span className="text-xs whitespace-nowrap">{children}</span>
        </span>
    );
};
