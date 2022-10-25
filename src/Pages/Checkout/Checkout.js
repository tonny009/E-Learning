import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseCheckout = useLoaderData();
    const name = courseCheckout[0].name;
    const ratings = courseCheckout[0].ratings;
    const image = courseCheckout[0].image;
    const enrolled = courseCheckout[0].enrolled;
    const Course_description = courseCheckout[0].Course_description;
    return (
        <div>

        </div>
    );
};

export default Checkout;