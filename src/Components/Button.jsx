import React from 'react';

export default function Button(props) {
    return (
        <button
            type={props.type}
            name={props.name}
            value={props.value}
            onClick={props.onClick}
        >
            {props.description}
        </button>
    );
}