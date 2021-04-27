import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';
// import { getAllTeams } from '../services/teamService'
import Home from './Home'

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // getAllTeams() {
  //   return getAllTeams()
  //     .then(teams => {
  //       console.log(teams)
  //       this.setState({teams: teams})
  //     });
  // }

  render() {
    // console.log('inside main')
    // console.log(this.props)
    
    return (<div className="App mb-5 mt-5">
              <div className="container d-flex align-content-start flex-wrap justify-content-center">
                <h1>Fantasy Team Maker</h1>
                <Route exact path="/" render={() => (
                    <Home {...this.props} />
                )} />
                {/* <Route path="/updateTeam" render={() => (
                  <UpdateTeam {...this.props} />
                )} /> */}
              </div>
            </div>
    )
  }
}

Main.propTypes = {
  teams: PropTypes.array.isRequired
}

export default Main;
