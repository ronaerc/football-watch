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
                    title: 'Pele',
                    id: 2,
                    linkUrl: 'https://www.dailymotion.com/video/x4fdlqd',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Cryuff',
                    id: 3,
                    linkUrl: 'https://www.youtube.com/watch?v=kJxMVHBVdi4',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Ronaldo',
                    id: 4,
                    linkUrl: 'https://www.dailymotion.com/video/x27s5f0',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Maradona',
                    id: 5,
                    linkUrl: 'https://www.dailymotion.com/video/x7f3e02',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Zico',
                    id: 6,
                    linkUrl: 'https://www.dailymotion.com/video/x27s5fi',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Eusébio',
                    id: 7,
                    linkUrl: 'https://www.dailymotion.com/video/x3sltfk',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Ronaldinho',
                    id: 8,
                    linkUrl: 'https://www.dailymotion.com/video/x27s5cd',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Zidane',
                    id: 9,
                    linkUrl: 'https://www.dailymotion.com/video/x27rvwl',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Rivellino',
                    id: 10,
                    linkUrl: 'https://www.dailymotion.com/video/x4i5jbi',
                    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida aliquet feugiat.'
                },
                {
                    title: 'Muller',
                    id: 11,
                    linkUrl: 'https://www.dailymotion.com/video/x27s7xc',
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
