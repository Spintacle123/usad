export const time2TimeAgo = (ts: number) => {
    let togo = "";
    let d=new Date();  // Gets the current time
    let nowTs = Math.floor(d.getTime()/1000); // getTime() returns milliseconds, and we need seconds, hence the Math.floor and division by 1000
    let seconds = nowTs-ts;

    // more that two days
    if (seconds > 2*24*3600) {
      togo = "a few days ago";
    }
    // a day
    if (seconds > 24*3600) {
      togo = "yesterday";
    }

    if (seconds > 3600) {
      togo = "a few hours ago";
    }
    if (seconds > 1800) {
      togo = "Half an hour ago";
    }
    if (seconds > 60) {
      togo = Math.floor(seconds/60) + " minutes ago";
    }

    return togo;
}

export const jobList = [
    "Data Scientist",
    "Senior Software Engineer",
    "Investment Banker",
    "Chief Executive Officer",
    "Surgeon",
    "Anaesthesiologist",
    "Physician",
    "Neurosurgeon",
    "Oral & Maxillofacial Surgeon",
    "Orthodontist",
    "Gynaecologist",
    "Psychiatrist",
    "Airline Pilot & Co-Pilot",
    "Paediatrician",
    "Internist",
    "General Practitioner (GP)",
    "Dentist",
    "Petroleum Engineers",
    "Engineering Manager",
    "IT Manager",
    "Financial Analysts"
]


export const profiles = [
  {
    imgUrl: '/assets/imgs/dp.jpg',
    name: 'Kevin Santos Dy',
    email: 'kevin@gmail.com',
    rating: 3,
    address: '40 Sgt. Esguera, Quezon City',
    memberSince: 'Sept 2022',
    reponseTime: 3,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "plumbing",
      "carpenting",
      "mechanical skill",
      "log builder",
      "problem solving",
      "industrial",
      "finish carpenter"
    ]
  },
  {
    imgUrl: '/assets/imgs/dp3.jpg',
    name: 'Allamid Para Cetamol',
    email: 'allamid@gmail.com',
    rating: 5,
    address: '102 Tomas Morato, Quezon City',
    memberSince: 'Sept 2020',
    reponseTime: 1,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      }
    ],
    skills: [
      "programming",
      "cumputer repair",
      "mechanical skill",
      "log builder",
    ]
  },
  {
    imgUrl: '/assets/imgs/dp4.jpg',
    name: 'Gregory John Salbuet Tamol',
    email: 'gregory@gmail.com',
    rating: 3,
    address: 'Anonas Cubao, Quezon City',
    memberSince: 'Sept 2022',
    reponseTime: 4,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      },
      {
        dialect: 'Visaya',
        mastery: 'Native/Bilingual'
      },
      {
        dialect: 'Bicolnon',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "plumbing",
      "carpenting",
      "mechanical skill",
      "log builder",
    ]
  },
  {
    imgUrl: '/assets/imgs/dp2.jpg',
    name: 'Janette Lee Napol Lesh',
    email: 'janette@gmail.com',
    rating: 2,
    address: '40 Sgt. Esguera, Quezon City',
    memberSince: 'Sept 2019',
    reponseTime: 2,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "sketching",
      "sewing",
      "cooking",
      "accountant",
      "problem solving",
    ]
  },
  {
    imgUrl: '/assets/imgs/dp5.jpg',
    name: 'Maria Bernadette Santos',
    email: 'maria@gmail.com',
    rating: 5,
    address: '39 Sgt. Esguera, Quezon City',
    memberSince: 'Sept 2022',
    reponseTime: 1,
    language: [
      {
        dialect: 'English',
        mastery: 'Professional Conversation'
      },
      {
        dialect: 'Filipino',
        mastery: 'Native/Bilingual'
      }
    ],
    skills: [
      "accountant",
      "programmer",
      "baby sitter",
      "chef",
      "sewing",
    ]
  }
]

export const examQuestions = [
  {
    question: 'Joist hangers are used for which of the following?',
    options: [
      {
        letter: 'a',
        answer: 'Supporting joists against beams'
      },
      {
        letter: 'b',
        answer: 'Keeping joists straight during delivery'
      },
      {
        letter: 'c',
        answer: 'Inspection'
      },
      {
        letter: 'd',
        answer: 'There is no such thing as a joist hanger.'
      }
    ],
    timeLimit: 120
  },
  {
    question: 'What type of hammer is commonly selected for trim work?',
    options: [
      {
        letter: 'a',
        answer: ' Framing hatchet'
      },
      {
        letter: 'b',
        answer: '28-ounce long handle waffle head'
      },
      {
        letter: 'c',
        answer: '20-ounce long handle straight claw	'
      },
      {
        letter: 'd',
        answer: '16-ounce wood handle curved claw	'
      }
    ],
    timeLimit: 240
  },
  {
    question: 'What are plywood clips used for?',
    options: [
      {
        letter: 'a',
        answer: ' Straightening floor sheathing'
      },
      {
        letter: 'b',
        answer: 'Keeping plywood straight in stacks'
      },
      {
        letter: 'c',
        answer: 'Supporting roof sheathing edges between the trusses	'
      },
      {
        letter: 'd',
        answer: 'There is no such thing as a plywood clip.	'
      }
    ],
    timeLimit: 60
  },
  {
    question: 'A contractor is to excavate a basement containing 58,500 cu. ft. She removes 3,950 cu. ft., then 9,325 cu. ft., then 6,581 cu. ft., and finally 4,873 cu. ft. How many cubic feet remain in the basement?',
    options: [
      {
        letter: 'a',
        answer: ' 31,071 cu. ft.'
      },
      {
        letter: 'b',
        answer: '33,771 cu. ft.'
      },
      {
        letter: 'c',
        answer: '33,771 cu. ft.'
      },
      {
        letter: 'd',
        answer: '34,131 cu. ft.'
      }
    ],
    timeLimit: 120
  },
  {
    question: 'What is PL-400?',
    options: [
      {
        letter: 'a',
        answer: 'Drill bit size'
      },
      {
        letter: 'b',
        answer: 'Type of construction adhesive'
      },
      {
        letter: 'c',
        answer: 'Number of teeth on a hacksaw'
      },
      {
        letter: 'd',
        answer: 'Plywood specification'
      }
    ],
    timeLimit: 180
  },
  {
    question: 'Which is not a rule for laying out stairs?',
    options: [
      {
        letter: 'a',
        answer: 'The product obtained by multiplying one rise height by the tread width should be between 70 and 75 inches.'
      },
      {
        letter: 'b',
        answer: 'The sum of two risers is always the same.'
      },
      {
        letter: 'c',
        answer: 'The sum of one riser and one tread should be between 17 and 18 inches.'
      },
      {
        letter: 'd',
        answer: 'The number of treads and risers is always the same.'
      }
    ],
    timeLimit: 30
  },
  {
    question: 'Calculate 1/4 inch plus 1/4 inch.',
    options: [
      {
        letter: 'a',
        answer: 'Too small to calculate'
      },
      {
        letter: 'b',
        answer: '1/8 inch'
      },
      {
        letter: 'c',
        answer: '1/2 inch'
      },
      {
        letter: 'd',
        answer: '3/4 inch'
      }
    ],
    timeLimit: 90
  },
  {
    question: 'A wood auger bit marked 10 will drill with what diameter?',
    options: [
      {
        letter: 'a',
        answer: '1 inch'
      },
      {
        letter: 'b',
        answer: '1/3 inch'
      },
      {
        letter: 'c',
        answer: '5/8 inch'
      },
      {
        letter: 'd',
        answer: '10/32 inch'
      }
    ],
    timeLimit: 140
  },
  {
    question: 'The path a saw blade cuts in a piece of wood is called:',
    options: [
      {
        letter: 'a',
        answer: 'Waste'
      },
      {
        letter: 'b',
        answer: 'Kerf'
      },
      {
        letter: 'c',
        answer: 'Clearance'
      },
      {
        letter: 'd',
        answer: 'Set'
      }
    ],
    timeLimit: 50
  },
  {
    question: 'When squaring up a large rectangular object, which method would be the least acceptable to use?	',
    options: [
      {
        letter: 'a',
        answer: '6,8,10 method'
      },
      {
        letter: 'b',
        answer: 'Calculate a diagonal measurement'
      },
      {
        letter: 'c',
        answer: 'Measure diagonally both ways'
      },
      {
        letter: 'd',
        answer: 'Framing square'
      }
    ],
    timeLimit: 90
  }
]

export const correctAnswers = [
  'a', 'd', 'c', 'b', 'b', 'd', 'c', 'c', 'b', 'd'
]



export const secondToCountdown = (time: number) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60;

  return `${zeroPad(minutes, 2)}: ${zeroPad(seconds,2)}`
}

export const zeroPad = (num: number, places: number) => String(num).padStart(places, '0')
