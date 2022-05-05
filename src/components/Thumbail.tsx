import React, { FC } from 'react';
import { ThumbnailProps } from '../utils/types';
import { Tag } from './Tag';
import { Typography } from './Typography';

/**
 * Box component wraps all box styles in the design system
 */
export const Thumbnail: FC<ThumbnailProps> = ({ title, description, tag, image, link, onClick, clickable, loading = false }) => {

    if (loading) {
        return (
            <div className='flex flex-col space-y-4 h-96'>
                <div className='h-[80%] w-full bg-light animate-pulse rounded-lg' />
                <div className='h-[15%] w-3/4 bg-gradient-to-r from-primary to-secondary animate-pulse rounded-lg' />
                <div className='h-[5%] w-1/2 bg-light animate-pulse rounded-md' />
            </div>
        )
    }

    return (
        <a href={link || undefined}>
            <div className={`relative shadow-lg w-full h-96 group ${link || onClick || clickable ? 'cursor-pointer' : 'cursor-default'}`} onClick={onClick}>
                {image ?
                    <div className="absolute inset-0 rounded-lg overflow-hidden">{image}</div>
                    :
                    <div className='flex items-center justify-center h-full bg-secondary/10 rounded-lg'>
                        <Typography type='title' theme='primary'>tenex.</Typography>
                    </div>
                }
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-dark p-4 rounded-b-lg">
                    <div className='max-w-max'>
                        {title && <Typography type='body' theme='light'>{title}</Typography>}
                        {description && <Typography type='small' theme='light'>{description}</Typography>}
                        {
                            tag &&
                            <div className='mt-2'>
                                <Tag>{tag}</Tag>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </a>
    );
};
