import { Spacer, VStack } from "@chakra-ui/react";
import CaptionCarousel from "./Carousel";
import InternBox from "./InternButton";
import Image1 from "./../../assets_folder/card2.jpg"
import Image2 from "./../../assets_folder/card3.jpg"
import Image1v2 from "./../../assets_folder/InternProjectsImages/Project1.png"
import Image2v2 from "./../../assets_folder/InternProjectsImages/Project2.png"
import IntroBanner from "../MembersPage/IntroBanner";
import InternshipCarousel from "./Carousel2";
import Intern1 from "./../../assets_folder/InternshipImages/Intern1.jpg"
import Intern2 from "./../../assets_folder/InternshipImages/intern2v4.png"
import InternTemp from "./../../assets_folder/InternshipImages/tempIntern2.jpg"
import Intern3 from "./../../assets_folder/InternshipImages/Intern3v2.png"

const slidesData = [
    {
        image: Image1v2,
        name: "James Davin",
        description: "A personal static website",
        extendedDescription: "A personal static website featuring a Markdown-powered blog tool and an image gallery showcasing my personal portfolio of photographs.",
        technologies: "Next.js, Typescript, Cloudinary",
        challenges: "Learning to accept imperfect solutions for smaller problems so that I could solve more problems overall and create a better final product was a skill that I had to develop as development dragged on. In three words? Learning to compromise.",
        time: "Approximately ~30-50 hours",

    },
    {
        image: Image2v2,
        name: "Andrew Pio George, James Davin and Walker",
        description: "Stock sentiment analysis tool",
        extendedDescription: "A tool for any given NASDAQ/NYSE stock that webscrapes the most relevant news articles, passing them through a financial NLP model and returning a semantic analysis with various supplemental quantative metrics.",
        technologies: "React, Django, Numpy, Pytorch, Axios, BeautifulSoup",
        challenges: "Development and integration of the three moving parts - the React frontend, Django backend and the NLP model - in the strict time constraint of a 24-hour hackathon proved to be challenging.",
        time: "72 hours",
    }
];

const internsData =  [
    {
    image: Intern1,
    name: "Aiden Clark",
    major:"CAS 2025",
    description: "BI & Analysis Intern",
    company: "The Clearing House",
    },

    {
    image: Intern2,
    name: "Sai Nayunipati",
    major: "C.S. + Stats '25",
    description: "SWE Intern",
    company: "Jacobs"
    },

    {
        image: Intern3,
        name: "Grace Elias",
        major: "CS 2024",
        description: "SWE Intern",
        company: "Epic",
        },


]

function InternProjects(){
    return(
        <VStack spacing={{"base":"1rem","md":"3rem"}} paddingTop="2em">
            <VStack spacing={{"base":"0.5rem","md":"1.5rem"}}>
                <IntroBanner content="See Some of Our Highlighted Projects Below" />
                <CaptionCarousel slides={slidesData}/>
            </VStack>

            <VStack spacing={{"base":"0.5rem","md":"1.5rem"}}>
                <IntroBanner content="See the success of UPE Members in Industry!"/>
                <InternshipCarousel slides={internsData}/>
            </VStack>

        </VStack>
    )
}
export default InternProjects