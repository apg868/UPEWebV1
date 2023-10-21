import Image1 from "./../../../../assets_folder/banner1.jpg"
import Image2 from "./../../../../assets_folder/banner2.jpg"
import Image3 from "./../../../../assets_folder/banner3.jpg"
import {Flex, Box, HStack, VStack} from "@chakra-ui/react"
import CardFrame from "../CardFrame"


function CardMobile(){
    return(
        <>
        <HStack spacing="4em">
            <CardFrame image={Image1} title="big title 1" description="1asdadasdasdasdasdasdasdasdasdasdasdasdasdasda"/>
            <CardFrame image={Image2} title="big title 2" description="3asdadasdasdasdasdasdasdasdasdasdasdasdasdasda"/>
            <CardFrame image={Image3} title="big title 3" description="2asdadasdasdasdasdasdasdasdasdasdasdasdasdasda"/>
        </HStack>

        </>
    )
}

export default CardMobile