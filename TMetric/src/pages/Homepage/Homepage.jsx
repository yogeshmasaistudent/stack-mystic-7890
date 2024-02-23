
import Firstsection from "../component/Firstsection"
import { ManageTeamData } from "./ManageTeamData"
import MakeTime from "./MakeTime"
import { PopularServices } from "./PopularService"
import Reviews from "./Reviews"
import { TrustedByCompany } from "./TrustByCompany"
// import { WhyTmetric } from "./WhyTemtric"
import { Box } from "@chakra-ui/react"
<<<<<<< HEAD
// import { Navbar } from "../../Components/Navbar"
=======

>>>>>>> d7861afb7ddbe8063d95e4a35c4c8fe65afd2fb8
function Homepage() {
  return (
    <div>
      <Box>
      
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