import React, { useState, useContext } from 'react';
import LoginForm from './LoginForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../Assets/RegSplash.avif';
import axios from 'axios';
import { apiHostUrl } from '../../config';
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [newSignIn, setNewSignIn] = useState({
        email:'',
        password: ''
    })

    const navigate = useNavigate();

    const [auth, setAuth] = useContext(AuthContext)

    const updateForm = (field,value) => {
        setNewSignIn({
            ...newSignIn,
            [field]: value
        })
    }

    const onSubmit = () => {
        
        const data = newSignIn;
        data.email = `${data.email}`;
        data.password = `${data.password}`;
        data.username = data.email;
        checkUser(data);

    };

    const checkUser = async (data) => {
        try {
            const res = await axios.post(`${ apiHostUrl }/api/auth/signin`, data);
            setAuth({
                token: res.data.token,
                profile: res.data
            })
            navigate('/')
        } catch (error) {
            console.error(error.message);
        }
        

    } 

    return (
        <Container>
        <Splash image={RegSplash} style={{
            height: '20vh',
            color: '#f1f1f1',

        }}>
                <h1>Login</h1>
        </Splash>
        
        <LoginForm 
            userCred={newSignIn}
            onChange={updateForm}
            onSubmit={onSubmit}
        />
    </Container>
    )
}

export default Login;