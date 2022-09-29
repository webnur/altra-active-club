import React, { useEffect, useState } from 'react';
import './Activities.css'

const Activities = () => {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setActivities(data))
    },[])
    return (
        <div className='activities-container'>
        <div className='activities'>
            <h1>activities</h1>
            {
                activities.map(activity => console.log(activity))
            }
        </div>
        <div className='history'>
            <h1>History</h1>
        </div>
        </div>
    );
};

export default Activities;