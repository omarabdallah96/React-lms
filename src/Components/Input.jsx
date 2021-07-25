import React from 'react';

export default function Input(props) {
    return (
        <input
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
    );
}