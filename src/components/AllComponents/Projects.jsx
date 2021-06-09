import React from "react";
import { Card } from "./Card";
import Carousel from "react-elastic-carousel";

const projects = [
  {
    name: "Visualiser",
    image: `${process.env.PUBLIC_URL}/images/visualise-dashboard.PNG`,
    summary:
      "Visualisation App, designed for health professionals and managers to help them make future decisions based on observation of numbers of diagnosis cases displayed on a chart, graph, and table.",
    source: "https://github.com/sthasub/Visualiser",
    live: "https://health-visualiser.herokuapp.com/",
  },
  {
    name: "Tech-Blog",
    image: `${process.env.PUBLIC_URL}/images/tech-blog.PNG`,
    summary:
      "Techblog, is a blogging platform for sharing thoughts, new idea, new events related to technology",
    source: "https://github.com/SthaSub/Tech-Blog.git",
    live: "https://techblogging.herokuapp.com/",
  },
  {
    name: "Code Quiz",
    image: `${process.env.PUBLIC_URL}/images/code-quiz.PNG`,
    summary:
      "Code Quiz, An online IT quiz challenge to see the how much knowledge you have about IT",
    source: "https://github.com/SthaSub/code-quiz.git",
    live: "https://sthasub.github.io/code-quiz/quiz.html",
  },
  {
    name: "CodeNoob",
    image: `${process.env.PUBLIC_URL}/images/codeNoob.PNG`,
    summary: "CodeNoob, an Online Q/A Forum for novice coder",
    source: "https://github.com/bencyna/codeNoob.git",
    live: "https://code-noob.herokuapp.com/",
  },
  {
    name: "Team Profile",
    image: `${process.env.PUBLIC_URL}/images/team-profile.PNG`,
    summary:
      "Team building, an application to design the unique team displaying their basic information",
    source: "https://github.com/SthaSub/team-profile-generator.git",
    live: "https://vimeo.com/515954460",
  },
];

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 2 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 4 },
];

export const Projects = (props) => {
  const [project, setProject] = React.useState(projects);
  
  return (
      <div>
        <Carousel breakPoints={breakPoints}>
        {project.map((p,index) => 
           <Card key={index}
              source={p.source}
              live={p.live}
              name={p.name}
              summary={p.summary}
              image={p.image}
              
            />
          )}
        </Carousel>
      </div>
  );
};
