import React, { FC } from 'react';
import { TypographyTypes } from '../utils/enums';
import { getTypographyStyle, getTypographyTheme } from '../utils/helpers';
import { TypographyProps } from '../utils/types';

function getIconSize(type: TypographyTypes) {
    if (type === 'text') return 16;
    if (type === 'caption') return 36;
    if (type === 'header') return 36;
    if (type === 'title') return 36;
    if (type === 'subtitle') return 30;
    if (type === 'headline') return 24;
    if (type === 'body') return 20;
    if (type === 'small') return 14;
    if (type === 'tiny') return 14;
    return 16
}

/**
 * Typography component wraps all typography styles in the design system
 */
export const Typography: FC<TypographyProps> = ({ children = "Text", theme = "dark", icon, type = 'text' }) => {
    return (
        <div className={`${getTypographyStyle(type)} ${getTypographyTheme(theme)} flex items-center space-x-2 text-base`}>
            {icon && React.createElement(icon, { size: getIconSize(type) })}
            <span>{children}</span>
        </div>
    );
};
