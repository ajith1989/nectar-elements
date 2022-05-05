import cuid from 'cuid';
import React, { FC } from 'react';
import { Check, Loader } from 'react-feather';
import { TimelineProps } from '../utils/types';
import { Badge } from './Badge';
import { Tag } from './Tag';
import { Typography } from './Typography';

/**
 * Timeline component
 */
export const Timeline: FC<TimelineProps> = ({ items, loading = false }) => {

    if (loading) {
        return (
            <div className='border-l border-primary/70 border-dashed animate-pulse'>
                <div className='mb-10 flex items-start space-x-6 -ml-4'>
                    <Badge icon={Loader} theme="primary" />
                    <div className='flex flex-col space-y-1 w-full'>
                        <div className='h-6 w-3/4 bg-light rounded-sm' />
                        <div className='h-6 w-1/2 bg-light rounded-sm' />
                    </div>
                </div>
                <div className='mb-10 flex items-start space-x-6 -ml-4'>
                    <Badge icon={Loader} theme="primary" />
                    <div className='flex flex-col space-y-1 w-full'>
                        <div className='h-6 w-3/4 bg-light rounded-sm' />
                        <div className='h-6 w-1/2 bg-light rounded-sm' />
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='border-l border-primary/70 border-dashed'>
            {
                items &&
                items.map(item => (
                    <div className='mb-10 flex items-start space-x-6 -ml-4' key={cuid()}>
                        <Badge icon={Check} theme="success" />
                        <div className='flex flex-col space-y-1'>
                            <div className='inline-block'>
                                <Tag theme='primary'>{item.time}</Tag>
                            </div>
                            <div className='flex flex-col'>
                                <Typography type='body'>{item.title}</Typography>
                                <div className='opacity-75'>
                                    <Typography type='small'>{item.description}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};
