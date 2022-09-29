import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
import image from '../../images/profile.jpg';

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
            <div className='profile'>
                <img src={image} alt="Hello" />
                <div className='profile-info'>
                    <p>Nurul Islam</p>
                    <p>Chandpur, Bangladesh</p>
                </div>
            </div>
            <div className="more-info">
                <div className='info'>
                    <h4>75 kg</h4>
                    <h3>Weight</h3>
                </div>
                <div className='info'>
                    <h4>6.6</h4>
                    <h3>Height</h3>
                </div>
                <div className='info'>
                    <h4>24yrs</h4>
                    <h3>Age</h3>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Activities;