import React from 'react'
import './link.scss';

const Link = ({label, action}) => {
    return (
     <p className="link" onClick={action}>{label}</p>
    )
}

export default Link;
