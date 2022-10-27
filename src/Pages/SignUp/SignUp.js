import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../../Contexts/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    // const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.ConfirmPassword.value;
        // console.log(name, photoURL, email, password);

        if (password === confirmPassword) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    setError('');
                    setRegisterSuccess("Successfully Registered! ")
                    form.reset();
                    handleUpdateUserProfile(name, photoURL);
                    // handleEmailVerification();
                    // toast.success('Please verify your email address.')
                })
                .catch(e => {
                    console.error(e);
                    setRegisterSuccess('')
                    setError(e.message);
                });

        }
        else {
            setError("Please Confirm your valid password!")
        }


    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (
        <Container>
            <div className='w-75 mb-5' >
                <div className='form-title'><h3>Sign Up Here</h3></div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name="ConfirmPassword" type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Button variant="primary" type="submit" className='mb-4'>
                        Register
                    </Button>
                    <br></br>
                    <Form.Text className="text-danger">
                        <strong className='fs-5'>{error}</strong>
                    </Form.Text>
                    <Form.Text className="text-success">
                        <strong className='fs-5'>{registerSuccess}</strong>
                    </Form.Text>
                    <Form.Text className="text-primary ">
                        <p><strong>Already have an account? Please <Link to='/login'>Log In</Link></strong></p>
                    </Form.Text>
                </Form>
            </div>
        </Container>
    );
};

export default SignUp;