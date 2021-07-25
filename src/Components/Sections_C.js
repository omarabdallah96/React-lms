import React, { useState, useEffect } from 'react';

import API from '../api'

export default function Sections_List(props) {

    const id = props.idClass;

    const [sections, setSections] = useState([]);

    const fetchdata = async () => {
        const id = props.idClass;
        await API.get(`sectionClass/${id}`)
            .then(res => {
                const data = res.data;
                setSections(data);
            });
    }

    useEffect(() => {
        fetchdata();
    }, [id]);

    return (
        <select
            onChange={props.aymie}
        >
            <option value={null}>Section</option>

            {sections.map(section => (
                <option
                    key={section.id}
                    value={section.id}
                >
                    {section.name}
                </option>
            ))}

        </select>
    );
}