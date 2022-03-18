import React, { FC, HTMLAttributes } from 'react';
import { ArrowUpRight } from 'react-feather';
export interface HyperlinkProps extends HTMLAttributes<HTMLAnchorElement> {
    /** Label for which hyperlink is to be applied */
    label: string;
    /** Optional. Hyperlink Url */
    link?: string;
    /** Optional. To show or hide icon */
    showIcon?: boolean;
}

/**
 * Hyperlink component
 */
export const Hyperlink: FC<HyperlinkProps> = ({ label = 'Link', link = '#', showIcon = true }) => {
    return (
        <a href={link}>
            <span className="flex items-center space-x-1 text-secondary hover:text-primary group">
                {showIcon && <ArrowUpRight size={16} className="group-hover:translate-x-1 translate transition duration-100" />}
                <span className='text-base group-hover:underline decoration-primary underline-offset-2'>{label}</span>
            </span>
        </a>
    );
};
