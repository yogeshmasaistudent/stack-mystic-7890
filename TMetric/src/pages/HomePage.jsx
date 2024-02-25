import "../styles/HomePage.css";
import { MdEmail } from "react-icons/md";
// import Homepage from "./HomePage/Homepage";

export const HomePage = () => {
   
  return (
    <>
      <div className="HomePageMainDiv">
        
        <div className="HomePageContainer1">
          <div className="HomePageContainer1_Text">
            <h1>Empower your Team with Time Tracking</h1>
            <p>
            TMetric streamlines your team work so you can focus on what matters
            </p>
            <div className="HomePageContainer1_EmailDiv">
              <div>
                <MdEmail />
              </div>
              <input type="text" placeholder="Enter your email address" />
            </div>
            <div className="HomePageContainer1_StartBtn">
              <button>Get Started</button>
              <div>Fully Functional 30-Day Trial</div>
            </div>
          </div>
          <div className="HomePageContainer1_Img" >
            <img className="homepage_img" src="https://tmetric.com/media/oaejbiic/img-home-heading.svg" alt="tmentric" />
            
          </div>

        </div>

        <div className="HomePageContainer2">
          <div >
            <img 
              src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/a00doqsb/icon-customer-rating.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg"
              alt=""
            />
          </div>
        </div>
       
        
      </div>
    </>
  );
};