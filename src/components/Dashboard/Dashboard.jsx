import React from 'react';
import './Dashboard.css';
import FeaturedItems from './sections/FeaturedItems';
import PopularDishes from './sections/PopularDishes';
import Categories from './sections/Categories';
import SpecialOffers from './sections/SpecialOffers';
import Statistics from './sections/Statistics';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <section className="dashboard__hero">
                <div className="hero__content">
                    <h1>Welcome to Yomo Restaurant</h1>
                    <p>Discover our delicious meals and special offers</p>
                </div>
            </section>

            <div className="dashboard__grid">
                <Statistics />
                <Categories />
                <FeaturedItems />
                <PopularDishes />
                <SpecialOffers />
            </div>
        </div>
    );
};

export default Dashboard;
