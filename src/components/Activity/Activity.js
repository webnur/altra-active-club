import React from 'react';
import './Activity.css'

const Activity = ({activity, handleTimeAdd}) => {
    // console.log(activity)
    const {picture, name, time,} = activity
    return (
        <div className='activity'>
            <div className="activity-image">
                <img src={picture} alt="" />
            </div>
            <div className="activity-info">
                <p>{name}</p>
                <p>Time required : {time} minutes</p>
            </div>
            <button className='btn-activity' onClick={() =>handleTimeAdd(activity)}>Add To list</button>
        </div>
    );
};

export default Activity;