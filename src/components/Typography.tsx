import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { TypographyType, Theme, Icon } from '../utils/types';
import { getTypographyStyle, getTypographyTheme } from '../utils/helpers';
export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
    /** Typography child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the typography theme defined in the design system */
    theme?: Theme;
    /** Optional. Prefix icon before the typography component */
    icon?: Icon;
    /** Optional. Specifies the typography type defined in the design system */
    type?: TypographyType
}

function getIconSize(type: TypographyType) {
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
