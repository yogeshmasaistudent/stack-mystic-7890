import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AllRoutes from './routes/Allroutes'

import SideBar from './Components/SideBar';

import { DetailedReports } from './pages/DetailedReports';
import { Mywork } from './pages/Mywork';
function App() {
  return (
   <div>
   {/* <AllRoutes/> */}
   <Mywork/>
   <SideBar/>
   <DetailedReports/>
    {/* <Homepage/> */}
   </div>
  )
}

export default App
