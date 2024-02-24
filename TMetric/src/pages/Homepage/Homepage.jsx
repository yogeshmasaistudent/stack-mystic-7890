
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
import Secondsection from "../component/Secondsection"
import Thirdsection from "../component/Thirdsection"
import { HomePage } from "../HomePage"
import { Footer } from "../../Components/Footer"
// import { Navbar } from "../../Components/Navbar"
function Homepage() {
  return (
    <div>
      <Box>
      <HomePage/>
        <Firstsection/>           
       <ManageTeamData/>
       <Secondsection/>
       <Thirdsection/>
       <PopularServices/>
       <WhyTrackTime/>
       <Reviews/>
       <TrustedByCompany/>
       <WhyTmetric/>
       <MakeTime/>
       <Footer/>
      </Box>

    </div>
  )
}

export default Homepage