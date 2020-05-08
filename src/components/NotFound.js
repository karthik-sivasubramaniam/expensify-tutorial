import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div>
        <h2>404!</h2>
        <p>Oops! You've stumbled into oblivion. Wanna go <Link to='/'>Home</Link>?</p>
    </div>
);

export default NotFound;