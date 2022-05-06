import React, { FC } from 'react';
import { getButtonTheme, getTypographyAlternateTheme } from '../utils/helpers';
import { Avatar } from './Avatar';
import { Loader, TrendingDown, TrendingUp } from 'react-feather';
import { TrendProps } from '../utils/types';
import { NOT_AVAILABLE } from '../utils/messages';

/**
 * Box component wraps all box styles in the design system
 */
export const Trend: FC<TrendProps> = ({ icon, label, meta, count, theme = 'primary', border = true, trend = 'up', extra, loading = false }) => {

    if (loading) {
        return (
            <div className={`flex items-center space-x-4 ${border ? "mb-6 shadow-xl shadow-primary/10" : "mb-0"} py-4 px-8 rounded-lg hover:bg-primary/10`}>
                <Avatar icon={Loader} theme={theme} className="animate-pulse" />
                <div className="flex flex-col">
                    <span className={`text-sm ${getTypographyAlternateTheme(theme)}`}>Loading</span>
                    <div className="relative mt-2">
                        <div className={`h-1 w-full opacity-20 absolute rounded-lg ${getButtonTheme(theme)}`} />
                        <div className={`h-1 w-1/2 absolute rounded-lg ${getButtonTheme(theme)}`} />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`flex items-center justify-between ${border ? "mb-6 shadow-xl shadow-primary/10" : "mb-0"} py-2 px-4 ${extra ? "rounded-t-lg" : "rounded-lg"} hover:bg-primary/10 relative`}>
            <div className="flex items-center space-x-4">
                <Avatar icon={icon} theme={theme} rounded />
                <div className="flex flex-col">
                    <div className='text-xl font-semibold'>{!count && count != 0 ? NOT_AVAILABLE : count.toString()}</div>
                    <div className="pt-1">
                        <span className={`text-sm ${getTypographyAlternateTheme(theme)}`}>{label}</span>
                    </div>
                    <span className='text-xs'>{meta}</span>
                </div>
            </div>
            <div className={`flex flex-col space-y-4 pl-8 ${trend === 'up' ? 'text-success' : 'text-danger'}`}>
                {trend === 'up' ? <TrendingUp size={18} /> : <TrendingDown size={18} />}
                <span className={`${trend === 'up' ? "text-success" : "text-danger"} text-xs`}>6%</span>
            </div>
            {extra &&
                <div className="bg-primary absolute -bottom-8 left-0 right-0 rounded-b-lg py-1 px-2">
                    <span className="text-light text-xs">{extra}</span>
                </div>
            }
        </div>
    );
};
