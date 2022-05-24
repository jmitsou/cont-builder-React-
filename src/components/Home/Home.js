import React, {useContext} from 'react';
import Container from '../common/Container'
import Splash from '../common/Splash';
import splashImg from '../../Assets/splash1.avif';
import FaButton from '../faCommon/FaButton';
import { styled } from '@mui/material/styles';
import { AuthContext } from '../Providers/AuthProvider';
import TimeLine from '../TimeLine/TimeLine';

const Home = () => {
    const auth = useContext(AuthContext);
    console.log(auth)
    return(   
        <Container>
            <Splash image={splashImg} style={{color: "black"}}>
                <h1 style = {{textShadow: '1px 2px #f1f1f1'
                                
                            }}>Welcome to Continuity Builder</h1>
            </Splash>

            <div style={{flexDirection: "row", marginTop: '30px'}}>
                <div style={{flexDirection: "column", background: 'blue',  }}>
                    <h1>Recent Events</h1>
                    <TimeLine/>  
                </div>
                <div style={{flexDirection: "column", 
                             background: 'lightblue',
                            }}>
                    <h1>Recent Events</h1>
                    <TimeLine/>  
                </div> 
                <div style={{flexDirection: "column", background: 'blue'}}>
                    <h1>Recent Events</h1>
                    <TimeLine/>  
                </div>                                
            </div>

            <div>
                <TimeLine/>

            </div>
            
            <div>
                
                {/* <Grid container spacing={2}>
                    <Grid item xs={6} md={8}>
                     <button>Create an Actor</button>
                     <button>Create an Event</button>
                     <button>Create an Location</button>
                    </Grid>
                    <Grid item xs={6} md={8}>
                    <button>Create an Event</button>
                    </Grid>
                    <Grid item xs={6} md={8}>
                    <button>Create an Location</button>
                    </Grid>
                </Grid> */}
                                
            </div>                    
            
        </Container>
    )
}

export default Home;