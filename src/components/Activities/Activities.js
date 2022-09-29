import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import './Activities.css'
import image from '../../images/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import Exercise from '../Exercise/Exercise';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activities = () => {
    const notify = () => toast("Wow, successfully you have done the work!");
    const [activities, setActivities] = useState([]);
    const [time, setTime] = useState([])
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        fetch('fakeData.json')
        .then(response => response.json())
        .then(data => setActivities(data))
    },[])

    const handleTimeAdd = activity => {

        const newTime = [...time, activity]
        setTime(newTime)
    }

    useEffect(() => {
        const newTime = localStorage.getItem('stored-time')
        setBreakTime(newTime)
    },[])
    const handleBreakTime = time => {
        setBreakTime(time);
        localStorage.setItem('stored-time', time)
      
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


            <Exercise time={time} breakTime={breakTime}></Exercise>


            {/* Activity Completed button  */}
            <div className='btn-complete'>
                
                <button className='btn-activity-complete' onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default Activities;