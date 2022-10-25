import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Checkout = () => {
    const { user } = useContext(AuthContext)
    const courseCheckout = useLoaderData();
    const name = courseCheckout[0].name;
    const ratings = courseCheckout[0].ratings;
    const image = courseCheckout[0].image;
    const enrolled = courseCheckout[0].enrolled;
    const Course_description = courseCheckout[0].Course_description;
    return (
        <div>
            <Container>
                <div ><h3>Congratulations {user?.displayName}! Now You got the access ....</h3></div>
                <div>
                    <>
                        <p>Course Description : {Course_description}</p>
                        <p>Video Link:  <a href="https://www.udemy.com/course/1-hour-html/"> Start Class</a> </p>
                    </>


                </div>



            </Container>

        </div>
    );
};

export default Checkout;