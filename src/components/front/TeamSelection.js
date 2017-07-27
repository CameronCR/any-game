import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as teamActions from '../../actions/teams';

import TeamSelectionPreview from './TeamSelectionPreview';

class TeamSelection extends Component {
  constructor(props) {
    super(props);
    this.teamSelectionPreview = this.teamSelectionPreview.bind(this);
  }

  componentWillMount() {
    this.props.teamActions.loadTeams();

  }

  teamSelectionPreview(team, index) {
    return <TeamSelectionPreview key={index} team={team} />;
  }

  render() {
    return(
      <div className="gallery">
        <h3 className="w3l_header w3_agileits_header"><span>Teams</span></h3>
          <p className="sub_para_agile">Every week we add new teams that we track.</p>
            <div className="agile_team_grids_top">
              <ul id="flexiselDemo1">
                  {this.props.teams.map(this.teamSelectionPreview)}
              </ul>
          </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    teams: state.teams
  };
}

function mapDispatchToProps(dispatch) {
  return {
    teamActions: bindActionCreators(teamActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelection);
