import React from 'react';
import './PopularDishes.css';

const PopularDishes = () => {
    const dishes = [
        {
            name: 'Classic Pizza',
            price: '$14.99',
            image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            orders: 120
        },
        {
            name: 'Pasta Carbonara',
            price: '$16.99',
            image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            orders: 95
        },
        {
            name: 'Caesar Salad',
            price: '$11.99',
            image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
            orders: 75
        }
    ];

    return (
        <div className="popular-dishes">
            <h2>Most Popular</h2>
            <div className="dishes-grid">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish-card">
                        <div className="dish-card__image">
                            <img src={dish.image} alt={dish.name} />
                            <div className="dish-card__orders">{dish.orders} orders this week</div>
                        </div>
                        <div className="dish-card__content">
                            <h3>{dish.name}</h3>
                            <p className="dish-card__price">{dish.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularDishes;
