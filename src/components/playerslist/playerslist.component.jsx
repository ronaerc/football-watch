import React from 'react';

import {Player} from '../player/player.component.jsx';

class PlayersList extends React.Component {
    constructor(){
        super();

        this.state = {
            players: [
                {
                  title: 'Platini',
                  id: 1,
                  linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Garincha',
                    id: 2,
                    linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Garincha',
                    id: 3,
                    linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Garincha',
                    id: 4,
                    linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Garincha',
                    id: 5,
                    linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                }
            ]
        }
    }

    render(){

        return(
            <section className="section-features">
              <div className="u-center-text u-margin-bottom-big">
                  <h2 className="heading-secondary">Players</h2>
              </div>
              <div className="features-row">

                  {
                      this.state.players.map(({id, ...otherSectionProps}) => (
                          <Player key={id} {...otherSectionProps} />
                      ))
                  }
              </div>
            </section>
        )
     
    }
}
export default PlayersList;
