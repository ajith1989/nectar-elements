import React, { FC } from 'react';
import { Activity, Check, AlertTriangle, Loader } from 'react-feather';
import { ThemeTypes } from '../utils/enums';
import { getTypographyAlternateTheme, getButtonTheme } from '../utils/helpers';
import { AlertProps } from '../utils/types';
import { Badge } from './Badge';

function getAlertIcon(theme: ThemeTypes) {
    if (theme === 'success') return Check
    if (theme === 'danger' || theme === 'warning') return AlertTriangle
    return Activity
}

/**
 * Alert component wraps all Alert styles in the design system
 */
export const Alert: FC<AlertProps> = ({ children = 'Alert Message', theme = 'primary', showIcon = true, className, style, loading = false }) => {

    if (loading) {
        return (
            <div role="alert" className={`${getButtonTheme(theme)} py-2 px-4 text-base rounded-lg flex items-center space-x-2 bg-opacity-10 ${className}`} style={style}>
                <Badge icon={Loader} theme={theme} loading={true} />
                <span className={`text-base ${getTypographyAlternateTheme(theme)}`}>Loading</span>
            </div>
        )
    }

    return (
        <div role="alert" className={`${getButtonTheme(theme)} py-2 px-4 text-base rounded-lg flex items-center space-x-2 bg-opacity-10 ${className}`} style={style}>
            {showIcon && <Badge icon={getAlertIcon(theme)} theme={theme} />}
            <span className={`text-base ${getTypographyAlternateTheme(theme)}`}>{children}</span>
        </div>
    );
};
