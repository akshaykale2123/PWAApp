import React from 'react';
import './Categories.css';

const Categories = () => {
    const categories = [
        {
            name: 'Main Course',
            icon: '🍽️',
            count: 45
        },
        {
            name: 'Appetizers',
            icon: '🥗',
            count: 20
        },
        {
            name: 'Desserts',
            icon: '🍰',
            count: 15
        },
        {
            name: 'Beverages',
            icon: '🥤',
            count: 25
        }
    ];

    return (
        <div className="categories">
            <h2>Menu Categories</h2>
            <div className="categories__grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        <span className="category-icon">{category.icon}</span>
                        <h3>{category.name}</h3>
                        <p>{category.count} items</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
