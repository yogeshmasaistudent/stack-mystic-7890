import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { BiChevronDown } from 'react-icons/bi'
// import { BsGlobe2 } from 'react-icons/bs'
// import { DropdownWhyTMatric } from './DropdownWhyTMatric';
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import { DropdownWhyTMatric } from './DropdownWhyTMatric'
import { DropdownApp } from './DropdownAppIntegeration'
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
        
        <div>
            
<nav className=" NavbarMainDiv navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    {/* <Link className='NavbarImage navbar-brand'>
                <img onClick={() => navigate('/')} src="https://tmetric.com/images/tmetric_logo_with_text.svg" width="147" height="54" alt="TMETRIC" />
                <button>ENG</button>
            </Link> */}
    <div className="navbar-brand " onClick={handleLinkClick} > <img onClick={() => navigate('/')}  src="https://tmetric.com/images/tmetric_logo_with_text.svg" alt="" /> </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav">
      <div className="nav-item NavbarPageName">
      <div className={` nav-link active ${whyTMetricDropdown && 'dropdownSelected'}`}><span onClick={WhyTMatricClick}>Why TMetric</span>
       </div>
      
        </div>
        <div className="nav-item NavbarPageName ">
                <span className='nav-link active' onClick={AppClick}>Apps & Integrations</span>
            </div>
        <div className="nav-item NavbarPageName" onClick={handleLinkClick}>
          <Link className="nav-link active nav-item"  to={'/price'}>Price</Link>
        </div>
        <div className="nav-item NavbarPageName" onClick={handleLinkClick}>
          <Link className="nav-link active"  to={'/support'}>Support</Link>
        </div>
        <div className="nav-item NavbarPageName" onClick={handleLinkClick}>
          <Link className="nav-link active"  to={'/blog'}>Blog</Link>
        </div>
        <div className="nav-item NavbarLoginSignup Nav ">
                <Link className="nav-link active" to="/login">Log In</Link>
                <button onClick={()=>navigate("/signup")}>Sign Up</button>
            </div>
      </div>
    </div>
  </div>
</nav>
            {/* 
            <div className={`NavbarPageName ${whyTMetricDropdown && 'dropdownSelected'}`}><span onClick={WhyTMatricClick}>Why TMetric</span></div>
            <div className={`NavbarPageName `} ><span onClick={AppClick}>Apps & Integrations</span></div>
            <div className='NavbarPageName'><Link to={'/price'}>Pricing</Link></div>
            <div className='NavbarPageName'><Link to={'/support'}>Support</Link></div>
            <div className='NavbarPageName'><Link to={'/blog'}>Blog</Link> </div>

            <div className="NavbarLoginSignup">
                <Link to="/login">Log In</Link>
                <button onClick={()=>navigate("/signup")}>Sign Up</button>
            </div> */}
            {whyTMetricDropdown && <DropdownWhyTMatric />}
            {appsDropdown && <DropdownApp />}
        </div>
    )
}
{/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
<div className="container-fluid">
    <a className="navbar-brand" href="#">TMETRIC</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
            <div className="nav-item">
                <Link className="nav-link" to={'/'}>Home</Link>
            </div>
            <div className="nav-item">
                <span className="nav-link" onClick={WhyTMatricClick}>Why TMetric</span>
            </div>
            <div className="nav-item">
                <span className="nav-link" onClick={AppClick}>Apps & Integrations</span>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to={'/price'}>Pricing</Link>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to={'/support'}>Support</Link>
            </div>
            <div className="nav-item">
                <Link className="nav-link" to={'/blog'}>Blog</Link>
            </div>
        </div>
    </div>
</div>
</nav> */}