import React from 'react';
import './components.css';

const Activity = ({ items, user }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    return (
        <div className='activityContainer'>
            <h1>Latest Activities</h1>
            <ul className='activityList'>
                {items.slice(0, 10).map(item => (
                    item.user.username === user && (
                        <li key={item.id}>
                            <p>
                                <span>{item.user.username} </span>
                                {item.activityType === 'favorite' || item.activityType === 'watchLater' ? 'added ' : 'removed '} 
                                <span>{item.title.title}</span> 
                                {item.activityType === 'favorite' || item.activityType === 'watchLater' ? ' to ' : ' from '}
                                {item.activityType === 'watchLater' || item.activityType === 'favorite' ? item.activityType.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase() : (item.activityType === 'removeFavorited' ? 'favorite' : 'watch later')} - {new Date(item.updatedAt).toLocaleDateString(undefined, options)}
                            </p>
                        </li>
                    )
                ))}
            </ul>
        </div>
    )
};

export default Activity;