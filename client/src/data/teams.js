const teams = [
    {
      name: 'Punjab Kings',
      code: 'pbks',
      rank: 5,
      nrr: -0.824,
      points: 4,
      players: {
        wicketkeepers: [
            {
                name: 'KL Rahul',
                id: 1,
                points: 252,
                credit: 10.5
            },
            {
                name: 'N Pooran',
                id: 2,
                points: 28,
                credit: 8.5,
            },
            {
                name: 'P Singh',
                id: 3,
                points: 0,
                credit: 8,
            },
        ],
        batsmen: [
          {
              name: 'C Gayle',
              id: 4,
              points: 120,
              credit: 9.5,
          },
          {
              name: 'M Agarwal',
              id: 5,
              points: 160,
              credit: 9,
          },
          {
              name: 'D Malan',
              id: 6,
              points: 0,
              credit: 8.5,
          },
          {
              name: 'M Singh',
              id: 7,
              points: 0,
              credit: 8.5,
          },
          {
              name: 'SR Khan',
              id: 8,
              points: 137,
              credit: 8,
          },
        ],
        allrounders: [
          {
              name: 'M Henriques',
              id: 9,
              points: 18,
              credit: 8.5,
          },
          {
              name: 'D Hooda',
              id: 10,
              points: 200,
              credit: 8.5,
          },
          {
              name: 'J Saxena',
              id: 11,
              points: 4,
              credit: 8,
          },
          {
              name: 'F Allen',
              id: 12,
              points: 47,
              credit: 8,
          },
          {
              name: 'U Singh',
              id: 13,
              points: 0,
              credit: 8,
          },
        ],
        bowlers: [
          {
              name: 'M Shami',
              id: 14,
              points: 134,
              credit: 9,
          },
          {
              name: 'C Jordan',
              id: 15,
              points: 0,
              credit: 8.5,
          },
          {
              name: 'J Richardson',
              id: 16,
              points: 122,
              credit: 8.5,
          },
          {
              name: 'M Ashwin',
              id: 17,
              points: 53,
              credit: 8.5,
          },
          {
              name: 'A Singh',
              id: 18,
              points: 160,
              credit: 8.5,
          },
          {
              name: 'R Bishnoi',
              id: 19,
              points: 0,
              credit: 8.5,
          },
          {
              name: 'R Meredith',
              id: 20,
              points: 54,
              credit: 8,
          },
        ]
      }
    },
    {
      name: 'Mumbai Indians',
      code: 'mi',
      rank: 4,
      nrr: -0.824,
      points: 4,
      players: {
        wicketkeepers: [
            {
                name: 'Q de Kock',
                id: 1,
                points: 85,
                credit: 9.5
            },
            {
                name: 'I Kishan',
                id: 2,
                points: 94,
                credit: 8.5,
            },
            {
                name: 'A Tare',
                id: 3,
                points: 0,
                credit: 8,
            },
        ],
        batsmen: [
          {
              name: 'R Sharma',
              id: 4,
              points: 193,
              credit: 10.5,
          },
          {
              name: 'S Yadav',
              id: 5,
              points: 207,
              credit: 9.5,
          },
          {
              name: 'C Lynn',
              id: 6,
              points: 85,
              credit: 8.5,
          },
          {
              name: 'H Pandya',
              id: 7,
              points: 80,
              credit: 8.5,
          },
          {
              name: 'S Tiwary',
              id: 8,
              points: 0,
              credit: 8,
          },
        ],
        allrounders: [
          {
              name: 'K Pollard',
              id: 9,
              points: 135,
              credit: 8.5,
          },
          {
              name: 'J Neesham',
              id: 10,
              points: 0,
              credit: 8.5,
          },
          {
              name: 'K Pandya',
              id: 11,
              points: 157,
              credit: 8.5,
          },
          {
              name: 'A Sudhakar Roy',
              id: 12,
              points: 0,
              credit: 8,
          }
        ],
        bowlers: [
          {
              name: 'T Boult',
              id: 14,
              points: 225,
              credit: 9,
          },
          {
              name: 'J Bumrah',
              id: 15,
              points: 150,
              credit: 9,
          },
          {
              name: 'R Chahar',
              id: 16,
              points: 257,
              credit: 8.5,
          },
          {
              name: 'P Chawla',
              id: 17,
              points: 0,
              credit: 8,
          },
          {
              name: 'J Yadav',
              id: 18,
              points: 63,
              credit: 8,
          },
          {
              name: 'A Milne',
              id: 19,
              points: 10,
              credit: 8,
          },
          {
              name: 'M Jansen',
              id: 20,
              points: 66,
              credit: 8,
          },
        ]
      }
    },
    {
      name: 'Royal Challengers',
      code: 'rcb',
      rank: 1,
      nrr: 0.824,
      points: 8
    },
    {
      name: 'Chennai Super Kings',
      code: 'csk',
      rank: 2,
      nrr: 0.824,
      points: 4
    },
    {
      name: 'Delhi Capitals',
      code: 'dc',
      rank: 3,
      nrr: 0.824,
      points: 4
    },
    {
      name: 'Rajasthan Royals',
      code: 'rr',
      rank: 8,
      nrr: 0.824,
      points: 2
    },
    {
      name: 'Kolkata Knight Riders',
      code: 'kkr',
      rank: 7,
      nrr: 0.824,
      points: 2
    },
    {
      name: 'Sunrisers Hyderabad',
      code: 'srh',
      rank: 6,
      nrr: 0.824,
      points: 2
    },
  ]

export default teams