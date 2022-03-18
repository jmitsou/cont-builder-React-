import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import InlineInputContainer from '../common/InlineInputContainer';
import Input from '../common/Input';
import Button from '../common/Button';

const NewUserForm = ({onSubmit, onChange, newUser}) => {
    //const {onSubmit, onChange, newUser} = props
    
    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
    }

    return (
        <Container >
            <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
            <InlineInputContainer>
            <Input 
                    name="email"
                    id="email"
                    value={newUser.email}
                    placeholder={"Email"}
                    onChange={handleChange}
                    type="email"
                    required
                  />
            </InlineInputContainer>
            <InlineInputContainer>
                  <Input 
                    name="password"
                    id="password"
                    value={newUser.password}
                    placeholder={"Password"}
                    onChange={handleChange}
                    type="password"
                    required
                  />
            </InlineInputContainer>
            <InlineInputContainer>
                <Input 
                    name="fName"
                    id="fName"
                    value={newUser.fName}
                    placeholder={"First Name"}
                    onChange={handleChange}
                    type="text"
                  />
                  
                  <Input 
                    name="lName"
                    id="fName"
                    value={newUser.fName}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                    type="text"
                  />
            </InlineInputContainer>
            <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default NewUserForm;