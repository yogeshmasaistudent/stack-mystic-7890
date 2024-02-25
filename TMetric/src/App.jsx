import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllRoutes from './routes/Allroutes'
import Dashboard from './pages/Dashboard/Dashboard';
import Task from './pages/Task/Task';
import Time from './pages/Time/Time';


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
    {/* <Dashboard/> */}
//     <Task/>
    {/* <Time/> */}
   </div>
  )
}

export default App
