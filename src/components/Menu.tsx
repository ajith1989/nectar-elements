import cuid from 'cuid';
import React, { FC } from 'react';
import { MenuProps } from '../utils/types';
import { Hyperlink } from './Hyperlink';
import { MenuItem } from './MenuItem';

/**
 * Layout will be rendered based on Layout Type
 */
export const Menu: FC<MenuProps> = ({ type = 'vertical-collapsed', items }) => {

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
                    <a href={item.link || '#'} key={cuid()}>
                        <MenuItem active={item.active} icon={item.icon} />
                    </a>
                ))}
        </div>
    );
};
