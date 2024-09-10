import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../style/sidebar.css";
import logo from "../img/navbar/vama.png";

export default function Sidebar({ sidebar, showSidebar }) {
  const [prodList, setProdList] = useState(false);
  const [sideSpt, setSideSpt] = useState(false);

  return (
    <div
      className={sidebar ? "sidebar" : "sidebar sidebar-hide"}
      onClick={() => {
        showSidebar(!sidebar);
      }}
    >
      <div className={sidebar ? "inner-sidebar" : "inner-sidebar sidebar-hide"}>
        <div
          className="sidebar-r"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="side-icon">
            <img src={logo} alt="main-logo" />
          </div>
          <div className="side-lists">
            <Link
              className="side-list"
              to="/about-us"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              ABOUT US
            </Link>
            <Link
              className={
                sideSpt
                  ? "side-list side-listContainer selectedText"
                  : "side-list side-listContainer"
              }
              to="/"
              onClick={(e) => {
                e.stopPropagation();
                setSideSpt(!sideSpt);
              }}
            >
              SUPPORT & SERVICES
              <CSSTransition
                in={sideSpt ? true : false}
                timeout={500}
                classNames="btn"
                unmountOnExit={true}
              >
                <span className={"material-symbols-outlined remove"}>
                  remove
                </span>
              </CSSTransition>
              <CSSTransition
                in={!sideSpt ? true : false}
                timeout={500}
                classNames="btn"
              >
                <span className={"material-symbols-outlined add "}>add</span>
              </CSSTransition>
            </Link>
            <CSSTransition
              in={sideSpt ? true : false}
              timeout={500}
              appear={true}
              classNames="fade"
              unmountOnExit={true}
            >
              <div>
                <Link
                  className="side-list sl-list"
                  to="/agriculture-spraying"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Agriculture Spraying
                </Link>
                {/* <Link
                  className="side-list sl-list"
                  to="/land-survey"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Land Survey
                </Link> */}

                <Link
                  className="side-list sl-list"
                  to="/disaster-management"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Disaster Management
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/pilot-training"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Pilot Training
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/drone-repair-and-maintenance"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Drone Repair And Maintenance
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/uav-consultancy"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  UAV Consultancy
                </Link>
              </div>
            </CSSTransition>

            <Link
              className={
                prodList
                  ? "side-list side-listContainer selectedText"
                  : "side-list side-listContainer"
              }
              to="/"
              onClick={(e) => {
                e.stopPropagation();
                setProdList(!prodList);
              }}
            >
              PRODUCTS{" "}
              <CSSTransition
                in={prodList ? true : false}
                timeout={500}
                classNames="btn"
                unmountOnExit={true}
              >
                <span className={"material-symbols-outlined remove"}>
                  remove
                </span>
              </CSSTransition>
              <CSSTransition
                in={!prodList ? true : false}
                timeout={500}
                classNames="btn"
              >
                <span className={"material-symbols-outlined add "}>add</span>
              </CSSTransition>
            </Link>

            <CSSTransition
              in={prodList ? true : false}
              timeout={500}
              appear={true}
              classNames="fade"
              unmountOnExit={true}
            >
              <div>
                <Link
                  className="side-list sl-list"
                  to="/thea-agriculture-drone-16-litres"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  TH16L
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/thea-agriculture-drone-10-litres"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Thea Agriculture Drone 10 Litres
                </Link>
                <Link
                  className="side-list sl-list"
                  to="/naina-disaster-management-drone"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Naina Disaster Management Drone
                </Link>
                {/* <Link
                  className="side-list sl-list"
                  to="/survey-drone"
                  onClick={() => {
                    showSidebar(!sidebar);
                  }}
                >
                  Survey Drone
                </Link> */}
              </div>
            </CSSTransition>
            <Link
              className="side-list"
              to="/articles-and-events"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              ARTICLES & EVENTS
            </Link>

            {/* <Link
              className="side-list"
              to="/training"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              TRAINING
            </Link> */}
            <Link
              className="side-list"
              to="/career"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              CAREER
            </Link>

            <Link
              className="side-list"
              to="/rpto"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              RPTO
            </Link>
            <Link
              className="side-list"
              to="/post"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              POST
            </Link>
            <Link
              className="side-list"
              to="/faq"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              FAQ
            </Link>
            <Link
              className="side-list"
              to="/contact"
              onClick={() => {
                showSidebar(!sidebar);
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
        <div className="sidebar-social">
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <a
              href="https://www.facebook.com/people/Vama-Skylight/100095474376379/"
              target="_blank"
            >
              <span>
                {" "}
                <i class="fab fa-facebook-f"></i>{" "}
              </span>
            </a>
          </div>

          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <a href="https://www.instagram.com/vamaskylight" target="_blank">
              <span>
                {" "}
                <i class="fab fa-instagram"></i>{" "}
              </span>
            </a>
          </div>
          <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <a
              href="https://in.linkedin.com/company/vama-skylight"
              target="_blank"
            >
              <span>
                {" "}
                <i class="fab fa-linkedin"></i>{" "}
              </span>
            </a>
          </div>
          {/* <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa fa-linkedin"></i>
          </div> */}
          {/* <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-youtube"></i>
          </div> */}
          {/* <div
            className="social-list"
            onClick={() => {
              showSidebar(!sidebar);
            }}
          >
            <i class="fa-brands fa-pinterest"></i>
          </div> */}
        </div>
      </div>
    </div>
  );
}
