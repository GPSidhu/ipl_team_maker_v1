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

    onClickHandler () {
        if (!this.props.selected)
            this.props.selectTeam(this.props.team)
        else
            this.props.deSelectTeam(this.props.team)
    }

    render() {
        const team = this.props.team
        return (
            <div className="card m-1 active"
                style={{
                    background: this.props.selected ? '#007bff' : '#fff',
                    height: '100px',
                    width: '150px',
                    maxWidth: '200px',
                    border: '1px solid'
                }}
                onClick={this.onClickHandler}>
                <div className="d-flex justify-content-center">
                    <figure>
                        <img src={`/logos/${team.code}.png`} alt={`${team.code}.png`} style={{height: '96px', width: '100px'}} />
                    </figure>
                </div>
            </div>
        )
    }
}

TeamCard.prototypes = {
    team: PropTypes.object.isRequired
}

export default TeamCard
