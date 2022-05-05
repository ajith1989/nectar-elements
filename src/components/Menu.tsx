import cuid from 'cuid';
import React, { FC } from 'react';
import { MenuProps } from '../utils/types';
import { Hyperlink } from './Hyperlink';
import { MenuItem } from './MenuItem';

/**
 * Layout will be rendered based on Layout Type
 */
export const Menu: FC<MenuProps> = ({ type = 'vertical-collapsed', items, loading = false }) => {

    if (loading) {
        return (
            <div className='flex flex-col space-y-4'>
                <div className='h-6 w-3/4 bg-light animate-pulse rounded-sm' />
                <div className='h-6 w-1/2 bg-light animate-pulse rounded-sm' />
                <div className='h-6 w-1/4 bg-light animate-pulse rounded-sm' />
            </div>
        )
    }

    if (type === 'vertical-expanded') return (
        <div className="flex flex-col space-y-4">
            {
                items &&
                items.map(item => (
                    item.label && <Hyperlink label={item.label} link={item.link || '#'} showIcon={item.active} key={cuid()} />
                ))}
        </div>
    )
    return (
        <div className="flex flex-col space-y-2">
            {
                items &&
                items.map(item => (
                    item?.link ?
                        <a href={item.link} key={cuid()}>
                            <MenuItem active={item.active} icon={item.icon} />
                        </a>
                        :
                        <div onClick={item.onClick} key={cuid()}>
                            <MenuItem active={item.active} icon={item.icon} />
                        </div>
                ))}
        </div>
    );
};
