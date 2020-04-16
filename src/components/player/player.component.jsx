import React from 'react';

export const Player = props => (
    
        <div className="feature-box">
            <i class="feature-box__icon far fa-futbol"></i>
            <h3 className="heading-tertiary">{props.title}</h3>
            <p className="feature-box__text">{props.description}</p>
        </div>

) 

