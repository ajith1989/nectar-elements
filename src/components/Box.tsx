import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Gradient } from '../utils/types';
import { getGradientStyle } from '../utils/helpers';
export interface BoxProps extends HTMLAttributes<HTMLDivElement> {
    /** Box child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the Box gradient defined in the design system */
    gradient?: Gradient;
}

function getBoxTextStyle(gradient: Gradient) {
    if (gradient === 'gradient1' || gradient === 'dark') return 'text-white';
    return 'text-dark'
}

/**
 * Box component wraps all box styles in the design system
 */
export const Box: FC<BoxProps> = ({ gradient = 'gradient1', children }) => {
    return (
        <div className={`w-full p-12 rounded-lg ${getGradientStyle(gradient)}`}>
            <div className={`text-xl font-semibold ${getBoxTextStyle(gradient)}`}>{children}</div>
        </div>
    );
};
