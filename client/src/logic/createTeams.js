/* 
    @input
    team1 <Object*> : Input team1
    team2 <Object*> : Input team2
    constraints <Object*> : 
    @return
        <Array<Object>> : Possible team combinations complying to input constraints
*/
export const createTeams = function(team1, team2, constraints = {
    wk: [1,3],  // min no. of weeketkeepers: 1, max: 3
    bat: [3,6], // min no. of batsmen: 3, max: 6
    bowl: [3,6],// min no. of bowlers: 3, max: 6
    max: 7      // max players from one team: 7
}) {
    if (!team1 || !team2) {
        console.error('One or both the teams missing!!!')
        return []
    }

    debugger;
    
}