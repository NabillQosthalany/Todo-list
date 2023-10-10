import React from 'react';

function RadioButton({name, value, label, checked, onChange}) {
    return (
        <div className="flex items-center">
            <input
                type="radio"
                className="form-radio text-indigo-600"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
            />
            <span className="ml-2 text-white">{label}</span>
        </div>
    );
}

export default RadioButton;
