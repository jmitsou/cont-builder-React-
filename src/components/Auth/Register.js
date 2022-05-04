import React , {useState} from 'react';
import NewUserForm from './NewUserForm';
import Container from '../common/Container';
import Splash from '../common/Splash';
import RegSplash from '../../Assets/RegSplash.avif';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { apiHostUrl } from '../../config';

const Register = (props) => {
    const [newUser,setNewUser] = useState({
        email: '',
        password: '',
        fName: "", 
        lName: ""
    })

    //
    const navigate = useNavigate();

    //creates the new user with infor provided
    const updateForm = (field,value) => {
        setNewUser({
            ...newUser,
            [field]: value
        })
    }

    const onSubmit = () => {
        console.log(newUser)
        const data = newUser;
        data.name = `${data.fName} ${data.lName}`;
        data.username = data.email;

        createUser(data);
        alert("Owner is Ready")

    };

    //async tell the code to finish running the code and wait for this to finish
    const createUser = async (data) => {
        try {
            const res = await axios.post(`${ apiHostUrl }/api/auth/signup`, data);// add `${apiHostURL}/route for signup, data`
            console.log(res.data);
            login(data); //runs login method
        } catch (err) {
            console.error(err.response.data);
        }
        

    } 

    const login = async (data) => {
        try {
            const res = await axios.post(`${ apiHostUrl }/api/auth/signin`, data);
            console.log(res.data.token);
            createCustomer(data, res.data.token);
        } catch (err) {
            console.error(err.response.data);
        }
    } 

    const createCustomer = async (data,token) => {
        try {
            const res = await axios.post(
                `${ apiHostUrl }/api/owner`,
                 data, 
                 {
                     headers: {
                         Authorization: `Bearer ${token}`
                     } 
                }
            );
            console.log(res.data)
            navigate('/login');
            console.log("moved")

        } catch (err) {
            console.error(err.response.data);
        }

    }

    return (
        <Container>
            <Splash image={RegSplash} style={{
                height: '20vh',
                color: '#f1f1f1',

            }}>
                    <h1>Register an Owner</h1>
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