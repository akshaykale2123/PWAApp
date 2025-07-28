import React from 'react';
import './SpecialOffers.css';

const SpecialOffers = () => {
    const offers = [
        {
            title: "Weekend Special",
            discount: "20% OFF",
            description: "On all main courses",
            code: "WEEKEND20",
            background: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Family Bundle",
            discount: "Save $25",
            description: "Order for 4 or more",
            code: "FAMILY25",
            background: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <div className="special-offers">
            <h2>Special Offers</h2>
            <div className="offers-grid">
                {offers.map((offer, index) => (
                    <div
                        key={index}
                        className="offer-card"
                        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${offer.background})` }}
                    >
                        <div className="offer-content">
                            <h3>{offer.title}</h3>
                            <p className="offer-discount">{offer.discount}</p>
                            <p className="offer-description">{offer.description}</p>
                            <div className="offer-code">
                                <span>Use code: </span>
                                <strong>{offer.code}</strong>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpecialOffers;
