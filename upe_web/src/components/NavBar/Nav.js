import { useBreakpointValue } from "@chakra-ui/react";
import BaseNav from './BaseNav';
import HamNav from './HamNav';

function NavBar() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <>
      {breakpoint === "base" && <HamNav/>}
      {breakpoint !== "base" && <BaseNav/>}
    </>
  );
}

export default NavBar;
