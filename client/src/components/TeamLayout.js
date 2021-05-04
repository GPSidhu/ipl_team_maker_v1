import React from 'react'
import PlayerCard from './PlayerCard'
import { toUpper} from 'lodash'

class TeamLayout extends React.Component {
    
    isCaptain(p) {
        if (this.props.team && this.props.team.cvc_candidates) {
            if (this.props.team.cvc_candidates[0].id === p.id)
                return true
        }
        return false
    }

    isViceCaptain(p) {
        if (this.props.team && this.props.team.cvc_candidates) {
            if (this.props.team.cvc_candidates[1].id === p.id)
                return true
        }
        return false
    }

    render() {
        // console.log("inside teamlayout")
        // console.log(this.props.team)
        const {players, name, rem_credit, playingCount, t1, t2} = this.props.team;
        return (
            <div className="mb-5" style={{minWidth: "300px"}}>
                <div className="container pr-4 pl-4 pb-2 pt-2" style={{backgroundColor: this.props.team.color, color: '#fff'}}>
                    <div className="row d-flex justify-content-between">
                        <h4>{`${name}`}</h4>
                        <h4>{!playingCount ? `(0)` : `(${playingCount})`}</h4>
                        {<span>{`Cr: ${rem_credit || 0.0}`}</span>}
                    </div>
                    <div className="row d-flex justify-content-between">
                        {t1 && <div>{`${toUpper(t1.code)} (${t1.playingCount || 0})`}</div>}
                        {t2 && <div>{`${toUpper(t2.code)} (${t2.playingCount || 0})`}</div>}
                    </div>
                </div>
                {players && <ul className="list-group">
                    {players.wicketkeepers && 
                        players.wicketkeepers.map((p, i) => 
                            <PlayerCard key={`wk_${i}`} player={p} {...this.props} captain={this.isCaptain(p)} viceCaptain={this.isViceCaptain(p)} />)}
                    {players.batsmen &&
                        players.batsmen.map((p, i) => 
                            <PlayerCard key={`bt_${i}`} player={p} {...this.props} captain={this.isCaptain(p)} viceCaptain={this.isViceCaptain(p)} />)}
                    {players.allrounders &&
                        players.allrounders.map((p, i) => 
                            <PlayerCard key={`ar_${i}`} {...this.props} captain={this.isCaptain(p)} player={p} viceCaptain={this.isViceCaptain(p)} />)}
                    {players.bowlers &&
                        players.bowlers.map((p, i) => 
                            <PlayerCard key={`bl_${i}`} player={p} {...this.props} captain={this.isCaptain(p)} viceCaptain={this.isViceCaptain(p)} />)}
                </ul>}
            </div>
        )
    }
}

export default TeamLayout
