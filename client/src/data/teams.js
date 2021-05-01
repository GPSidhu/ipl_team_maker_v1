const teams = [
    {
      name: 'Punjab Kings',
      code: 'pbks',
      rank: 6,
      nrr: -0.608,
      points: 4,
      color: '#ab0202',
      rem_credit: 100,
      players: {
        wicketkeepers: [
            {
                name: 'KL Rahul',
                id: 1,
                points: 374,
                credit: 10.5,
                role: 'wk'
            },
            {
                name: 'N Pooran',
                id: 2,
                points: 66,
                credit: 8.5,
                role: 'wk'
            },
            {
                name: 'P Singh',
                id: 3,
                points: 0,
                credit: 8,
                role: 'wk'
            }
        ],
        batsmen: [
          {
              name: 'C Gayle',
              id: 4,
              points: 190,
              credit: 9,
              role: 'bt'
          },
          {
              name: 'M Agarwal',
              id: 5,
              points: 239,
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
              points: 176,
              credit: 8,
              role: 'bt'
          },
        ],
        allrounders: [
          {
              name: 'M Henriques',
              id: 9,
              points: 67,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'D Hooda',
              id: 10,
              points: 269,
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
              points: 57,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'M Shami',
              id: 14,
              points: 232,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'C Jordan',
              id: 15,
              points: 45,
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
              points: 223,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'R Bishnoi',
              id: 19,
              points: 77,
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
          {
            name: 'H Brar',
            id: 21,
            points: 0,
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
      color: '#1f3cbf',
      rem_credit: 100,
      players: {
        wicketkeepers: [
            {
                name: 'Q de Kock',
                id: 11,
                points: 198,
                credit: 9.5,
                role: 'wk'
            },
            {
                name: 'I Kishan',
                id: 12,
                points: 98,
                credit: 8.5,
                role: 'wk'
            },
            {
                name: 'A Tare',
                id: 13,
                points: 0,
                credit: 8,
                role: 'wk'
            },
        ],
        batsmen: [
          {
              name: 'R Sharma',
              id: 14,
              points: 297,
              credit: 10,
              role: 'bt'
          },
          {
              name: 'S Yadav',
              id: 15,
              points: 288,
              credit: 9.5,
              role: 'bt'
          },
          {
              name: 'C Lynn',
              id: 16,
              points: 85,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'H Pandya',
              id: 17,
              points: 89,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'S Tiwary',
              id: 18,
              points: 0,
              credit: 8,
              role: 'bt'
          }
        ],
        allrounders: [
          {
              name: 'K Pollard',
              id: 19,
              points: 183,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'J Neesham',
              id: 110,
              points: 0,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'K Pandya',
              id: 111,
              points: 217,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'A Sudhakar Roy',
              id: 112,
              points: 0,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'T Boult',
              id: 114,
              points: 262,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'J Bumrah',
              id: 115,
              points: 199,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'R Chahar',
              id: 116,
              points: 354,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'P Chawla',
              id: 117,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'J Yadav',
              id: 118,
              points: 69,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'A Milne',
              id: 119,
              points: 10,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'M Jansen',
              id: 120,
              points: 66,
              credit: 8,
              role: 'bl'
          },
          {
            name: 'N Coulter-Nile',
            id: 121,
            points: 4,
            credit: 8,
            role: 'bl'
          },
        ]
      }
    },
    {
      name: 'Royal Challengers',
      code: 'rcb',
      rank: 3,
      nrr: 0.089,
      points: 10,
      color: '#140f04',
      rem_credit: 100,
      players: {
        wicketkeepers: [
            {
                name: 'A de Villiers',
                id: 21,
                points: 374,
                credit: 10,
                role: 'wk'
            },
            {
                name: 'K Srikar Bharat',
                id: 22,
                points: 0,
                credit: 8,
                role: 'wk'
            }
        ],
        batsmen: [
          {
              name: 'V Kohli',
              id: 24,
              points: 259,
              credit: 10.5,
              role: 'bt'
          },
          {
              name: 'G Maxwell',
              id: 25,
              points: 338,
              credit: 9.5,
              role: 'bt'
          },
          {
              name: 'D Padikkal',
              id: 26,
              points: 294,
              credit: 9,
              role: 'bt'
          },
          {
              name: 'R Patidar',
              id: 27,
              points: 63,
              credit: 8,
              role: 'bt'
          }
        ],
        allrounders: [
          {
              name: 'D Christian',
              id: 29,
              points: 47,
              credit: 8,
              role: 'ar'
          },
          {
              name: 'W Sundar',
              id: 210,
              points: 150,
              credit: 8,
              role: 'ar'
          },
          {
              name: 'D Sams',
              id: 211,
              points: 7,
              credit: 8,
              role: 'ar'
          },
          {
              name: 'S Ahmed',
              id: 212,
              points: 144,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'H Patel',
              id: 214,
              points: 517,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'Y Chahal',
              id: 215,
              points: 147,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'K Jamieson',
              id: 216,
              points: 272,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'M Siraj',
              id: 217,
              points: 244,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'N Saini',
              id: 218,
              points: 0,
              credit: 8,
              role: 'bl'
          }
        ]
      }
    },
    {
      name: 'Chennai Super Kings',
      code: 'csk',
      rank: 2,
      nrr: 0.824,
      points: 4,
      color: '#e8d22c', //#ffd700', //'#ccc872', //'#f5e02a',
      rem_credits: 100,
      players: {
        wicketkeepers: [
            {
                name: 'M Dhoni',
                id: 31,
                points: 101,
                credit: 8.5,
                role: 'wk'
            },
            {
                name: 'N Jagadeesan',
                id: 32,
                points: 0,
                credit: 8,
                role: 'wk'
            }
        ],
        batsmen: [
          {
            name: 'F du Plessis',
            id: 34,
            points: 413,
            credit: 10,
            role: 'wk'
          },
          {
              name: 'S Raina',
              id: 35,
              points: 198,
              credit: 9,
              role: 'bt'
          },
          {
              name: 'A Rayudu',
              id: 36,
              points: 106,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'R Gaikwad',
              id: 37,
              points: 292,
              credit: 8.5,
              role: 'bt'
          },
          {
            name: 'R Uthappa',
            id: 38,
            points: 0,
            credit: 8,
            role: 'bt'
          },
          {
            name: 'C Pujara',
            id: 39,
            points: 0,
            credit: 8,
            role: 'bt'
        }
        ],
        allrounders: [
          {
              name: 'R Jadeja',
              id: 411,
              points: 451,
              credit: 9.5,
              role: 'ar'
          },
          {
              name: 'M Ali',
              id: 412,
              points: 355,
              credit: 9.5,
              role: 'ar'
          },
          {
              name: 'Sam Curran',
              id: 413,
              points: 267,
              credit: 9,
              role: 'ar'
          },
          {
              name: 'M Santner',
              id: 414,
              points: 0,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'D Bravo',
              id: 418,
              points: 129,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'I Tahir',
              id: 419,
              points: 80,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'D Chahar',
              id: 420,
              points: 280,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'S Thakur',
              id: 421,
              points: 141,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'L Ngidi',
              id: 422,
              points: 155,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'K Sharma',
              id: 423,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'J Behrendorff',
              id: 424,
              points: 0,
              credit: 8,
              role: 'bl'
          }
        ]
      }
    },
    {
      name: 'Delhi Capitals',
      code: 'dc',
      rank: 3,
      nrr: 0.824,
      points: 4,
      color: '#3082c9', //"#1b6596",
      rem_credit: 100,
      players: {
        wicketkeepers: [
            {
                name: 'R Pant',
                id: 51,
                points: 355,
                credit: 10,
                role: 'wk'
            },
            {
                name: 'S Billings',
                id: 52,
                points: 0,
                credit: 8,
                role: 'wk'
            }
        ],
        batsmen: [
          {
            name: 'S Dhawan',
            id: 54,
            points: 494,
            credit: 10.5,
            role: 'wk'
          },
          {
              name: 'P Shaw',
              id: 55,
              points: 397,
              credit: 9,
              role: 'bt'
          },
          {
              name: 'A Rahane',
              id: 56,
              points: 17,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'S Smith',
              id: 57,
              points: 168,
              credit: 8.5,
              role: 'bt'
          },
          {
            name: 'S Hetmyer',
            id: 58,
            points: 114,
            credit: 8.5,
            role: 'bt'
          },
          {
            name: 'A Joshi',
            id: 59,
            points: 0,
            credit: 8,
            role: 'bt'
        }
        ],
        allrounders: [
          {
              name: 'C Woakes',
              id: 511,
              points: 174,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'M Stoinis',
              id: 512,
              points: 177,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'A Patel',
              id: 513,
              points: 163,
              credit: 8.5,
              role: 'ar'
          },
          {
              name: 'L Yadav',
              id: 514,
              points: 203,
              credit: 8,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'K Rabada',
              id: 518,
              points: 195,
              credit: 9,
              role: 'bl'
          },
          {
              name: 'I Sharma',
              id: 519,
              points: 55,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'A Mishra',
              id: 520,
              points: 192,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'A Khan',
              id: 521,
              points: 399,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'U Yadav',
              id: 522,
              points: 0,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'A Nortje',
              id: 523,
              points: 0,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'T Curran',
              id: 524,
              points: 54,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'L Meriwala',
              id: 525,
              points: 27,
              credit: 8,
              role: 'bl'
          }
        ]
      }
    },
    {
      name: 'Rajasthan Royals',
      code: 'rr',
      rank: 8,
      nrr: 0.824,
      points: 2,
      color: '#de83cd',
      rem_credit: 100,
      players: {
        wicketkeepers: [
            {
                name: 'J Buttler',
                id: 61,
                points: 232,
                credit: 9.5,
                role: 'wk'
            },
            {
                name: 'S Samson',
                id: 62,
                points: 377,
                credit: 9.5,
                role: 'wk'
            }
        ],
        batsmen: [
          {
            name: 'D Miller',
            id: 64,
            points: 160,
            credit: 9,
            role: 'bt'
          },
          {
              name: 'M Vohra',
              id: 65,
              points: 67,
              credit: 8,
              role: 'bt'
          },
          {
              name: 'R Parag',
              id: 66,
              points: 198,
              credit: 8.5,
              role: 'bt'
          },
          {
              name: 'Y Jaiswal',
              id: 67,
              points: 89,
              credit: 8,
              role: 'bt'
          },
          {
            name: 'M Lomror',
            id: 68,
            points: 0,
            credit: 8,
            role: 'bt'
          }
        ],
        allrounders: [
          {
              name: 'C Morris',
              id: 611,
              points: 405,
              credit: 9.5,
              role: 'ar'
          },
          {
              name: 'R Tewatia',
              id: 612,
              points: 167,
              credit: 9,
              role: 'ar'
          },
          {
              name: 'S Dube',
              id: 613,
              points: 215,
              credit: 8.5,
              role: 'ar'
          }
        ],
        bowlers: [
          {
              name: 'J Unadkat',
              id: 618,
              points: 175,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'M Rahman',
              id: 619,
              points: 175,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'S Gopal',
              id: 620,
              points: 7,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'C Sakariya',
              id: 621,
              points: 233,
              credit: 8.5,
              role: 'bl'
          },
          {
              name: 'K Cariappa',
              id: 622,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'K Tyagi',
              id: 623,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'M Markande',
              id: 624,
              points: 0,
              credit: 8,
              role: 'bl'
          },
          {
              name: 'A Singh',
              id: 625,
              points: 0,
              credit: 8,
              role: 'bl'
          }
        ]
      }
    },
    {
        name: 'Sunrisers Hyderabad',
        code: 'srh',
        rank: 6,
        nrr: 0.824,
        points: 2,
        color: '#ed9e2f',
        rem_credit: 100,
        players: {
            wicketkeepers: [
                {
                    name: 'J Bairstow',
                    id: 71,
                    points: 358,
                    credit: 10,
                    role: 'wk'
                },
                {
                    name: 'W Saha',
                    id: 72,
                    points: 42,
                    credit: 8.5,
                    role: 'wk'
                }
            ],
            batsmen: [
              {
                name: 'D Warner',
                id: 75,
                points: 298,
                credit: 10.5,
                role: 'bt'
              },
              {
                  name: 'M Pandey',
                  id: 76,
                  points: 247,
                  credit: 9,
                  role: 'bt'
              },
              {
                  name: 'K Williamson',
                  id: 77,
                  points: 156,
                  credit: 9,
                  role: 'bt'
              },
              {
                name: 'J Roy',
                id: 78,
                points: 0,
                credit: 9,
                role: 'bt'
              },
              {
                name: 'K Jadhav',
                id: 79,
                points: 53,
                credit: 8,
                role: 'bt'
              },
              {
                name: 'V Singh',
                id: 710,
                points: 38,
                credit: 8,
                role: 'bt'
              },
              {
                name: 'A Samad',
                id: 711,
                points: 57,
                credit: 8,
                role: 'bt'
              }
            ],
            allrounders: [
              {
                  name: 'J Holder',
                  id: 715,
                  points: 87,
                  credit: 9,
                  role: 'ar'
              },
              {
                  name: 'M Nabi',
                  id: 716,
                  points: 70,
                  credit: 8.5,
                  role: 'ar'
              },
              {
                  name: 'V Shankar',
                  id: 717,
                  points: 164,
                  credit: 8.5,
                  role: 'ar'
              },
              {
                  name: 'A Sharma',
                  id: 718,
                  points: 87,
                  credit: 8,
                  role: 'ar'
              }
            ],
            bowlers: [
              {
                  name: 'Rashid Khan',
                  id: 720,
                  points: 347,
                  credit: 9.5,
                  role: 'bl'
              },
              {
                  name: 'B Kumar',
                  id: 721,
                  points: 90,
                  credit: 8.5,
                  role: 'bl'
              },
              {
                  name: 'S Sharma',
                  id: 722,
                  points: 6,
                  credit: 8.5,
                  role: 'bl'
              },
              {
                  name: 'Mujeeb-ur-Rahman',
                  id: 723,
                  points: 55,
                  credit: 8.5,
                  role: 'bl'
              },
              {
                  name: 'S Kaul',
                  id: 724,
                  points: 87,
                  credit: 8,
                  role: 'bl'
              },
              {
                  name: 'J Suchith',
                  id: 725,
                  points: 38,
                  credit: 8,
                  role: 'bl'
              },
              {
                name: 'K Ahmed',
                id: 726,
                points: 131,
                credit: 8,
                role: 'bl'
              },
              {
                name: 'S Nadeem',
                id: 727,
                points: 37,
                credit: 8,
                role: 'bl'
              }
            ]
          }
      },
    {
      name: 'Kolkata Knight Riders',
      code: 'kkr',
      rank: 7,
      nrr: 0.824,
      points: 2,
      color: '#d4af37',
      rem_credit: 100,
    },
    
  ]

export default teams