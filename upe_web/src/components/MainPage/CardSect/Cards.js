//parent file to conditionally load either DeskCards for regular display, or MobileCards for mobile

import { useBreakpointValue } from "@chakra-ui/react";
import CardDesk from "./CardOrg/CardDesk";
import CardMobile from "./CardOrg/CardMobile";

function Cards() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <>
      {breakpoint === "lg" && <CardDesk />}
      {breakpoint !== "lg" && <CardMobile />}
    </>
  );
}

export default Cards;
