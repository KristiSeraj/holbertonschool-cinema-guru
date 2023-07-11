import React from 'react';
import './components.css';

const Activity = ({ items }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return (
        <div className='activityContainer'>
            <h1>Latest Activities</h1>
            <ul className='activityList'>
                {items.slice(0, 10).map(item => (
                    <li><p><span>{item.user.username}</span> added <span>{item.title.title}</span> to {item.activityType} - {new Date(item.updatedAt).toLocaleDateString(undefined, options)}</p></li>
                ))}
            </ul>
        </div>
    )
};

export default Activity;