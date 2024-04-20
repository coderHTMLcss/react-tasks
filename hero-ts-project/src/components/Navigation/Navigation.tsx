import React from 'react';
import { INavProps } from "../../utils/types";
import classes from '../Header/Header.module.scss'

const Navigation: React.FC<INavProps> = ({ navItems, isOpen }) => {
    return (
        <menu className={`${classes["navigation__menu-container"]} ${isOpen ? classes.active : ''}`}>
            <ul className={classes["navigation__menu"]}>
                {navItems.map((navItem) => {
                    const { id, text } = navItem;
                    return (
                        <li key={id} className={classes["navigation__menu-item"]}>
                            <a href={`#${text}`} className={classes["navigation__menu-link"]}>{text}</a>
                        </li>
                    );
                })}
            </ul>
            <div className={classes["navigation__buttons-container"]}>
                <button type="button" className={classes["navigation__register-button"]}>Register</button>
                <button type="button" className={classes["navigation__login-button"]}>Log In</button>
            </div>
        </menu>
    );
};

export default Navigation;


