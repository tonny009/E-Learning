import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './Checkout.css'

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const courseCheckout = useLoaderData();
    const name = courseCheckout[0].name;
    const ratings = courseCheckout[0].ratings;
    const image = courseCheckout[0].image;
    const courseLink = courseCheckout[0].courseLink;
    console.log(courseLink)
    const Course_description = courseCheckout[0].Course_description;
    return (
        <div className='checkout-container'>
            <Container>
                <div ><h3>Congratulations <span className='name-show'>{user?.displayName}!</span>  Now You got the access ....</h3></div>
                <div>
                    <>
                        <p><strong>Course Description :</strong> {Course_description}</p>
                        <p><strong>Video Link: </strong> <a className='crs-video-link' href={courseLink}> Start Class</a> </p>
                    </>
                </div>



            </Container>

        </div>
    );
};

export default Checkout;