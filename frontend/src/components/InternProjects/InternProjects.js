import { Spacer, VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import Image1v2 from "./../../assets_folder/InternProjectsImages/Project1.png";
import Image2v2 from "./../../assets_folder/InternProjectsImages/Project2.png";
import Image3 from "./../../assets_folder/InternProjectsImages/Project3.png"
import Image4 from "./../../assets_folder/InternProjectsImages/Project4.png"
import Image5 from "./../../assets_folder/InternProjectsImages/Project5.png"
import IntroBanner from "../MembersPage/IntroBanner";
import InternshipCarousel from "./Carousel2";
import Intern1 from "./../../assets_folder/InternshipImages/Intern1.jpg";
import Intern2 from "./../../assets_folder/InternshipImages/Intern2.jpg";
import Intern3 from "./../../assets_folder/InternshipImages/Intern3v2.png";

const slidesData = [
  {
    image: Image1v2,
    name: "James Davin",
    description: "A personal static website",
    extendedDescription:
      "A personal static website featuring a Markdown-powered blog tool and an image gallery showcasing my personal portfolio of photographs.",
    technologies: "Next.js, Typescript, Cloudinary",
    skillsLearned:
      "During this project, I learned to adapt to a new version of a framework with fewer user-examples and more limited documentation, to accept compromises as valid solutions for smaller subproblems so that I could prioritize larger issues, and all about UX design and styling with Tailwind CSS.",
    time: "Approximately ~30-50 hours",
  },
  {
    image: Image2v2,
    name: "Andrew Pio George, James Davin and Walker Turley",
    description: "Stock sentiment analysis tool",
    extendedDescription:
      "A tool for any given NASDAQ/NYSE stock that webscrapes the most relevant news articles, passing them through a financial NLP model and returning a semantic analysis with various supplemental quantative metrics.",
    technologies: "React, Django, Numpy, Pytorch, Axios, BeautifulSoup",
    skillsLearned:
      "Learning to develop integrate the three main moving parts - the React frontend, Django backend and the NLP model - in the strict time constraint of a 24-hour hackathon, while adhering to our original goals and communicating effectively in a small team environment.",
    time: "72 hours",
  },
  {
    image: Image3,
    name: "Marcus Izumi",
    description: "Photo Journal Semantic Analyzer",
    extendedDescription: "A photo journal application that is able to store photos, captions, and provide a semantic analysis of the provided photo and caption pair.",
    technologies: "Swift, CreateML",
    skillsLearned: "I was able to revisit and refresh my programming capabilities in Swift, as well as practice the creation and use of ML models and semantic analysis models.",
    time: "15 hours"
  },
  {
    image: Image4,
    name: "Jason Jiang",
    description: "Country-Language Query Program",
    extendedDescription: "This is a Country Query program that displays all the given countries that speak a specific language. Search capabilities work both for language, and for any specific country, displaying their flag, capital, population, currency and region.",
    technologies: "Javascript, HTML, Tailwind CSS",
    skillsLearned: "I was able to explore this project using Javascript primarily, and practice my stylizing skills with Tailwind CSS.",
    time: "20 hours"
  },

  {
    image: Image5,
    name: "Sam Cowan",
    description: "BU Dining Hall Allergen Filter",
    extendedDescription: "Filtering website for BU Dining Hall options, to assist those with dietary restrictions. Once criteria are provided, it will use an API to fetch the current dining options, and provide a list of options within the specified criteria.",
    technologies: "Python, JS, Html, Css, Docker",
    skillsLearned: "This project allowed me to deepen my knowledge in a variety of technologies, and further my ability to link apis to my app to accomplish my desired usage.",
    time: "18 hours"
  }
];

const internsData = [
  {
    image: Intern1,
    name: "Aiden Clark",
    major: "CAS 2025",
    description: "BI & Analysis Intern",
    company: "The Clearing House",
  },

  {
    image: Intern2,
    name: "Sai Nayunipati",
    major: "C.S. + Stats '25",
    description: "SWE Intern",
    company: "Jacobs",
  },

  {
    image: Intern3,
    name: "Grace Elias",
    major: "CS 2024",
    description: "SWE Intern",
    company: "Epic",
  },
];

function InternProjects() {
  return (
    <VStack >
      <VStack spacing="2rem" paddingTop="3rem">
        <IntroBanner content="Explore Our Featured Projects" />
        <CaptionCarousel slides={slidesData} />
      </VStack>

      <VStack spacing={{ base: "0.5rem", md: "1.5rem" }}
      mb={{ base: "30px", md: "50px", lg: "70px" }}
>
        <IntroBanner content="Career Success of UPE Members" />
        <InternshipCarousel slides={internsData} />
      </VStack>
    </VStack>
  );
}
export default InternProjects;
