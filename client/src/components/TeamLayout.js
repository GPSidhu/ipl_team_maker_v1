import React from 'react'
import PlayerCard from './PlayerCard'

class TeamLayout extends React.Component {
    
    render() {
        console.log("inside teamlayout")
        console.log(this.props)
        const {players, name} = this.props.team
        return (
            <div className="">
                <div className="d-flex justify-content-center">
                    <h4>{`${name} - (${this.props.team.playingCount || 0})`}</h4>
                </div>
                {players && <ul className="list-group">
                    {players.wicketkeepers && players.wicketkeepers.map((p, i) => <PlayerCard key={`wk_${i}`} player={p} {...this.props} />)}
                    {players.batsmen && players.batsmen.map((p, i) => <PlayerCard key={`bt_${i}`} player={p} {...this.props} />)}
                    {players.bowlers && players.bowlers.map((p, i) => <PlayerCard key={`bl_${i}`} player={p} {...this.props} />)}
                </ul>}
            </div>
        )
    }
}

export default TeamLayout
