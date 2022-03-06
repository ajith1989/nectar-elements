import React, { FC, HTMLAttributes } from 'react';
import { Activity, Check, AlertTriangle, } from 'react-feather';
import { getTypographyAlternateTheme, getButtonTheme } from '../utils/helpers';
import { Theme } from '../utils/types';
import { Badge } from './Badge';


export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    /** Alert child can be a String */
    children: string;
    /** Optional. Specifies the Alert theme defined in the design system */
    theme?: Theme;
    /** Optional. To show or hide icon */
    showIcon?: boolean
}

function getAlertIcon(theme: Theme) {
    if (theme === 'success') return Check
    if (theme === 'danger' || theme === 'warning') return AlertTriangle
    return Activity
}

/**
 * Alert component wraps all Alert styles in the design system
 */
export const Alert: FC<AlertProps> = ({ children = 'Alert Message', theme = 'primary', showIcon = true }) => {
    return (
        <div className={`${getButtonTheme(theme)} py-2 px-4 text-base rounded-lg flex items-center space-x-2 bg-opacity-10`}>
            {showIcon && <Badge icon={getAlertIcon(theme)} theme={theme} />}
            <span className={`text-base ${getTypographyAlternateTheme(theme)}`}>{children}</span>
        </div>
    );
};
