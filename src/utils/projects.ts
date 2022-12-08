import type { ProjectTypes } from "../types/index";

let Projects: ProjectTypes[];
Projects = [
  {
    id: Date.now() * Math.random(),
    avatar: "/project/myBio.png",
    title: "Personal portfolio",
    stack: ["/icons/next.svg", "/icons/ts.svg", "/icons/tailwind.svg"],
    desc: "This is my Personal website who I am used to showcase my Blog, about personal dan All of Project i created. I build it with Next Typescript, starter blog with MDX and styling with Tailwind CSS",
    link: {
      demo: "https://github.com/Mohriswan12/Folks-Movie",
      github: "https://github.com/Mohriswan12/Folks-Movie",
    },
  },
  {
    id: Date.now() * Math.random(),
    avatar: "/project/folks.png",
    title: "Folks Movie",
    stack: ["/icons/react.svg", "/icons/tailwind.svg", "/icons/vite.svg", "/icons/netlify.svg"],
    desc: "Folks movie is an application that is used to search for movie information based on search keywords. displaying the title, rating and voting of a film. That API from api.themoviedb.org/",
    link: {
      demo: "https://github.com/Mohriswan12/Folks-Movie",
      github: "https://github.com/Mohriswan12/Folks-Movie",
    },
  },
  {
    id: Date.now() * Math.random(),
    avatar: "/project/todo.png",
    title: "Devcode Todo Challange",
    stack: [
      "/icons/react.svg",
      "/icons/ts.svg",
      "/icons/tailwind.svg",
      "/icons/vite.svg",
      "/icons/netlify.svg",
    ],
    desc: "It represent basic CRUD application, and also there is data manipulation, the challenge is fun and competitive, challenger should be able to create an app that will create, read, update, and delete activities. This challenge is hosted by Gethire devcode Challenge",
    link: {
      demo: "https://github.com/Mohriswan12/Devcode-Todo-Challange",
      github: "https://github.com/Mohriswan12/Devcode-Todo-Challange",
    },
  },
  {
    id: Date.now() * Math.random(),
    avatar: "/project/hijab.png",
    title: "Hijabistahub (clone)",
    stack: ["/icons/react.svg", "/icons/tailwind.svg", "/icons/vite.svg", "/icons/netlify.svg"],
    desc: "Hijabistahub is an e-commerce based in Malaysia, it started when I applied for a job vacancies to a Malaysian IT company, They gave me the task to cloning this e-commerce within 3 days. Even though I failed in the final result, I learned a lot from this assignment.",
    link: {
      demo: "https://github.com/Mohriswan12/Hijabistahub",
      github: "https://github.com/Mohriswan12/Hijabistahub",
    },
  },
  {
    id: Date.now() * Math.random(),
    avatar: "/project/pos.png",
    title: "Point of sale",
    stack: [
      "/icons/react.svg",
      "/icons/ts.svg",
      "/icons/tailwind.svg",
      "/icons/ex.svg",
      "/icons/pg.svg",
    ],
    desc: 'Previously, I was a former Barista and Assistant Manager at a coffee shop, every day I was always faced with a cashier application that was used to serve customers. From there I had a great curiosity about "How do people make it ?" I started learning about web programming, and now I can make this application. And this app is my first fullstack App build with Typescript',
    link: {
      demo: "https://github.com/Mohriswan12/Point-of-sale",
      github: "https://github.com/Mohriswan12/Point-of-sale",
    },
  },
];

export { Projects };
