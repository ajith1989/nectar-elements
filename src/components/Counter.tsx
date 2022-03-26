import React, { FC } from 'react';
import { CounterProps } from '../utils/types';
import { getTypographyAlternateTheme, getButtonTheme } from '../utils/helpers';
import { Avatar } from './Avatar';


/**
 * Counter component
 */
export const Counter: FC<CounterProps> = ({ icon, label, count, theme = 'primary', border = true, className, style, onClick }) => {
    return (
        <div className={`flex items-center space-x-4 ${border ? "mb-6 shadow-xl shadow-primary/10" : "mb-0"} py-4 px-8 rounded-lg hover:bg-primary/10 ${className}`} style={style} onClick={onClick}>
            <Avatar icon={icon} theme={theme} />
            <div className="flex flex-col">
                <span className={`text-sm ${getTypographyAlternateTheme(theme)}`}>{label}</span>
                <span className='text-2xl font-bold'>{count ? count.toString() : 'N/A'}</span>
                <div className="relative mt-2">
                    <div className={`h-1 w-full opacity-20 absolute rounded-lg ${getButtonTheme(theme)}`} />
                    <div className={`h-1 w-1/2 absolute rounded-lg ${getButtonTheme(theme)}`} />
                </div>
            </div>
        </div>
    );
};
