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
