import React, { FC } from 'react';
import { UploadProps } from '../utils/types';
import { Button } from './Button';

/**
 * Upload component
 */
export const Upload: FC<UploadProps> = ({
    label,
    name,
    id,
    multiple = false,
    theme = 'primary',
    accept,
    direction = 'vertical'
}) => (
    <label className={`flex ${direction === 'vertical' ? "flex-col space-y-1" : "flex-row space-x-2 items-center"}`}>
        {label && <span className="text-sm opacity-60">{label}</span>}
        <input className='hidden' type="file" name={name} id={id} multiple={multiple} accept={accept} />
        <Button theme={theme} icon={Upload}>Upload File</Button>
    </label>
)
