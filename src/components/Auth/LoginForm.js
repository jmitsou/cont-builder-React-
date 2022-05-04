import React from 'react';
import Container from '../common/Container';
import Form from '../common/Form';
import Input from '../common/Input';
import Button from '../common/Button';
import InlineInputContainer from '../common/InlineInputContainer';

const LoginForm = ({onSubmit, onChange, userCred }) => {

    const handleChange = (e) => {
        onChange(e.target.id, e.target.value);
    }

    return (
        <Container>
            <Form onSubmit={onSubmit} style={{marginTop: '1em'}}>
                <InlineInputContainer>
                    <Input
                        name="email"
                        id="email"
                        value={userCred.email}
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
                    value={userCred.password}
                    placeholder={"Password"}
                    onChange={handleChange}
                    type="password" //setting type to password will "mask the password "
                    required
                  />
            </InlineInputContainer>
                <Button>Submit</Button>
            </Form>
        </Container>
    )
}

export default LoginForm;