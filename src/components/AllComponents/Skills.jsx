import React from "react";
import { Img } from ".";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
  ];
  

const skills = [
  {
    skill: `${process.env.PUBLIC_URL}/images/express.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/node.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/sequelize.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/ubuntu_350.jpg`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/html.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/css.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/git.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/js.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/mysql.jpg`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/java.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/hadoop.png`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/mongodb.PNG`,
  },
  {
    skill: `${process.env.PUBLIC_URL}/images/mongoose.png`,
  }
  
];

const Skills = () => {
    const [images, setImages] = React.useState(skills);
  return (
    <div>
        <Carousel breakPoints={breakPoints}>
        {
            images.map((image, index)=>
                <Img key={index} src={image.skill} />
            )
        }
        </Carousel>
        
    </div>
  );
};

export default Skills;
