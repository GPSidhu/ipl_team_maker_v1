const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const port = 3080

const fs = require("fs")

const teamCodePathMap = {
    "pbks"  : "./data/pbks.json",
    "mi"    : "./data/mi.json"
}

const teams = [
    {
        team: 'pbks',
        players: [1,2,4,5]
    }
];

app.use(bodyParser.json());

// Get All teams
app.get('/api/teams/', (req, res) => {
    console.log('api/teams called')
    fs.readFile('./data/teams.json', function(err, data) {
        // Check for errors
        if (err) 
            throw err;
    
        // Converting to JSON
        const teamData = JSON.parse(data);
        res.json(JSON.stringify(teamData));
    })
});

// Get team by team code
app.get('/api/team/:code', (req, res) => {
    var filePath = teamCodePathMap[req.params.code]
    console.log('api/team called for: '+req.params.cod)
    fs.readFile(filePath, function(err, data) {
        // Check for errors
        if (err) 
            throw err;
    
        // Converting to JSON
        const teamData = JSON.parse(data);
        res.json(JSON.stringify(teamData));
    })
});

app.post('/api/team', (req, res) => {
    const team = req.body.team;
    console.log('Adding team::::', team);
    teams.push(team);
    res.json("Team added");
});

app.get('/', (req,res) => {
    res.send('App Works !!!!');
});

app.listen(port, () => {
    console.log(`Listening on port::${port}`);
});
