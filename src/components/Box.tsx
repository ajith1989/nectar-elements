import React, { FC } from 'react';
import { GradientTypes } from '../utils/enums';
import { getGradientStyle } from '../utils/helpers';
import { BoxProps } from '../utils/types';


function getBoxTextStyle(gradient: GradientTypes) {
    if (gradient === 'gradient1' || gradient === 'dark') return 'text-white';
    return 'text-dark'
}

/**
 * Box component wraps all box styles in the design system
 */
export const Box: FC<BoxProps> = ({ gradient = 'gradient1', children, className, style }) => {
    return (
        <div role="banner" className={`w-full p-12 rounded-lg ${getGradientStyle(gradient)} ${className}`} style={style}>
            <div className={`text-xl font-semibold ${getBoxTextStyle(gradient)}`}>{children}</div>
        </div>
    );
};
