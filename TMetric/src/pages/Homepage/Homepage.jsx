
// import Navbar from './Navbar'

import Firstsection from "../component/Firstsection"
import { ManageTeamData } from "./ManageTeamData"
// import MakeTime from "./MakeTime"
import { PopularServices } from "./PopularService"
import { SingleTab } from "./SingalTab"
import { TrustedByCompany } from "./TrustByCompany"
import { WhyTmetric } from "./WhyTemtric"


function Homepage() {
  return (
    <div>
       <Firstsection/>
       <ManageTeamData/>
       <PopularServices/>
       {/* <SingleTab/> */}
       <TrustedByCompany/>
       <WhyTmetric/>
       {/* <MakeTime/> */}
      

    </div>
  )
}

export default Homepage