import { useState } from "react";
import "../styles/Price.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { Box, Stack, Switch } from "@chakra-ui/react";
import { Footer } from "../Components/Footer";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
const data = [
  {
    title: "Time tracking",
  },
  {
    title: "Unlimited projects and clients",
  },
  {
    title: "Reporting",
  },
  {
    title: "Timer button in 50+ web apps",
  },
  {
    title: "Calendar integrations: Google, Outlook",
  },
  {
    title: "Billable rates and money tracking",
  },
  {
    title: "Budgeting for projects",
  },
  {
    title: "Invoicing",
  },
  {
    title: "Task management",
  },
  {
    title: "Activity levels for employees",
  },
  {
    title: "Apps and sites usage reports",
  },
  {
    title: "Screenshots capturing",
  },
  {
    title: "Payroll for employees",
  },
  {
    title: "Time-sync with Jira and QuickBooks",
  },
  {
    title: "Time Off Calendar",
  },
  {
    title: "Work Schedule",
  },
  {
    title: "Team Dashboard",
  },
];

const Price = () => {
  const [teamSize, setTeamSize] = useState(1);

  return (
    <>
      <div>
        <div className="price-header">
          <h1> Pricing</h1>
          <p>All plans include free 30-day trial. No credit card required!</p>
        </div>
        <div>
          <div className="toggler">
            <div className="input-div">
              <Box display="flex" gap="10px">
                <Box>Annually</Box>
                <Stack direction="row">
                  <Switch colorScheme="green" size="md" />
                </Stack>
                <Box display="flex">Monthly</Box>
              </Box>
  
 
              <span
                style={{
                  fontWeight: "500",
                  marginRight: "10px",
                  fontSize: "20px",
                }}
              >
                Team Size
              </span>
              <input
                style={{ padding: "5px 10px", fontSize: "20px" }}
                type="number"
                value={teamSize || 1}
                onChange={({ target }) =>
                  setTeamSize(
                    target.value > 200
                      ? 200
                      : target.value < 1
                      ? 1
                      : target.value
                  )
                }
                min="1"
                max="200"
              />
            </div>
            <div className="range-div">
              <input
                className="iline"
                type="range"
                value={teamSize}
                min="1"
                max="200"
                name=""
                onChange={(e) => setTeamSize(e.target.value)}
                id=""
              />
            </div>
          </div>

          <div className="carddiv">
            <div className="B-part">
              <h1>Business</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {7 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>

              {data.map((cat, i) => {
                if (i > 9) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>
            <div className="B-part">
              <h1>Professional</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {5 * teamSize}{" "}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i > 5 && i < 10) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>

            <div className="B-part">
              <h1>Free</h1>
              <div className="tchange">
                <Link to="#">
                  <span style={{ fontSize: "20px" }}>$</span>
                  {0 * teamSize}
                  <span
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      fontWeight: "600",
                    }}
                  >
                    /month
                  </span>
                </Link>
              </div>
              {data.map((cat, i) => {
                if (i <= 3) {
                  return (
                    <div className="feature-item" key={uuid()}>
                      <TiTick className="TickIcon" />
                      {cat.title}
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="btn2">
        <button className="btn1">Get Started</button>
        <p style={{ marginTop: "30px", marginLeft: "10px" }}>
          Fully Functional 30-Day Trial
        </p>
      </div>
      <br></br>
      <p style={{ textAlign: "center" }}>
        Checkout out{" "}
        <span style={{ color: "#3070f0" }}>detailed plan comparison</span>{" "}
      </p>
      <hr style={{ marginTop: "20px" }}></hr>

      <div className="Q-part">
        <h1
          style={{ textAlign: "center", marginTop: "30px", fontSize: "35px" }}
        >
          Frequently Asked Questions
        </h1>

        <div style={{ width: "60%", marginLeft: "25%" }}>
          <div>
            <div style={{ marginTop: "30px" }}>
              <Link to="#" style={{ fontWeight: "600" }}>
                <span>
                  <button
                    style={{
                      background: "#fef6e2",
                      color: "#9b6919",
                      fontSize: "20px",
                      width: "50px",
                      height: "50px",
                      marginRight: "40px",
                      fontWeight: "600",
                      borderRadius: "12px",
                      border: "none",
                    }}
                  >
                    Q
                  </button>
                </span>
                Have a large team?
              </Link>
            </div>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              You can save money with our volume discount for teams of 40+
              users. Learn more on{" "}
            </Link>
            <span style={{ color: "#5ea0f5" }}> FAQ.</span>
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Running a non-profit organization?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">
              We offer special{" "}
              <span style={{ color: "#5ea0f5" }}>
                pricing options for non-profit
              </span>{" "}
              and education organizations. To apply, please{" "}
              <span style={{ color: "#5ea0f5" }}> contact</span> team
            </Link>
            .
          </div>

          <div style={{ marginTop: "30px" }}>
            <Link to="#" style={{ fontWeight: "600" }}>
              <span>
                <button
                  style={{
                    background: "#fef6e2",
                    color: "#9b6919",
                    fontSize: "20px",
                    width: "50px",
                    height: "50px",
                    marginRight: "40px",
                    fontWeight: "600",
                    borderRadius: "12px",
                    border: "none",
                  }}
                >
                  Q
                </button>
              </span>
              Have other sales questions?
            </Link>
          </div>

          <div style={{ marginTop: "30px" }}>
            <button
              style={{
                background: "#e3f8e7",
                color: "#127924",
                fontSize: "20px",
                width: "50px",
                height: "50px",
                marginRight: "40px",
                fontWeight: "600",
                borderRadius: "12px",
                border: "none",
              }}
            >
              A
            </button>
            <Link to="#">Please contact our sales department at </Link>
            <span style={{ color: "#5ea0f5" }}>sales@tmetric.com</span>
          </div>
        </div>
        <hr style={{ marginTop: "30px" }}></hr>
      </div>

      <div className="l-div">
        <h1 style={{ fontSize: "40px" }}>Make time work for you!</h1>
        <div className="btn2">
          <button className="btn1">Start Free Trial</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Price;
