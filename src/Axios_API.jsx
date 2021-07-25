import React from 'react';

import API from '../../api';

export default function Axios_API() {

    const createData = async () => {
        reqBody = {};
        await API.post(`path`, reqBody)
    }

    const getData = async () => {
        await API.get(`path`)
            .then(res => { const result = res.data; });
    }

    const deleteData = async id => {
        await API.delete(`path/${id}`)
    }

    const updateData = async id => {
        reqBody = {};
        await API.put(`path/${id}`, reqBody)
    }

    return (
        <div>
            <p>Use axios</p>
        </div>
    );
}