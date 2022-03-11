import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
const NavButton = (props) => {
    const [hover, setHover] = useState(false)

    return(
      <NavLink 
        to={props.to} 
        style={{
          background: hover ? 'black' : "transparent",
          textDecoration: 'none',
          fontSize:'1.25em',
          color: "#f1f1f1",
          fontWeight: 600,
          textShadow: '1px 3px #010101',
          textAlign: 'center',
          borderRadius: '40px',
          whiteSpace: 'nowrap',
          margin:'0 10px',
          opacity: hover ? "60%" : "100%"
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
          {props.label} 
      </NavLink>
        
    )
}

NavButton.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
}
  

export default NavButton;