// components/Header/Header.js
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { INavProps } from "../../utils/types";
import classes from './Header.module.scss';

const Header: React.FC<INavProps> = ({ navItems, handleToggle, isOpen, logo, windowWidth }) => {
    return (
        <header className={classes["navigation"]}>
            <div className={classes["navigation__wrapper"]}>
                <h2 className={classes["navigation__logo"]}>{logo}</h2>
                {windowWidth as number <= 1024 && (
                    <button onClick={handleToggle} className={`${classes["navigation-button"]} ${isOpen ? 'active' : ''}`}
                        type="button" id="menuToggle" title='burger menu'>
                        <span className={classes["navigation-span"]}></span>
                    </button>
                )}
                <Navigation isOpen={isOpen} navItems={navItems} />
            </div>
        </header>
    )
};


export default Header
