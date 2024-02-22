import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AllRoutes from './routes/Allroutes'
import Homepage from './pages/Homepage/Homepage' 

function App() {
  return (
   <div>
   <Homepage/>
    <AllRoutes/>
   </div>
  )
}

export default App
