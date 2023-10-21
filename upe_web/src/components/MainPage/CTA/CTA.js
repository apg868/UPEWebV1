//parent file to conditionally load either DeskCards for regular display, or MobileCards for mobile

import { useBreakpointValue } from "@chakra-ui/react";
import CTADesk from "./CTAOrg/CTADesk";
import CTAMobile from "./CTAOrg/CTAMobile";


function CTA() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <>
      {breakpoint === "base" && <CTAMobile />}
      {breakpoint !== "base" && <CTADesk />}
    </>
  );
}

export default CTA;
