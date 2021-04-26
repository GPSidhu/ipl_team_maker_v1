import { Component } from 'react'
import TeamCard from './TeamCard'
import TeamLayout from './TeamLayout'

class Home extends Component {

    isSelected(thisTeam) {
      return (
        this.props.playingTeams.some((t) => thisTeam.code === t.code)
      )
    }
    
    render() {
        const team1 = this.props.playingTeams[0];
        const team2 = this.props.playingTeams[1];
        return (
                <div className="d-flex align-content-start flex-wrap justify-content-center">
                <div className="container mt-2">
                  <div className="team-area row justify-content-center">
                    {
                      this.props.teams.map((t) => (
                        <TeamCard key={`${t.code}`} team={t} {...this.props} selected={this.isSelected(t)}/>
                      ), this)
                    }
                  </div>
                  <div className="player-area row justify-content-center mt-3">
                    <div className="col left-section">
                      {team1 && <TeamLayout team={team1} {...this.props}/>}
                      {!team1 && <span>No team selected</span>}
                    </div>
                    <div className="col center-line-container" >
                      <div className="center-line" />
                    </div>
                    <div className="col right-section">
                      {team2 && <TeamLayout team={team2} {...this.props}/>}
                      {!team2 && <span>No team selected</span>}
                    </div>
                  </div>
                </div>
            </div>
        );
      }
}

export default Home
