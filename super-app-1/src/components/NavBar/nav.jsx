import React from 'react';
import classes from './Nav.module.css';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.active}>Диалоги</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" activeClassName={classes.active}>Новости</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" activeClassName={classes.active}>Музыка</NavLink>
            </div>
        </nav>
    )
}

export default NavBar;