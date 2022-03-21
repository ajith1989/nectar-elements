import React, { FC, HTMLAttributes } from 'react';
import { Check } from "react-feather";
import { Theme, Icon } from '../utils/types';
import { getButtonTheme, getGhostButtonTheme } from '../utils/helpers';
export interface ButtonProps extends HTMLAttributes<HTMLSpanElement> {
    /** Text inside button component */
    children: string;
    /** Optional. Converts button to ghost mode */
    ghost?: boolean;
    /** Optional. Specifies the button theme defined in the design system */
    theme?: Theme;
    /** Optional. Prefix icon before the button component */
    icon?: Icon;
}

const IconComponent = ({ children, icon }: {
    children: string,
    icon: Icon
}) => {
    if (!children && !icon) {
        return React.createElement(Check, { size: 24 })
    }
    if (icon && !children) {
        return React.createElement(icon, { size: 24 })
    }
    if (icon) {
        return React.createElement(icon, { size: 16 })
    }
    return null
}

/**
 * Button component wraps all button styles in the design system
 */
export const Button: FC<ButtonProps> = ({ children, theme = "primary", icon, ghost = false }) => {
    return (
        <span className={`${ghost ? getGhostButtonTheme(theme) : getButtonTheme(theme)} items-center space-x-2 px-4 py-2 rounded-md inline-flex hover:bg-gradient-to-r hover:from-primary hover:to-secondary cursor-pointer hover:text-white`}>
            {icon && <IconComponent children={children} icon={icon} />}
            {children && <span className="text-base whitespace-nowrap">{children}</span>}
        </span>
    );
};
