import { Component } from 'react'
import TeamCard from './TeamCard'
import TeamLayout from './TeamLayout'

class Home extends Component {
    constructor(props) {
      super(props)
      this.createTeamHandler = this.createTeamHandler.bind(this)
      this.resetTeamHandler = this.resetTeamHandler.bind(this)
    }

    isSelected(thisTeam) {
      return (
        this.props.playingTeams.some((t) => thisTeam.code === t.code)
      )
    }

    resetTeamHandler() {
      this.props.clearTeams();
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
      setTimeout(() => {
        let el = document.getElementById('output-area')
        if (el)
          el.scrollIntoView({behavior: 'smooth'});
      }, 500);
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
                    <div className="d-flex justify-content-center text-secondary mb-3 mt-3">Select Playing 11</div>
                    <div className="player-area row justify-content-center mt-3">
                      <div className="col-lg-4 left-section d-flex justify-content-center">
                        {team1 && <TeamLayout id={`tl1`} team={team1} {...this.props} selectEnabled={true} />}
                        {!team1 && <span>No team selected</span>}
                      </div>
                      <div className="col-lg-2 center-line-container" >
                        <div className="center-line border-secondary" />
                      </div>
                      <div className="col-lg-4 right-section d-flex justify-content-center">
                        {team2 && <TeamLayout id={`tl2`} team={team2} {...this.props} selectEnabled={true} />}
                        {!team2 && <span>No team selected</span>}
                      </div>
                    </div>
                </section>
                  <section className="ouptut-area container mt-2 mb-3">
                  <div className="team-area row justify-content-center">
                    <button className="btn btn-primary ml-2 mr-2" onClick={this.createTeamHandler}>Create Teams</button>
                    <button className="btn btn-primary ml-2 mr-2" onClick={this.resetTeamHandler}>Clear</button>
                  </div>
                  <hr/>
                  <div id="output-area" className="player-area row justify-content-start mt-3">
                    {
                      result.map((t, i) => (
                          <div className="col-sm-12 col-md-6 col-lg-6 left-section" key={`res_${i}`}>
                            {t && <TeamLayout team={t} {...this.props} selectEnabled={false} />}
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
