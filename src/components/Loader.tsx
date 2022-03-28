import React, { FC } from 'react';
import { LOADING_TEXT } from '../utils/messages';
import { LoaderProps } from '../utils/types';
import { Quote } from './Quote';

/**
 * Loader Component
 */
export const Loader: FC<LoaderProps> = ({ message }) => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <Quote gradient='gradient1' className='animate-pulse'>{message || LOADING_TEXT}</Quote>
        </div>
    );
};
