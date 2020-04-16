import React from 'react';
import {Button} from '../button/button.component.jsx';

import logo from '../../logo-white.png';

export const Header = props => (
    <header className="header">
        <div className="header__logo-box">
            <img src={logo} alt="logo" className="header__logo" />
        </div>

        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">{props.siteName}</span>
                <span className="heading-primary--sub">{props.siteSubName}</span>
            </h1>


            <Button className="btn btn--black btn--animated">About</Button>
           
        </div>

    </header>
) 