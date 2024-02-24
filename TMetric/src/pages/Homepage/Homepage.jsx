
import Firstsection from "../component/Firstsection"
import { ManageTeamData } from "./ManageTeamData"
import MakeTime from "./MakeTime"
import { PopularServices } from "./PopularService"
import Reviews from "./Reviews"
import { TrustedByCompany } from "./TrustByCompany"
// import { WhyTmetric } from "./WhyTemtric"
import { Box } from "@chakra-ui/react"
import { HomePage } from "../HomePage"
// import { Navbar } from "../../Components/Navbar"
// import { Navbar } from "../../Components/Navbar"
function Homepage() {
  return (
    <div>
        <Box>
        <HomePage/>
        <Firstsection/>           
       <ManageTeamData/>
       <PopularServices/>
       <Reviews/>
       <TrustedByCompany/>
       {/* <WhyTmetric/> */}
       <MakeTime/>
      </Box>
    </div>
  )
}

export default Homepage