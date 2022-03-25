import React, { FC } from 'react';
import { SpacerProps } from '../utils/types';

/**
 * Adds space between components
 */
export const Spacer: FC<SpacerProps> = ({ size = 'medium' }) => {
    function getPadding() {
        if (size === 'large') {
            return 'mb-12'
        }
        if (size === 'small') {
            return 'mb-4'
        }
        return 'mb-8'
    }
    return <div className={`${getPadding()}`} />
};
