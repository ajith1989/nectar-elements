import React, { FC, ReactChild } from 'react';
import { DirectionTypes } from '../utils/enums';
import { InputProps } from '../utils/types';



const InputWrapper = ({ label, children, direction }: {
    label?: string;
    children: ReactChild;
    direction: DirectionTypes
}) => (
    <label className={`flex ${direction === 'vertical' ? "flex-col space-y-1" : "flex-row space-x-2 items-center"}`}>
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
    multiple = false,
    direction = 'vertical'
}) => {
    if (type === 'select') {
        return (
            <InputWrapper label={label} direction={direction}>
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
            <InputWrapper label={label} direction={direction}>
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
        <InputWrapper label={label} direction={direction}>
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
