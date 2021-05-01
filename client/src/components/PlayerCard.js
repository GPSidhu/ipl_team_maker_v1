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
        if (!this.props.selectEnabled)
            return;
        
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
        const {name, points, credit} = this.props.player;
        let color = this.props.player.color;
        let textColor = this.props.captain ? '#c4372f' : (this.props.viceCaptain ? '#de73bf' : 'black');

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
                    <div className="row text-wrap flex-nowrap">
                        {/* {this.props.captain && <span>c</span>}
                        {this.props.viceCaptain && <span>vc</span>} */}
                        <h5 className="col-6 col-sm-7 col-md-6 col-lg-6 text-truncate" style={{color: textColor}}>
                            {this.props.captain && <sup className="mr-1">c</sup>}
                            {this.props.viceCaptain && <sup className="mr-1">vc</sup>}
                            {name}
                        </h5>
                        <span className="col-3 col-sm-3 col-md-3 h-100 col-lg-3 text-truncate border border-right-5 border-white" style={{backgroundColor: color, color: '#fff'}}>{points}</span>
                        <span className="col-3 col-sm-2 col-md-3 h-100 col-lg-3 text-truncate border border-right-5 border-white" style={{backgroundColor: color, color: '#fff'}}>{credit}</span>
                    </div>
                </li>
        )
    }
}

PlayerCard.propTypes = {
    player: PropTypes.object.isRequired
}

export default PlayerCard
