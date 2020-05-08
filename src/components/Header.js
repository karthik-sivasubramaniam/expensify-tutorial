import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/create'>Add Expense</NavLink>
        <NavLink to='/edit'>Edit Expense</NavLink>
    </div>
);

export default Header;