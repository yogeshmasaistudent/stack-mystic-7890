import { useEffect, useRef, useState } from "react";
import styles from "../styles/SideBar.module.css";
import { BiTask } from "react-icons/bi";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Box,
    
  } from "@chakra-ui/react";
  import { MdChevronLeft, MdChevronRight, MdMenu } from "react-icons/md";
import { Mywork } from "../pages/Mywork";
import Time from "../pages/Time/Time";
import Task from "../pages/Task/Task";
import { DetailedReports } from "../pages/DetailedReports";
//   import { CSSTransition } from "react-transition-group";
// import SideAcc from "./SideAcc";

const SideBar = ({showAdd}) => {
  const sidebarRef = useRef(null);
  const [barToggle, setBarToggle] = useState(true);
  const [time, setTime] = useState(true);
  const [task, setTask] = useState(false);
  const[work,setWork]=useState(false)
  const[report,setreport]=useState(false)
  useEffect(() => {
    if (barToggle) {
      addBodyPadding();
    } else {
      removeBodyPadding();
    }

    return removeBodyPadding;
  }, [barToggle]);
  function addBodyPadding() {
    document.body.style.paddingLeft =
      sidebarRef.current.getBoundingClientRect().width + "px";
  }
  function removeBodyPadding() {
    document.body.style.paddingLeft = "0";
  }
  const sBar = (n) => {
    if (n === "task") {
      setTask(true);
      setTime(false);
      setWork(false)
      setreport(false)
    } else if (n === "time") {
      setTask(false);
      setTime(true);
      setWork(false)
      setreport(false)
    }else if(n=="my work"){
        setTask(false);
        setTime(false);
        setWork(true)
        setreport(false)
    }else if(n=="reports"){
        setTask(false);
        setTime(false);
        setWork(false)
        setreport(true)
    }
  };
  return (
    <>
      <button
        onClick={() => {
          setBarToggle(!barToggle);
        }}
        className={styles.toggler}
      >
        {barToggle ? (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.74609 8L9.74609 13L11 11.7539L7.24609 8L11 4.24609L9.74609 3L4.74609 8Z"
              fill="%2334393D"
            />
          </svg>
        ) : (
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 3H15V5H1V3ZM9 7H1V9H9V7ZM15 11H1V13H15V11Z"
              fill="%2334393D"
            />
          </svg>
        )}
      </button>
      <div>
        <div
          ref={sidebarRef}
          className={styles.sidebar}
          style={{
            left: barToggle ? 0 : "-240px",
          }}
        >
          <img
            style={{
              height: "40px",
              marginTop: "10px",
              marginLeft: "10px",
              marginBottom: "20px",
            }}
            src="https://app.tmetric.com/images/tmetric_logo_and_text.svg"
            alt=""
          ></img>
          

          <div
            className={time ? styles.selecteddiv : styles.normaldiv}
            onClick={() => sBar("time")}
          >
            <img
              style={{ height: "25px" }}
              alt=""
              src={
                time
                  ? "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
                  : "https://tmetric.com/media/qojb5snq/icon-timer-gray.svg"
              }
            />
            <span>Time</span>
          </div>
          
          <div
            className={work ? styles.selecteddiv : styles.normaldiv}
            onClick={() => sBar("my work")}
          >
            {/* <img
              style={{ height: "25px" }}
              alt=""
              src={
                time
                  ? "https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg"
                  : "https://tmetric.com/media/qojb5snq/icon-timer-gray.svg"
              }
            /> */}
            <span>My work</span>
          </div>
          <div
            className={task ? styles.selecteddiv : styles.normaldiv}
            onClick={() => sBar("task")}
          >
            <BiTask style={{ fontSize: "25px" }} />
            <span>Tasks</span>
          </div>
          
          <div
            className={report ? styles.selecteddiv : styles.normaldiv}
            onClick={() => sBar("reports")}
          >
            <BiTask style={{ fontSize: "25px" }} />
            <span>Reports</span>
          </div>
          <hr></hr>
          <DropdownMenu menus={menus} />
          {/* <SideAcc showAdd={showAdd} /> */}
        </div>
      </div>
      {time && <Time />}
      {work && <Mywork />}
       {task && <Task />}
       {report && <DetailedReports />}
    </>
  );
};


function DropdownMenu({ menus }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const [menuHeight, setMenuHeight] = useState(null);
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height + 20);
    }
  
    return (
      <>
        {menus.map((menu, index) => (
            
          <Menu key={index} className="dropdown" closeOnSelect={false} style={{ marginBottom: "10px" }}>
            <MenuButton as={Button} rightIcon={<MdChevronRight />}>
              {menu.label}
            </MenuButton>
            <MenuList style={{ height: menuHeight }} className="dropdown">
              <div className="main-menu">
                {menu.items.map((item, idx) => (
                  <MenuItem key={idx} onClick={() => setActiveMenu(item.label)}>
                    {item.label}
                    <Box pos="absolute" ml="80%">
                      {/* <MdChevronRight /> */}
                    </Box>
                  </MenuItem>
                ))}
              </div>
              
            </MenuList>
            {activeMenu === menu.label && (
              <Menu className="dropdown" closeOnSelect={false} style={{ marginBottom: "10px" }}>
                <MenuButton as={Button} rightIcon={<MdChevronRight />}>
                  {menu.label}
                </MenuButton>
              
              </Menu>
            )}
             <div style={{marginBottom: "13px"}}></div>
         
          </Menu>
         
        ))}
        {activeMenu && <DetailedReports />}
      </>
    );
  }
  
  const menus = [
    {
      label: "ANALYZE",
      items: [
        { label: "Reports" },
        { label: "Activity" }
      ],
      submenu: [
        { label: "Subitem 1" },
        { label: "Subitem 2" }
      ]
    },
    {
      label: "MANAGE",
      items: [
        { label: "Projects" },
        { label: "Clients" },
        { label: "Invoices" },
        { label: "Time Off" }
      ],
      submenu: [
        { label: "Subitem 1" },
        { label: "Subitem 2" }
      ]
    },
    {
        label: "WORKSPACE",
        items: [
          { label: "Settings" },
          { label: "Members" },
          { label: "Teams" },
          { label: "Tags" },
          { label: "Integrations" },
          { label: "Subscription" }
        ],
        submenu: [
          { label: "Subitem 1" },
          { label: "Subitem 2" }
        ]
      }
  ];
  


export default SideBar;