import React from 'react'
import PropTypes from 'prop-types'

class TeamCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            background: '#fff',
            enabled: false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.text !== this.props.text) {
    //       this.updateAndNotify();
    //     }
    // }

    onClickHandler () {
        if (!this.props.selected)
            this.props.selectTeam(this.props.team)
        else
            this.props.deSelectTeam(this.props.team)
    }

    render() {
        const team = this.props.team
        return (
            <div className="card m-1"
                style={{
                    background: this.props.selected ? '#ed9482' : '#fff',
                    height: '100px',
                    width: '150px',
                    maxWidth: '200px',
                    border: '1px solid'
                }}
                onClick={this.onClickHandler}>
                <div className="card-body font-weight-bold">{team.name}</div>
            </div>
        )
    }
}

TeamCard.prototypes = {
    team: PropTypes.object.isRequired
}

export default TeamCard
