import React, { Fragment, useContext } from "react";
import { AuthContext } from '../Providers/AuthProvider';
import NavButton from "./NavButton";

const NavBar = (prop) => {
    const [auth] = useContext(AuthContext)

    return(
        <Fragment>
            <div style={{
                backgroundColor: "#333333",
                position: 'fixed',
                width:'100%',
                zIndex: 9999, 
                top:0,
                left:0,
                height: '75px',
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <h1 style={{
                    fontFamily:"monospace",
                    fontWeight:"bold",
                    fontSize: '2.5em',
                    margin: "0 20px", 
                    color: '#f1f1f1'
                }}>Continuity Builder</h1>
                <div style={{
                    margin: '0 20px',
                    flexDirection:'row',
                    background: "transparent",
                    userSelect: "none",
                    alignItems: 'center',
                }}>
                   <NavButton to="/" label='Home'/>
                   
                   {auth.token ?
                    //has token
                    <Fragment>
                        <NavButton to="/eventjournal" label='My Journals'/>
                   </Fragment>
                    :
                    //no token
                   <Fragment>
                        <NavButton to="/signup" label='Sign Up'/>
                        <NavButton to="/login" label='Login'/>
                   </Fragment>
                }

                   
                </div>
                
            </div>
            <div style={{height: '75px'}}/>
        </Fragment>
        
    )
}

export default NavBar;