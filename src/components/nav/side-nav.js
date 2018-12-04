import React from 'react';
import { Link } from 'react-router-dom';



export default props => {
    return (
        <ul ref={props.setRef}  id="side-nav" className="sidenav">
            {props.links}
        </ul>
    )
}