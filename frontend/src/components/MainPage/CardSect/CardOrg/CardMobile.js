import Image1 from "./../../../../assets_folder/company.png"
import Image2 from "./../../../../assets_folder/card2.jpg"
import Image3 from "./../../../../assets_folder/card3.jpg"
import { Flex, Box, HStack, VStack } from "@chakra-ui/react"
import CardFrame from "../CardFrame"


function CardDesk() {
    return (
        <Flex justifyContent="center">
            <VStack spacing="2em">
                <CardFrame image={Image1} title="Develop Your Network" description="Our alumni have become full-time software engineers at companies like Google, Amazon and Microsoft." />
                <CardFrame image={Image2} title="Gain Marketable Experience" description="Build your development skills by making real contributions to chapter projects." />
                <CardFrame image={Image3} title="Explore Computer Science" description="Participate in our workshops and seminars to strengthen your theoretical knowledge" />
            </VStack>

        </Flex>
    )
}

export default CardDesk