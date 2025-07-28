import React from 'react';
import './FeaturedItems.css';

const FeaturedItems = () => {
    const featuredItems = [
        {
            name: 'Signature Burger',
            price: '$12.99',
            image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            rating: 4.8
        },
        {
            name: 'Mediterranean Salad',
            price: '$9.99',
            image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            rating: 4.6
        },
        {
            name: 'Grilled Salmon',
            price: '$24.99',
            image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            rating: 4.9
        }
    ];

    return (
        <div className="featured-items">
            <h2>Featured Items</h2>
            <div className="featured-items__slider">
                {featuredItems.map((item, index) => (
                    <div key={index} className="featured-card">
                        <div className="featured-card__image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="featured-card__content">
                            <h3>{item.name}</h3>
                            <div className="featured-card__details">
                                <span className="price">{item.price}</span>
                                <span className="rating">⭐ {item.rating}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedItems;
