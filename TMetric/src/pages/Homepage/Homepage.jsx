
import Firstsection from "../component/Firstsection"
import { ManageTeamData } from "./ManageTeamData"
import MakeTime from "./MakeTime"
import { PopularServices } from "./PopularService"
import Reviews from "./Reviews"
import { TrustedByCompany } from "./TrustByCompany"
import { WhyTmetric } from "./WhyTemtric"
import { Box } from "@chakra-ui/react"
import { Navbar } from "../../Components/Navbar"
import WhyTrackTime from "./WhyTrackTime"
function Homepage() {
  return (
    <div>
      <Box>
      
        <Firstsection/>           
       <ManageTeamData/>
       <PopularServices/>
       <WhyTrackTime/>
       <Reviews/>
       <TrustedByCompany/>
       <WhyTmetric/>
       <MakeTime/>
      </Box>
   
    </div>
  )
}

export default Homepage