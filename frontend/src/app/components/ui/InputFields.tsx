import React from 'react';

interface InputFieldProps {
    /** Text displayed above the input field */
    label: string;
    /** Placeholder text when empty */
    placeholder?: string;
    /** Current value of the field */
    value: string | number;
    /** Input type (ignored if large = true) */
    type?: 'text' | 'number' | 'email' | 'password';
    /** If true, renders a <textarea> instead of an <input> */
    large?: boolean;
    /** Callback fired when the value changes */
    onChange: (newValue: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
    label,
    placeholder = '',
    value,
    type = 'text',
    large = false,
    onChange,
}) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        onChange(e.target.value);
    };

    const baseClassName =
        'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900';

    // Use textarea when large is true, otherwise a regular input
    if (large) {
        return (
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">{label}</label>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    className={`${baseClassName} min-h-[100px] resize-y`}
                    rows={4}
                />
            </div>
        );
    }

    return (
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className={baseClassName}
            />
        </div>
    );
};