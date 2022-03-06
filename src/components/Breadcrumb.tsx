import React, { FC, HTMLAttributes } from 'react';
import { ChevronRight } from 'react-feather';
import cuid from 'cuid';
import { Hyperlink } from './Hyperlink';

export interface BreadcrumbProps extends HTMLAttributes<HTMLDivElement> {
    /** Input data to build Breadcrumbs */
    items: Array<{
        label: string,
        link?: string
    }>
}

/**
 * Breadcrumb component 
 */
export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
    return (
        <div className="flex items-center">
            {
                items?.map((item, index) => {
                    return (
                        <div key={cuid()} className="flex items-center">
                            {item.link ?
                                <Hyperlink label={item.label} link={item.link} showIcon={false} /> :
                                <span>{item.label}</span>}
                            {index + 1 !== items.length && <ChevronRight className="opacity-10" />}
                        </div>
                    )
                })
            }
        </div>
    );
};
