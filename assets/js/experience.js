//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development Intern",
    cardImage: "assets/images/experience-page/cpp.png",
    place: "cppsecrets.com",
    time: "(Oct, 2019 - Dec 2019)",
    desp: "<li>Improved User Onboarding Experience by 10%.</li> <li>Optimise code written in C++ and have written various articles on c++ standard template libraries.</li><li>Learned how to enhance the space and time complexities of various codes that I can execute in my next work, next time if this happens. Hence, It loads fast and consumes less space.</li>"
  },
  {
    title: "Data Analyst - Virtual ",
    cardImage: "assets/images/experience-page/jp.png",
    place: "JP Morgan & Chase",
    time: "(May - July, 2020)",
    desp: "<li>Built code structure of various libraries which reduce errors and bugs and increase the efficiency of patterns. </li><li>Worked on data handling, data manipulation and data visualization using python libraries such as Pandas, Numpy and Matplotlib.</li><li>Interface with a Stock Price Data Feed, also used JPMorgan Chase Frameworks and tools. Display data visually for traders(Traders's dashboard).</li>"
  },
  // {
  //   title: "Research Intern",
  //   cardImage: "assets/images/experience-page/IIT_Bombay.jpg",
  //   place: "IIT, Bombay",
  //   time: "(Dec, 19 - Jan, 20)",
  //   desp:"<li>Worked on the project “LTI (Learning Tools Interoperability) 2.0 standards Implementation for ekShiksha.</li><li>Designed a software that would help faculty to create a quiz using the questions from the database based on his/her choice of topics and he should be provided with various facilities and options to create a quiz of his choice.</li>",
  // },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "KickStart Round - C 2021",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Scored Global rank 1000 in coding contest organised by Google.",
  },
  {
    title: "Codechef MAY Lunchtime 2021",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Scored Global rank 212 in a coding contest organised by Codechef.",
  },
  {
    title: "Codechef & Codeforces",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Maximum rating 1901 on Codechef & 1660(EXPERT) on Codeforces.",
  },
  {
    title: "Codeforces round 707",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Scored Global rank in 700 in a coding contest organised by Codeforces.",
  },
  {
    title: "Fcebook HackerCup Round",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Scored Global rank in 600 in a coding contest organised by Codechef.",
  },
  {
    title: "Leetcode & GFG",
    cardImage: "assets/images/experience-page/yo.png",
    description:
      "Solved 200+ Data Structure & Algorithms questions.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


