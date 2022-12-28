import nameOrogin from '../imgs/projects/nameOrigin.png'
import dandyReads from '../imgs/projects/dandyReads.png'

export const projects = [
    {
      name: "Name origin",
      description: "a web app that uses an api from a machine learning algorithm to displays the origin of your name and its probable accuracy.",
      githubLink: "https://github.com/Tesfa-eth/name-origin", 
      liveDemoAvailable: true,
      demoLink: "https://nameorigin.netlify.app/", // live demo or video link
      image: nameOrogin,
    },
    {
        name: "Dandy Reads",
        description: "DandyReads is a full stack web application where users can search for books on Google Books api, add them to their reading list and calculate the how long a certain book will take them to read.",
        githubLink: "https://github.com/Django-projects-tesfa/DandyReads", 
        liveDemoAvailable: false,
        demoLink: "https://nameorigin.netlify.app/", // live demo or video link
        image: dandyReads,
      },
  ]