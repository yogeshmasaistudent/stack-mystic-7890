import { useState } from "react";
import style from "../styles/login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";



const LogIn = () => {

  const [user, setuser] = useState({});

  const [showErr, setShowErr] = useState(false);
  const handleChange = (e) => {
    let { name, value } = e.target;
    setuser({
      ...user,
      [name]: value,
    });
    setShowErr(false)
  };
  const navigate = useNavigate();
  const toast = useToast();
  const handleSubmit = async(e) => {
    e.preventDefault();    
    const response = await axios.post('https://youdoos.onrender.com/users/login', user)
    .then((response) => {
      console.log(response.data.accessToken);
      if(response.data.accessToken){
        console.log("succes");
        toast({
          title: 'Login',
          description: "Login Succesfull",
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        navigate("/dashboard");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  };

  return (
    <div className={style.log}>
      <div className={style.loginmain}>
        <div className={style.loginmainimg}>
          <div className={style.signupmaindiv1inputimg}>
            <img
              src="https://id.tmetric.com/images/tmetric_logo_and_text.svg"
              alt=""
            />
          </div>

          <div className={style.signupmaindiv1inputh1}>
            <h1>Log into TMetric</h1>
          </div>
        </div>

        <div style={{ bg: "white" }}>
          <div className={style.signupmaininputs}>
            {/* emai */}
            <form onSubmit={handleSubmit}>
              <div className={style.signupmaininputs1}>
                <label>Email</label>
                <input className="email"
                  type="email"
                  placeholder="JohnSmith@gmail.com"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* password */}

              <div className={style.signupmaininputs1}>
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* button */}
              {showErr && (
                <div style={{marginLeft:'60px',color:"red"}}>
                  <p>Wrong credentials</p>
                </div>
              )}
              <div>
                <button className={style.signupmaininputsbtn} type="submit">
                  Log In
                </button>
              </div>
            </form>
            {/* hr */}

            <div className={style.signupmaininputshr}>
             

              <span>or</span>

            
            </div>
          </div>

          <div className={style.signupadsection}>
            <div className={style.signupadsection1}>
              <img src="https://id.tmetric.com/images/google_logo.svg" alt="" />
              <p>Log In with Google</p>
            </div>

            <div className={style.signupadsection1}>
              <img
                src="https://id.tmetric.com/images/microsoft_logo.svg"
                alt=""
              />
              <p>Log In with Google</p>
            </div>
            <div className={style.signupadsection1}>
              <img src="https://id.tmetric.com/images/apple_logo.svg" alt="" />
              <p>Log In with Google</p>
            </div>

            <br />

            <div className={style.signupadsechrunder}>
              <p style={{ color: "blue" }}>Can't Log In?</p>

              <p style={{ color: "blue" }}>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;