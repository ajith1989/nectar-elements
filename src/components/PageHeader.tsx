import React, { FC } from 'react';
import { ArrowLeft } from 'react-feather';
import { PageHeaderProps } from '../utils/types';
import { Typography } from './Typography';

/**
 * Page Header
 */
export const PageHeader: FC<PageHeaderProps> = ({ title = 'Title', extra, showBackButton = true, loading = false }) => {

    if (loading) {
        return (
            <div className='w-full flex items-center justify-between p-4 border-b border-light shadow-sm rounded-lg'>
                <div className='h-6 w-3/4 bg-light animate-pulse rounded-sm' />
                <div className='h-4 w-4 bg-light animate-pulse rounded-sm' />
            </div>
        )
    }

    return (
        <div className='w-full flex items-center justify-between p-2 border-b border-light shadow-sm rounded-lg'>
            <div className='flex items-center space-x-2'>
                {showBackButton && <ArrowLeft className='hover:text-primary cursor-pointer hover:translate-x-1 duration-75 transform transition' />}
                <Typography type='body'>{title}</Typography>
            </div>
            <div className='flex items-center space-x-2'>
                {extra}
            </div>
        </div>
    );
};
