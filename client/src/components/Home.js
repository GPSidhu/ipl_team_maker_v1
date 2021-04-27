import { Component } from 'react'
import TeamCard from './TeamCard'
import TeamLayout from './TeamLayout'

class Home extends Component {
    constructor(props) {
      super(props)
      this.createTeamHandler = this.createTeamHandler.bind(this)
    }

    isSelected(thisTeam) {
      return (
        this.props.playingTeams.some((t) => thisTeam.code === t.code)
      )
    }

    createTeamHandler() {
      const team1 = this.props.playingTeams[0];
      const team2 = this.props.playingTeams[1];
      if (!team1 || !team2) {
        alert("One or more teams not selected!!!")
        return
      }
      if (team1.playingCount !== 11) {
        alert("Please select 11 players from: " + team1.name)
        return
      }
      if (team2.playingCount !== 11) {
        alert("Please select 11 players from: " + team2.name)
        return
      }
      this.props.createTeams(team1, team2)
    }

    render() {
        const team1 = this.props.playingTeams[0];
        const team2 = this.props.playingTeams[1];
        const result = this.props.result || [];
        return (
                <div className="d-flex align-content-start flex-wrap justify-content-center">
                  <section className="input-area container mt-2 mb-3">
                    <div className="team-area row justify-content-center">
                      {
                        this.props.teams.map((t) => (
                          <TeamCard key={`${t.code}`} team={t} {...this.props} selected={this.isSelected(t)}/>
                        ), this)
                      }
                    </div>
                    <h5 className="justify-content-center">Select Playing 11</h5>
                    <div className="player-area row justify-content-center mt-3">
                      <div className="col left-section">
                        {team1 && <TeamLayout team={team1} {...this.props} />}
                        {!team1 && <span>No team selected</span>}
                      </div>
                      <div className="col center-line-container" >
                        <div className="center-line" />
                      </div>
                      <div className="col right-section">
                        {team2 && <TeamLayout team={team2} {...this.props} />}
                        {!team2 && <span>No team selected</span>}
                      </div>
                    </div>
                </section>
                  <section className="ouptut-area container mt-2 mb-3">
                  <div className="team-area row justify-content-center">
                    <button className="btn btn-primary" onClick={this.createTeamHandler}>Create Team</button>
                  </div>
                  <div className="player-area row justify-content-start mt-3">
                    {
                      result.map((t, i) => (
                          <div className="col left-section" key={`res_${i}`}>
                            {t && <TeamLayout team={t} {...this.props} />}
                          </div>
                      ))
                    }
                    </div>
                </section>
                </div>
        );
      }
}

export default Home
