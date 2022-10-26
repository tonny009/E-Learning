import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AuthContext } from '../Contexts/AuthProvider';
import './Profile.css'
import userPic from '../assests/us.jpg'

const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <Container>
            <div className='profile'>
                <div className='text-center pb-5 '><img src={user?.photoURL} alt="No User Picture " srcset="" /> </div>
                <h2>Name: {user?.displayName}</h2>
                <h2>Email: {user?.email}</h2>
            </div>
        </Container>

    );
};

export default Profile;