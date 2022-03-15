import React from 'react';
import Container from '../common/Container'
import Splash from '../common/Splash';
import splashImg from '../../Assets/splash1.avif';
import FaButton from '../faCommon/FaButton';

const Home = () => {
    return(   
        <Container>
            <Splash image={splashImg} style={{color: "black"}}>
                <h1 style = {{textShadow: '1px 2px #f1f1f1'
                                
                            }}>Welcome to Continuity Builder</h1>
            </Splash>
            <div>
                <h1>Make A Selection</h1>                                  
            </div>
            <div>
                <FaButton>View Journal Entries</FaButton>
            </div>
            <div>
                <FaButton>Create an Event</FaButton>
                <FaButton>Create an Actor</FaButton>
                <FaButton>Create an Location</FaButton>
            </div>                    
            

            

            
        </Container>
    )
}

export default Home;