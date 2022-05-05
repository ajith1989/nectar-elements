import React, { FC } from 'react';
import { getButtonTheme, getTypographyTheme } from '../utils/helpers';
import { ProgressProps } from '../utils/types';
import { Tag } from './Tag';

/**
 * Progres component wraps all progress styles in the design system
 */
export const Progress: FC<ProgressProps> = ({ label, percentage = 0, theme = 'primary', showPercentage = true, loading = false }) => {

    if (loading) {
        return (
            <div className="flex flex-col">
                {label && <span className={`${getTypographyTheme(theme)} text-sm`}>Loading</span>}
                <div className="relative h-4 w-full mt-1">
                    <div className={`${getButtonTheme(theme)} h-4 absolute bg-opacity-20 w-full rounded-md`} />
                    <div className={`${getButtonTheme(theme)} h-4 absolute rounded-md animate-pulse`} style={{ width: `20%` }} />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            {label && <span className={`${getTypographyTheme(theme)} text-sm`}>{label}</span>}
            <div className="flex items-center space-x-2">
                <div className="relative h-4 w-full">
                    <div className={`${getButtonTheme(theme)} h-4 absolute bg-opacity-20 w-full rounded-md`} />
                    <div className={`${getButtonTheme(theme)} h-4 absolute rounded-md`} style={{ width: `${percentage}%` }} />
                </div>
                {showPercentage && <Tag theme={theme}>{`${percentage.toString()}%`}</Tag>}
            </div>
        </div>
    );
};
