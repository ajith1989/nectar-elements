import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { Theme, Icon, ListType } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';
import { Typography } from './Typography';
import { Avatar } from './Avatar';
import { Tag } from './Tag';
export interface ListProps extends HTMLAttributes<HTMLDivElement> {
    /** List Title */
    title: string;
    /** Optional. List SubTitle */
    subTitle?: string;
    /** Optional. List Description */
    description?: ReactChild | string;
    /** Optional. List Tag */
    tag?: string;
    /** Optional. Tag Theme */
    tagTheme?: Theme;
    /** Optional. List footer */
    footer?: ReactChild | string;
    /** Thumbnail Image Component */
    image?: ReactChild;
    /** Optional. Specifies the list theme defined in the design system */
    theme?: Theme;
    /** Optional. Prefix icon before the list component */
    icon?: Icon;
    /** Optional. Prefix icon before the list component */
    layout?: ListType;
}

/**
 * List component wraps all button styles in the design system
 */
export const List: FC<ListProps> = ({ title, subTitle, description, tag, icon, image, theme = "primary", footer, layout = 'full', tagTheme = 'primary' }) => {

    if (layout === 'thumbnail') {
        return (
            <div className="relative shadow-lg w-full h-96 group">
                {image ?
                    <div className="absolute inset-0 rounded-lg overflow-hidden">{image}</div>
                    :
                    <div className='flex items-center justify-center h-full bg-secondary/10 rounded-lg'>
                        <Typography type='title' theme='primary'>tenex.</Typography>
                    </div>
                }
                {tag &&
                    <div className='absolute top-3 left-3'>
                        <span><Tag theme={tagTheme}>{tag}</Tag></span>
                    </div>
                }
                {description &&
                    <div className='absolute top-0 right-0 bg-primary rounded-tr-lg rounded-bl-lg'>

                        <div className='opacity-70 p-4'>
                            <Typography theme="light" type='tiny'>{description}</Typography>
                        </div>
                    </div>
                }
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-dark p-4 rounded-b-lg">
                    <div className='flex items-center space-x-4'>
                        {icon && <Avatar icon={icon} theme={theme} rounded />}
                        <div className="flex flex-col space-y-1">
                            <Typography theme='light' type='body'>{title}</Typography>
                            {subTitle && <Typography theme='light' type='small'>{subTitle}</Typography>}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className='flex flex-col border border-light shadow-sm'>
            <div className='flex items-center justify-between px-4 py-2'>
                <div className='flex items-center space-x-4'>
                    {icon && <Avatar icon={icon} theme={theme} />}
                    <div className={`flex flex-col ${layout === 'compact' ? 'space-y-1' : 'space-y-2'}`}>
                        <Typography theme='dark' type='body'>{title}</Typography>
                        <div className={`flex ${layout === 'compact' ? 'flex-col space-y-2' : 'flex-row items-center space-x-2'} `}>
                            {subTitle && <Typography theme={theme} type='small'>{subTitle}</Typography>}
                            <div className='flex items-center space-x-2'>
                                {tag && layout === 'compact' && <span><Tag theme={tagTheme}>{tag}</Tag></span>}
                                {description &&
                                    <div className='opacity-70'>
                                        <Typography theme="dark" type='tiny'>{description}</Typography>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {tag && layout === 'full' && <Tag theme={tagTheme}>{tag}</Tag>}
            </div>
            {footer && <div className={`${getButtonTheme(theme)} px-4 py-1 rounded-b-md text-xs`}>{footer}</div>}
        </div>
    );
};
