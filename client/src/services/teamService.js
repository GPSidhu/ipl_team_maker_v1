export async function getAllTeams() {
    try {
        const response = await fetch('/api/teams');
        return await response.json();
    } catch(error) {
        return [];
    }
}

// export async function getTeam(data) {
//     const response = await fetch(`/api/team`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({team: data})
//       })
//     return await response.json();
// }

// export async function createTeam(data) {
//     const response = await fetch(`/api/team`, {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({team: data})
//       })
//     return await response.json();
// }
