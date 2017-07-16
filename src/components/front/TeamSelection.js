import React, { Component } from 'react';

import TeamSelectionPreview from './TeamSelectionPreview';

const teams = [
  {
    name: 'Lakers',
    image: 'g1.jpg'
  },
  {
    name: 'Rams',
    image: 'g2.jpg'
  },
  {
    name: 'Bitches',
    image: 'g3.jpg'
  },
  {
    name: 'Dodgers',
    image: 'g4.jpg'
  }
];

class TeamSelection extends Component {
  constructor(props) {
    super(props);
    this.teamSelectionPreview = this.teamSelectionPreview.bind(this);
  }

  teamSelectionPreview(team, index){
    return <TeamSelectionPreview team={team} key={index} />;

  }

  render() {
    return(
      <div className="gallery">
        <h3 className="w3l_header w3_agileits_header"><span>Teams</span></h3>
          <p className="sub_para_agile">Every week we add new teams that we track.</p>
            <div className="agile_team_grids_top">
              <ul id="flexiselDemo1">
                  {teams.map(this.teamSelectionPreview)}
              </ul>
          </div>
      </div>
    );
  }
}

export default TeamSelection;
