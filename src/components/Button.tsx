import React, { FC } from 'react';
import { Check, Loader } from "react-feather";
import { getButtonTheme, getGhostButtonTheme } from '../utils/helpers';
import { ButtonProps, Icon } from '../utils/types';


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
export const Button: FC<ButtonProps> = ({ children, theme = "primary", icon, ghost = false, onClick, className, style, loading = false, skeleton = false }) => {

    if (skeleton) {
        return (
            <button className={`${ghost ? getGhostButtonTheme(theme) : getButtonTheme(theme)} items-center space-x-2 px-4 py-2 rounded-md inline-flex cursor-not-allowed bg-opacity-50 animate-pulse`}>
                <div className='p-1 w-20 h-6 bg-transparent'></div>
            </button>
        )
    }

    if (loading) {
        return (
            <button className={`${ghost ? getGhostButtonTheme(theme) : getButtonTheme(theme)} items-center space-x-2 px-4 py-2 rounded-md inline-flex cursor-not-allowed bg-opacity-80`}>
                <span className='mr-1 animate-spin'><IconComponent children={children} icon={Loader} /></span>
                Loading
            </button>
        )
    }

    return (
        <button style={style} onClick={onClick} className={`${ghost ? getGhostButtonTheme(theme) : getButtonTheme(theme)} items-center space-x-2 px-4 py-2 rounded-md inline-flex hover:bg-gradient-to-r hover:from-primary hover:to-secondary cursor-pointer hover:text-white ${className}`}>
            {icon && <IconComponent children={children} icon={icon} />}
            {children && <span className="text-base whitespace-nowrap">{children}</span>}
        </button>
    );
};
