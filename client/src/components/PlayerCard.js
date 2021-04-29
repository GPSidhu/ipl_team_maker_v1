import React from 'react'
import PropTypes from 'prop-types'

class PlayerCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: false
        }
        this.onClickHandler = this.onClickHandler.bind(this)
    }

    onClickHandler () {
        let isSelected = !this.state.selected
        if (isSelected) {
            if (this.props.team.playingCount >= 11)
                alert("Maximum 11 players can be selected!!")
            else {
                this.props.selectPlayer(this.props.team, this.props.player)
                this.setState({selected: isSelected})
            }
        }
        else {
            this.props.deSelectPlayer(this.props.team, this.props.player)
            this.setState({selected: isSelected})
        }
    }

    render() {
        // console.log('inside playercard')
        // console.log(this.props)
        const {name, points, credit } = this.props.player;
        let color = this.props.player.color;
        if (!color) {
            if (this.props.team.color)
                color = this.props.team.color
            else
                color = 'white';
        }

        let cls = ["list-group-item","card", "w-100", "mt-1", "mb-1"];
        if (this.state.selected)
            cls.push('active')
        
        return (<li className={cls.join(' ')} style={{height: '42px'}} onClick={this.onClickHandler}>
                    <div className="row text-nowrap">
                        <h5 className="col-sm-6 col-md-8 text-truncate" >{name}</h5>
                        <span className="col-sm-3 col-md-2 h-100" style={{backgroundColor: color, color: '#fff'}}>{points}</span>
                        <span className="col-sm-3 col-md-2 h-100" style={{backgroundColor: color, color: '#fff'}}>{credit}</span>
                    </div>
                </li>
        )
    }
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayerCard
