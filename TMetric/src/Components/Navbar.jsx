import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BiChevronDown } from 'react-icons/bi'
// import { BsGlobe2 } from 'react-icons/bs'
// import { DropdownWhyTMatric } from './DropdownWhyTMatric';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import {DropdownWhyTMatric} from '../Components/DropdownWhyTMatric';
import {DropdownApp} from '../Components/DropdownAppIntegeration';
// import { DropdownApp } from './DropdownApp&Integeration';
export const Navbar = () => {
    const [whyTMetricDropdown, setWhyTMetric] = useState(false)
    const [appsDropdown, setApps] = useState(false)
    const WhyTMatricClick = () => {
        setWhyTMetric(!whyTMetricDropdown)
        setApps(false);
        navigate('/why-tmetric');
    }
    const handleLinkClick = () => {
      setWhyTMetric(false);
      setApps(false);
  };
  
    const AppClick = () => {
        setWhyTMetric(false)
        setApps(!appsDropdown)
        navigate('/apps-integrations');
    }
    const navigate = useNavigate()
    return (
        

<nav style={{position: 'sticky', top: 0, zIndex: 1, height: 70, backgroundColor: 'white'}}  className="  navbar navbar-expand-lg  ">
  <div  className="container-fluid ">
   
    <div className="navbar-brand " onClick={handleLinkClick} > <img onClick={() => navigate('/')}  src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="" /> </div>
    
    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation ">
      <span  className="navbar-toggler-icon " ></span>
    </button>
    <div style={{backgroundColor: 'white'}}  className="collapse navbar-collapse " id="navbarNav">
      <div className="navbar-nav ">
      <div className="nav-item NavbarPageName ">
      <div className={` nav-link active  ${whyTMetricDropdown && 'dropdownSelected'}`}><span onClick={WhyTMatricClick}>Why TMetric</span>
       </div>
      
        </div>
        <div className="nav-item NavbarPageName ">
                <span className='nav-link active' onClick={AppClick}>Apps & Integrations</span>
            </div>
        <div className="nav-item NavbarPageName" onClick={handleLinkClick}>
          <Link className="nav-link active"   to={'/price'}>Pricing</Link>
        </div>
        <div className="nav-item NavbarPageName " >
          <Link className=" "  to={'/support'}>Support</Link>
        </div>
        <div className="nav-item NavbarPageName" >
          <Link className="nav-link active"  to={'/blog'}>Blog</Link>
        </div>
        <div className="nav-item NavbarLoginSignup ">
                <Link className="nav-link active" to="/login">Log In</Link>
                <button onClick={()=>navigate("/signup")}>Sign Up</button>
            </div>
      </div>
      {whyTMetricDropdown && <DropdownWhyTMatric />}
            {appsDropdown && <DropdownApp />}
        
    </div>
  </div>
    
        
</nav>

        
    )
}
