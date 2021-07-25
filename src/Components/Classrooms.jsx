import React, { useState, useEffect } from 'react';

export default function Classrooms(props) {

    const [classrooms, setClassrooms] = useState([]);
    

    const fetchdata = async () => {
        const result = await fetch("http://127.0.0.1:8000/api/classroom");
        const data = await result.json();
        setClassrooms(data);
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <select onClick={props.omar}>
            <option  disabled value={null}>Classroom</option>
            {classrooms.map(classroom => (
                <option
                    key={classroom.id}
                    value={classroom.id}
                >
                    {classroom.name}
                </option>
            ))}
        </select>
    );
}