import React , {useState} from 'react';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../Assets/RegSplash.avif';
import axios from 'axios';
import { apiHostUrl } from '../../config';

const Register = (props) => {
    const [newUser,setNewUser] = useState({
        email: '',
        password: '',
        fName: '',
        lName: '',
        isMember: false
    })

    const updateForm = (field,value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () => {
        
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`

        createUser(data);

    };

    const createUser = async (data) => {
        try {
            const res = await axios.post(); // add `${apiHostURL}/route for signup, data`
        } catch (error) {
            console.error(error.message);
        }
        

    } 

    const login = (data) => {

    } 

    const createCustomer = (data) => {

    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: '20vh',
                color: '#f1f1f1',

            }}>
                    <h1>Register</h1>
            </Splash>
            
            <NewUserForm 
                newUser={newUser}
                onChange={updateForm}
                onSubmit={onSubmit}
            />
        </Container>
    )
}

export default Register;