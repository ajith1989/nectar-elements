import React, { FC } from 'react';
import { TooltipProps } from '../utils/types';

/**
 * Tooltip component
 */
export const Tooltip: FC<TooltipProps> = ({ children, message }) => {
    return (
        <div className='relative group'>
            <div className='absolute group-hover:animate-pulse'>{children}</div>
            <div role="tooltip" className='absolute text-xs bg-dark/90 text-white -mt-8 px-2 py-1 hidden group-hover:inline-block rounded-md'>
                {message}
            </div>
        </div>
    );
};
