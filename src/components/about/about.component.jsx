import React from 'react';

import {Button} from '../button/button.component.jsx';
import {Composition} from '../composition/composition.component.jsx';

export const About = props => (
    <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">Managers</h2>
        </div>
        <div className="row">
            <div className="col-1-of-2">
                <h3 className="heading-tertiary u-margin-bottom-small">Curabitur massa orci.</h3>
                <p className="paragraph">Ut a tincidunt ipsum. Aenean vel quam eu massa cursus faucibus. Sed ut nibh a mauris varius venenatis nec interdum odio. Ut magna sem, lacinia ut nulla vel, malesuada fermentum sapien. Mauris ligula diam, porta et eleifend a, sodales quis lacus.</p>

            

                <Button className="btn btn--black btn--shadow-yellow">Learn more &rarr;</Button>
            </div>
            
            <div className="col-1-of-2">
               <Composition />
            </div>
        </div>
    </section>
) 

