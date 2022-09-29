import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
import image from '../../images/profile.jpg';
import {addToStore, breakTimeStore, getStoredTime } from '../../utilites/fakebd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([0])
    const [breakTime, setBreakTime] = useState([0]);

    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setActivities(data))
    },[])

    // useEffect(() => {
    //     console.log('frist time call', activities)
    //    const storedTime = getStoredTime()
    //    console.log(storedTime)
    //    for(const time in storedTime){
    //     console.log(time)
    //     const added = activities.find(activity => console.log(activity.time === time))
     
        
    //    }
    // },[activities])

    // useEffect(() => {
    //     // const storedTime = getStoredTime()
    //     // console.log(storedTime);
    //     setTime(() => getStoredTime())
      
    // },[activities])



    const handleTimeAdd = time => {
        const newTime = time;
        setTime(newTime)
        addToStore(time)
    }

    const handleBreakTime = time => {
        setBreakTime(time);
        addToStore(time)
        
    }

    return (
        <div className='activities-container'>
        <div className='activities'>
            {
                activities.map(activity => <Activity activity={activity} handleTimeAdd={handleTimeAdd} key={activity.id} />)
            }
        </div>
        <div className='history'>
            <div className='profile'>
                <img src={image} alt="Hello" />
                <div className='profile-info'>
                    <p>Nurul Islam</p>
                    <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Chandpur, Bangladesh</p>
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

            <div>
                <h1>Add a Break</h1>
                <div className='btn-group'>
                    <button className='btn-time' onClick={() => handleBreakTime(10)}>10m</button>
                    <button className='btn-time' onClick={() => handleBreakTime(20)}>20m</button>
                    <button className='btn-time' onClick={() => handleBreakTime(30)}>30m</button>
                    <button className='btn-time' onClick={() => handleBreakTime(40)}>40m</button>
                    <button className='btn-time' onClick={() => handleBreakTime(50)}>50m</button>
                </div>
            </div>

            {/* Exercise Details */}
            <div>
                <h2>Exercise Details</h2>
                <div>
                    <div className='exercise-details'>
                        <h4>Exercise time</h4>
                        <p>{time} minutes</p>
                    </div>
                    <div className='exercise-details'>
                        <h4>Break time</h4>
                        <p>{breakTime} minutes</p>
                    </div>
                </div>
            </div>

            {/* Activity Completed button  */}
            <div className='btn-complete'>
                <button className='btn-activity-complete'>Activity Completed</button>
            </div>
        </div>
        </div>
    );
};

export default Activities;