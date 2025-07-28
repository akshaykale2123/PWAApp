import React from 'react';
import './Statistics.css';

const Statistics = () => {
    return (
        <div className="statistics">
            <div className="stat-card">
                <h3>Daily Orders</h3>
                <p className="stat-number">150+</p>
                <div className="stat-trend positive">↑ 12%</div>
            </div>
            <div className="stat-card">
                <h3>Happy Customers</h3>
                <p className="stat-number">2.5k+</p>
                <div className="stat-trend positive">↑ 8%</div>
            </div>
            <div className="stat-card">
                <h3>Menu Items</h3>
                <p className="stat-number">85+</p>
                <div className="stat-trend neutral">→</div>
            </div>
        </div>
    );
};

export default Statistics;
