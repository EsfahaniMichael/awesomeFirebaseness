import React from 'react';
import './404.css';
import { Link } from 'react-router-dom';

export default props => (
    <div className="not-found">
        <div className="center">
            <h1>
                404 Page NOT FOUND
            </h1>
            <Link to="/">
                <i className="material-icons">home</i>
            </Link>
        </div>
    </div>
)
