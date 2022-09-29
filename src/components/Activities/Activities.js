import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
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
            {
                activities.map(activity => <Activity activity={activity} key={activity.id} />)
            }
        </div>
        <div className='history'>
            <h1>History</h1>
        </div>
        </div>
    );
};

export default Activities;