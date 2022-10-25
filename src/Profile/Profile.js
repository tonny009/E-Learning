import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>Name: {user?.displayName}</h2>
        </div>
    );
};

export default Profile;