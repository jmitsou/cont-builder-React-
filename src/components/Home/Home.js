import React from 'react';
import Container from '../common/Container'
import Splash from '../common/Splash';
import splashImg from '../../Assets/splash1.avif';

const Home = () => {
    return(   
        <Container>
            <Splash image={splashImg} style={{color: "black"}}>
                <h1 style = {{textShadow: '1px 2px #f1f1f1'
                                
                            }}>Welcome to Continuity Builder</h1>
            </Splash>
            
        </Container>
    )
}

export default Home;