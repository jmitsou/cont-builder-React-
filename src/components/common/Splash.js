import React from "react";
import propTypes from 'prop-types';

const Splash = (props) => {
    return (
        <div style={{
          ...style,
          ...props.style,
          backgroundImage: `url(${props.image})`,
        }}>
            {props.children}
        </div>
    )
}

const style = {
    backgroundSize: 'cover',
    height: '75vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    zIndex: 0,
}

Splash.protoTypes = {
    image: propTypes.string.isRequired,
    style: propTypes.object
} 

export default Splash;