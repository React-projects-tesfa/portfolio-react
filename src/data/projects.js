import nameOrogin from "../imgs/projects/nameOrigin.png";
import dandyReads from "../imgs/projects/dandyReads.jpg";
import admindashboard from "../imgs/projects/admindashboard.png";
import socialmedia from "../imgs/projects/socialmedia.png";

export const projects = [
  {
    name: "Admin Dashboard",
    description:
      "This is an admin dashboard to manage products, transactions, performance and sales info with yearly, monthly, and daily breakdowns. Users can also get information about their customers and their geographical information.",
    githubLink: "https://github.com/Tesfa-eth/admin-dashboard",
    liveDemoAvailable: true,
    demoLink: "https://adminboards.netlify.app", // live demo or video link
    image: admindashboard,
  },
  {
    name: "Social media app",
    description:
      "A fully functional social media app where users can sign in, add friends, post (including images) as well as like and comment accordingly.",
    githubLink: "https://github.com/Django-projects-tesfa/DandyReads",
    liveDemoAvailable: true,
    demoLink: "https://socialmedia-da5e.onrender.com/#/home", // live demo or video link
    image: socialmedia,
  },
  {
    name: "Name origin",
    description:
      "a web app that uses an api from a machine learning algorithm from nationalize.io to displays the origin of your name, its probable accuracy and other information about the origin country.",
    githubLink: "https://github.com/Tesfa-eth/name-origin",
    liveDemoAvailable: true,
    demoLink: "https://nameorigin.netlify.app/", // live demo or video link
    image: nameOrogin,
  },
  {
    name: "Dandy Reads",
    description:
      "DandyReads is a full stack web application where users can search for books on Google Books api, add them to their reading list and calculate the how long a certain book will take them to read.",
    githubLink: "https://github.com/Django-projects-tesfa/DandyReads",
    liveDemoAvailable: false,
    demoLink: "https://nameorigin.netlify.app/", // live demo or video link
    image: dandyReads,
  },
];
