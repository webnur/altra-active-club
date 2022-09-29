import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div>
            <h2 className='question-title'>Some Questions and answers</h2>
            <div className='post-container'>        
                <div className='post'>
                    <h4>How does React Work?</h4>
                    <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code</p>
                </div>
                <div className='post'>
                    <h4>What are the differences between props and state in react js?</h4>
                    <p>Ans : Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
                </div>
                <div className='post'>
                    <h4>why use useEffect without data load in react js?</h4>
                    <p>Ans: The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments</p>
                </div>
            </div>
        </div>
        
    );
};

export default Questions;