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
            <div>
                <h1>Make A Selection</h1>                                  
            </div>
            <div style={{
                margin :'0 20px',
                color: "#f1f1f1",
            }}>
                <button>Create an Event</button>
                <button>Create an Actor</button>
                <button>Check Journal Entries</button>
            </div>                    
            

            

            
        </Container>
    )
}

export default Home;