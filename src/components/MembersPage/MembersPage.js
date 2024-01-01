import { useBreakpointValue } from "@chakra-ui/react";
import MemberDesk from "./MembersGrid/MemberDesk"


function MembersPage() {
  const breakpoint = useBreakpointValue({ base: "base", md: "md", lg: "lg" });

  return (
    <MemberDesk />
  );
}

export default MembersPage;
