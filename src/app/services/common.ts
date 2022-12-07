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
