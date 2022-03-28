import React, { FC } from 'react';
import { getGradientStyle, getFontSize } from '../utils/helpers';
import { QuoteProps } from '../utils/types';

/**
 * Quote component wraps all quote styles in the design system
 */
export const Quote: FC<QuoteProps> = ({ gradient = 'gradient1', children = 'Quote', size = 'large', className }) => {
    return (
        <div className={`${getGradientStyle(gradient)} ${getFontSize(size)} font-bold bg-clip-text text-transparent ${className}`}>
            {children}
        </div>
    );
};
