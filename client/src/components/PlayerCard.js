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
        this.setState({selected: isSelected})
        if (isSelected)
            this.props.selectPlayer(this.props.team, this.props.player)
        else
            this.props.deSelectPlayer(this.props.team, this.props.player) 
    }

    render() {
        // console.log('inside playercard')
        // console.log(this.props)
        const {name, points, credit } = this.props.player;
        let cls = ["list-group-item","card", "w-100", "mt-1", "mb-1"];
        if (this.state.selected)
            cls.push('active')
        
        return (<li className={cls.join(' ')} style={{height: '42px'}} onClick={this.onClickHandler}>
                    <div className="row text-nowrap">
                        <h5 className="col-sm-6 col-md-8 text-truncate">{name}</h5>
                        <span className="col-sm-3 col-md-2">{points}</span>
                        <span className="col-sm-3 col-md-2">{credit}</span>
                    </div>
                </li>
        )
    }
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayerCard
