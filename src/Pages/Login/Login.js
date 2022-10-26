import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider';
// import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const { providerLogin, signIn, setLoading } = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
                // if (user.emailVerified) {
                //     navigate(from, { replace: true });
                // }
                // else {
                //     toast.error('Your email is not verified. Please verify your email address.')
                // }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleGoogleSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                // console.log(user)
            })
            .catch(error => console.error())

    }

    const handleGithubSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true })
                console.log(user)
            })
            .catch(error => console.error())

    }
    return (
        <Container className='d-lg-flex justify-content-between mt-5 '>
            <div className='w-50 mb-5' >
                <div className='form-title'><h3> Log In Form:</h3></div>

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label><strong>Email address</strong></Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label><strong>Password</strong></Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='mb-4'>
                        Login
                    </Button>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    <Form.Text className="text-primary ">
                        <p><strong>Don't you have any account? Please <Link to='/register'>Sign Up</Link></strong></p>
                    </Form.Text>
                </Form>
            </div>

            <div className='btn-group-login'>

                <ButtonGroup vertical>
                    <Button className='login-others-btn' onClick={handleGoogleSignIn} variant="outline-primary"><FaGoogle></FaGoogle> Log in With Google</Button>
                    <Button className='login-others-btn' variant="outline-primary" onClick={handleGithubSignIn}><FaGithub></FaGithub>Log in With Github</Button>
                </ButtonGroup>

            </div>


        </Container>
    );
};

export default Login;