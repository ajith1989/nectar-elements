import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Gradient, Size } from '../utils/types';
import { getGradientStyle, getFontSize } from '../utils/helpers';
export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
    /** Quote child can be a React Node or a String */
    children: ReactChild | string;
    /** Optional. Specifies the Quote gradient defined in the design system */
    gradient?: Gradient;
    /** Optional. Specifies the Quote font size defined in the design system */
    size?: Size;
}

/**
 * Quote component wraps all quote styles in the design system
 */
export const Quote: FC<QuoteProps> = ({ gradient = 'gradient1', children = 'Quote', size = 'large' }) => {
    return (
        <div className={`${getGradientStyle(gradient)} ${getFontSize(size)} font-bold bg-clip-text text-transparent`}>
            {children}
        </div>
    );
};
