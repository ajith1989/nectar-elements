import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { InputType } from '../utils/types';

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /** Specifies Input type */
    type: InputType,
    /** Label for Input Component */
    label?: string,
    /** Placeholder for Input Component */
    placeholder?: string,
    /** Name variable for Input Component */
    name: string,
    /** Specifies required or not validation */
    required?: boolean,
    /** Min number count */
    min?: number,
    /** Max number count */
    max?: number,
    /** Min Length count */
    minLength?: number,
    /** Max Length count */
    maxLength?: number,
    /** Validation Reg Expression */
    pattern?: string,
    /** Specifies disabled or not */
    disabled?: boolean,
    /** Register function of react hook form */
    register: Function,
    /** Options for input component */
    options?: string[],
    /** Specifies multiple or not */
    multiple?: boolean
}

const InputWrapper = ({ label, children }: {
    label?: string;
    children: ReactChild;
}) => (
    <label className="flex flex-col space-y-1">
        {label && <span className="text-sm opacity-60">{label}</span>}
        {children}
    </label>
)

/**
 * Input component wraps all input elements
 */
export const Input: FC<InputProps> = ({
    type = 'text',
    label, placeholder = 'Enter Input',
    name,
    required = false,
    min,
    max,
    minLength,
    maxLength,
    pattern,
    register,
    disabled = false,
    options = [],
    multiple = false
}) => {
    if (type === 'select') {
        return (
            <InputWrapper label={label}>
                <select
                    multiple={multiple}
                    placeholder={placeholder}
                    {...register(name, {
                        required,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        pattern
                    })}
                >
                    {options?.length ?
                        options.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))
                        :
                        <option key="" value="">Choose an option</option>
                    }
                </select>
            </InputWrapper>
        )
    }

    if (type === 'textarea') {
        return (
            <InputWrapper label={label}>
                <textarea
                    placeholder={placeholder}
                    {...register(name, {
                        required,
                        minLength,
                        maxLength,
                        min,
                        max,
                        disabled,
                        pattern
                    })}
                />
            </InputWrapper>
        )
    }

    return (
        <InputWrapper label={label}>
            <input
                className="placeholder-shown:font-normal"
                type={type}
                placeholder={placeholder}
                {...register(name, {
                    required,
                    minLength,
                    maxLength,
                    min,
                    max,
                    disabled,
                    pattern
                })} />
        </InputWrapper>
    )
};
