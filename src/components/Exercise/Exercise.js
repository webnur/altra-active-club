import React from 'react';
import './Exercise.css'

const Exercise = ({time, breakTime}) => {
    let totalTime = 0;
    for(const activity of time){
        totalTime = totalTime + activity.time;

    }
   
    return (
        <div>
        <h2>Exercise Details</h2>
        <div>
            <div className='exercise-details'>
                <h4>Exercise time</h4>
                <p>{totalTime} minutes</p>
            </div>
            <div className='exercise-details'>
                <h4>Break time</h4>
                <p>{breakTime} minutes</p>
            </div>
        </div>
    </div>
    );
};

export default Exercise;