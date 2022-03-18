import React, { FC, HTMLAttributes } from 'react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { Theme } from '../utils/types';
import { getButtonTheme } from '../utils/helpers';
export interface ToggleProps extends HTMLAttributes<HTMLElement> {
    /** Optional. Label for Toggle component */
    label?: string;
    /** Optional. Specifies checked state of Toggle component */
    checked?: boolean;
    /** Optional. Specifies the button theme defined in the design system */
    theme?: Theme;
}

/**
 * Toggle component
 */
export const Toggle: FC<ToggleProps> = ({ label, checked = false, theme = 'primary' }) => {
    const [enabled, setEnabled] = useState(checked);
    return (
        <Switch.Group>
            <div className="flex items-center">
                {label && <Switch.Label className="mr-4">{label}</Switch.Label>}
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? `${getButtonTheme(theme)}` : 'bg-dark/50'
                        } relative inline-flex items-center h-6 rounded-full w-11`}
                >
                    <span className="sr-only">{label}</span>
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block w-4 h-4 transform bg-light rounded-full`}
                    />
                </Switch>
            </div>
        </Switch.Group>
    );
};
