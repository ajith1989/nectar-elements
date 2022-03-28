import cuid from 'cuid';
import React, { FC } from 'react';
import { Check } from 'react-feather';
import { TimelineProps } from '../utils/types';
import { Badge } from './Badge';
import { Tag } from './Tag';
import { Typography } from './Typography';

/**
 * Timeline component
 */
export const Timeline: FC<TimelineProps> = ({ items }) => {
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
