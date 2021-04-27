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
                credit: 10.5,
                role: 'wk'
            },
            {
                name: 'N Pooran',
                id: 2,
                points: 28,
                credit: 8.5,
                role: 'wk'
            },
            {
                name: 'P Singh',
                id: 3,
                points: 0,
                credit: 8,
                role: 'wk'
            },
        ],
        batsmen: [
          {
              name: 'C Gayle',
              id: 4,
              points: 120,
              credit: 9.5,
              role: 'bt'
          },
          {
              name: 'M Agarwal',
              id: 5,
              points: 160,
              credit: 9,
              role: 'bt'
          },
          {
              name: 'D Malan',
              id: 6,
              points: 0,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'M Singh',
              id: 7,
              points: 0,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'SR Khan',
              id: 8,
              points: 137,
              credit: 8,
              role: 'bt'
          },
        ],
        allrounders: [
          {
              name: 'M Henriques',
              id: 9,
              points: 18,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'D Hooda',
              id: 10,
              points: 200,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'J Saxena',
              id: 11,
              points: 4,
              credit: 8,
              role: 'ar'
          },
          {
              name: 'F Allen',
              id: 12,
              points: 47,
              credit: 8,
              role: 'ar'
          },
          {
              name: 'U Singh',
              id: 13,
              points: 0,
              credit: 8,
              role: 'ar'
          },
        ],
        bowlers: [
          {
              name: 'M Shami',
              id: 14,
              points: 134,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'C Jordan',
              id: 15,
              points: 0,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'J Richardson',
              id: 16,
              points: 122,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'M Ashwin',
              id: 17,
              points: 53,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'A Singh',
              id: 18,
              points: 160,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'R Bishnoi',
              id: 19,
              points: 0,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'R Meredith',
              id: 20,
              points: 54,
              credit: 8,
              role: 'bl'
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
                credit: 9.5,
                role: 'wk'
            },
            {
                name: 'I Kishan',
                id: 2,
                points: 94,
                credit: 8.5,
                role: 'wk'
            },
            {
                name: 'A Tare',
                id: 3,
                points: 0,
                credit: 8,
                role: 'wk'
            },
        ],
        batsmen: [
          {
              name: 'R Sharma',
              id: 4,
              points: 193,
              credit: 10.5,
              role: 'bt'
          },
          {
              name: 'S Yadav',
              id: 5,
              points: 207,
              credit: 9.5,
              role: 'bt'
          },
          {
              name: 'C Lynn',
              id: 6,
              points: 85,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'H Pandya',
              id: 7,
              points: 80,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'S Tiwary',
              id: 8,
              points: 0,
              credit: 8,
              role: 'bt'
          },
        ],
        allrounders: [
          {
              name: 'K Pollard',
              id: 9,
              points: 135,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'J Neesham',
              id: 10,
              points: 0,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'K Pandya',
              id: 11,
              points: 157,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'A Sudhakar Roy',
              id: 12,
              points: 0,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'T Boult',
              id: 14,
              points: 225,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'J Bumrah',
              id: 15,
              points: 150,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'R Chahar',
              id: 16,
              points: 257,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'P Chawla',
              id: 17,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'J Yadav',
              id: 18,
              points: 63,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'A Milne',
              id: 19,
              points: 10,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'M Jansen',
              id: 20,
              points: 66,
              credit: 8,
              role: 'bl'
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