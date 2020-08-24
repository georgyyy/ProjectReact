import React from 'react';
import classes from './Nav.module.css';

const NavBar = () => {
    return(
        <nav className={classes.nav}>
            <div className={classes.item}>
                Profile
            </div>
            <div className={classes.item}>
                <a href="#">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="#">News</a>
            </div>
            <div className={classes.item}>
                <a href="#">Music</a>
            </div>
        </nav>
    )
}

export default NavBar;