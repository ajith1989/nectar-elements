import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Tag } from './Tag';
import { Typography } from './Typography';

export interface ThumbnailProps extends HTMLAttributes<HTMLDivElement> {
    /** Thumbnail Title */
    title: string;
    /** Thumbnail Description */
    description?: string;
    /** Thumbnail Tag */
    tag?: string;
    /** Thumbnail Image Component */
    image?: ReactChild;
}

/**
 * Box component wraps all box styles in the design system
 */
export const Thumbnail: FC<ThumbnailProps> = ({ title, description, tag, image }) => {
    return (
        <div className="relative shadow-lg w-full h-96 group">
            {image ?
                <div className="absolute inset-0 rounded-lg overflow-hidden">{image}</div>
                :
                <div className='flex items-center justify-center h-full bg-secondary/10'>
                    <Typography type='title' theme='primary'>tenex.</Typography>
                </div>
            }
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-dark p-4 rounded-b-lg">
                <div className='max-w-max'>
                    <Typography type='body' theme='light'>{title}</Typography>
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
    );
};
