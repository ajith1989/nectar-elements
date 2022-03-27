import React, { FC, useState } from 'react';
import { Star } from 'react-feather';
import { RatingProps } from '../utils/types';
import { Tag } from './Tag';

/**
 * Rating Component
 */
export const Rating: FC<RatingProps> = ({ value = 0, type = 'full' }) => {
    const [rating, setRating] = useState(() => getInitialRating());

    function getInitialRating() {
        if (value > 5) return 5
        if (value < 1) return 0
        return Math.round(value)
    }

    if (type === 'tag') return <Tag theme='warning' icon={Star}>{value.toFixed(2)}</Tag>

    return (
        <div className='flex space-x-2 items-center'>
            <Star className={`${rating > 0 ? 'text-warning' : 'text-dark/50'} ${type === 'read-only' ? 'cursor-default' : 'cursor-pointer'}`} onClick={type === 'full' ? () => setRating(1) : undefined} />
            <Star className={`${rating > 1 ? 'text-warning' : 'text-dark/50'} ${type === 'read-only' ? 'cursor-default' : 'cursor-pointer'}`} onClick={type === 'full' ? () => setRating(2) : undefined} />
            <Star className={`${rating > 2 ? 'text-warning' : 'text-dark/50'} ${type === 'read-only' ? 'cursor-default' : 'cursor-pointer'}`} onClick={type === 'full' ? () => setRating(3) : undefined} />
            <Star className={`${rating > 3 ? 'text-warning' : 'text-dark/50'} ${type === 'read-only' ? 'cursor-default' : 'cursor-pointer'}`} onClick={type === 'full' ? () => setRating(4) : undefined} />
            <Star className={`${rating > 4 ? 'text-warning' : 'text-dark/50'} ${type === 'read-only' ? 'cursor-default' : 'cursor-pointer'}`} onClick={type === 'full' ? () => setRating(5) : undefined} />
        </div>
    );
};
