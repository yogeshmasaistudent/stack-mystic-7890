import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import AllRoutes from './routes/Allroutes'
import Homepage from './pages/Homepage/Homepage';
import SideBar from './Components/SideBar';

import Dashboard from './pages/Dashboard';


function App() {
  return (
   <div>
   {/* <AllRoutes/> */}
   <Dashboard/>
    {/* <Homepage/> */}
   </div>
  )
}

export default App
