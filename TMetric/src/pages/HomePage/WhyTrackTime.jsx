import React, { useState } from 'react'
import { BsArrowRightShort } from 'react-icons/bs';
// import "./HomePage.css"
const WhyTrackTime = () => {
    const [softwareDevelopers, setSoftwareDevelopers] = useState(true);
    const [marketers, setMarketers] = useState(false);
    const [designers, setDesigners] = useState(false);
    const [contractors, setContractors] = useState(false);
    const [consultants, setConsultants] = useState(false);
    const [freelancers, setFreelancers] = useState(false);
    const HomePageContainer8 = (a) => {
      if (a === "softwareDevelopers") {
        setSoftwareDevelopers(true);
        setMarketers(false);
        setDesigners(false);
        setContractors(false);
        setConsultants(false);
        setFreelancers(false);
      } else if (a === "marketers") {
        setSoftwareDevelopers(false);
        setMarketers(true);
        setDesigners(false);
        setContractors(false);
        setConsultants(false);
        setFreelancers(false);
      } else if (a === "designers") {
        setSoftwareDevelopers(false);
        setMarketers(false);
        setDesigners(true);
        setContractors(false);
        setConsultants(false);
        setFreelancers(false);
      } else if (a === "contractors") {
        setSoftwareDevelopers(false);
        setMarketers(false);
        setDesigners(false);
        setContractors(true);
        setConsultants(false);
        setFreelancers(false);
      } else if (a === "consultants") {
        setSoftwareDevelopers(false);
        setMarketers(false);
        setDesigners(false);
        setContractors(false);
        setConsultants(true);
        setFreelancers(false);
      } else if (a === "freelancers") {
        setSoftwareDevelopers(false);
        setMarketers(false);
        setDesigners(false);
        setContractors(false);
        setConsultants(false);
        setFreelancers(true);
      }
    };
  return (
    <div className="HomePageContainer8">
          <div>
            <h3>Why track time with TMetric</h3>
            <div>
              <div className="HomePageContainer8ParaDiv">
                {softwareDevelopers && (
                  <p>
                    We ultimately went with TMetric because it checked a lot of
                    items on our want list. It’s both a desktop and web app, and
                    has an API that we were able to integrate with our business
                    management software. While that was the biggest selling
                    point, we also really like the user interface, the Chrome
                    extension, and built-in integration with Jira.
                  </p>
                )}
                {marketers && (
                  <p>
                    We’ve found TMetric to be both user friendly and robust. It
                    was easy to setup which allowed us to begin leveraging the
                    tool immediately. It also provides multiple layers of
                    reporting which provides value to our organization on a
                    number of different levels.
                  </p>
                )}
                {designers && (
                  <p>
                    TMetric is faster, more convenient and cheaper, the support
                    is responsive and they fixed some bugs quickly.
                  </p>
                )}
                {contractors && (
                  <p>
                    I recently transitioned from full-time employee to
                    ‘consultant’. Needed an app to track projects, tasks and
                    generate billing based on our agreement. TMetric handles
                    this elegantly and I can access from my iPhone, iPad or PC-
                    awesome!
                  </p>
                )}
                {consultants && (
                  <p>
                    After five months we are very happy with the app and will
                    gladly renew the service. We are still finding new uses for
                    it within our organization and it’s been pivotal for helping
                    us gather better decision-making information, grow our
                    topline and reduce our bottomline.
                  </p>
                )}
                {freelancers && (
                  <p>
                    There are plenty of available applications to monitor
                    working time. We chose TMetric because of the suitable price
                    and compatibility with Trello and Google Documents, which we
                    use every day in our company.
                  </p>
                )}

                <div>
                  <div>
                    {softwareDevelopers && <p>BizStream team</p>}
                    {marketers && <p>Brian Reilly, BankBound</p>}
                    {designers && <p>Swen Roethlisberger, Floowedit</p>}
                    {contractors && (
                      <p>
                        Jim Rolph, Manufacturer's Representative at Gorman
                        Company
                      </p>
                    )}
                    {consultants && (
                      <p>Galeno Chua, The Idea Founding Principal</p>
                    )}
                    {freelancers && <p>Patryk Hoffmann, MyLead</p>}
                    <img
                      src="https://tmetric.com/media/j2klt5pd/img-rating-5.svg"
                      alt=""
                    />
                  </div>
                  <div>
                    <span>Read Full Story</span> <BsArrowRightShort />
                  </div>
                </div>
              </div>
              <div>
                {softwareDevelopers && (
                  <img
                    src="https://tmetric.com/media/hznb1sgs/photo-software-developers.png"
                    alt=""
                  />
                )}
                {marketers && (
                  <img
                    src="https://tmetric.com/media/dhbotvr1/photo-marketers.png"
                    alt=""
                  />
                )}
                {designers && (
                  <img
                    src="https://tmetric.com/media/bxyho4oy/photo-designers.png"
                    alt=""
                  />
                )}
                {contractors && (
                  <img
                    src="https://tmetric.com/media/2pdfttnr/photo-contractors.png"
                    alt=""
                  />
                )}
                {consultants && (
                  <img
                    src="https://tmetric.com/media/ipkhp5ts/photo-consulting.png"
                    alt=""
                  />
                )}
                {freelancers && (
                  <img
                    src="https://tmetric.com/media/1nlgnvyj/photo-freelance.png"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              <div
                onClick={() => HomePageContainer8("softwareDevelopers")}
                className={
                  softwareDevelopers
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Software developers
              </div>
              <div
                onClick={() => HomePageContainer8("marketers")}
                className={
                  marketers
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Marketers
              </div>
              <div
                onClick={() => HomePageContainer8("designers")}
                className={
                  designers
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Designers
              </div>
              <div
                onClick={() => HomePageContainer8("contractors")}
                className={
                  contractors
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Contractors
              </div>
              <div
                onClick={() => HomePageContainer8("consultants")}
                className={
                  consultants
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Consultants
              </div>
              <div
                onClick={() => HomePageContainer8("freelancers")}
                className={
                  freelancers
                    ? "HomePageContainer9SelectedList"
                    : "HomePageContainer9List"
                }
              >
                Freelancers
              </div>
            </div>
          </div>
        </div>
  )
}

export default WhyTrackTime
