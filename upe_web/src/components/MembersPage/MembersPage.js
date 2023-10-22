import { useBreakpointValue } from "@chakra-ui/react";
import MemberDesk from "./MembersGrid/MemberDesk"
import MemberMed from "./MembersGrid/MemberMed";
import MemberMobile from "./MembersGrid/MemberMobile";


function MembersPage() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <>
      {breakpoint === "base" && <MemberMobile/>}
      {breakpoint === "md" && <MemberMed/> }
      {breakpoint === "lg" && <MemberDesk/>}
    </>
  );
}

export default MembersPage;
