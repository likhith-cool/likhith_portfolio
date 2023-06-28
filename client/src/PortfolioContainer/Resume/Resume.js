import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import index from "react-typical";

export default function Resume(props){
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <span className="links-container">
        <a href={props.linkgit?props.linkgit : ""} target="_blank">
        {props.linkgit? <div className="links"><i className='fa fa-github-square'></i> git</div> :""}
            
                        </a>
        <a href={props.linklive?props.linklive : ""} target="_blank">
        {props.linklive? <div className="links"><i className='fa fa fa-plane'></i> link</div>:""}
            
          </a>
          </span>
          </div>
     
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
        
          //here we have
          const programmingSkillsDetails = [
            { skill: "JavaScript", ratingPercentage: 70 },
            { skill: "React JS", ratingPercentage: 70 },
            { skill: "Redux Toolkit", ratingPercentage: 70 },
            { skill: "Node JS", ratingPercentage: 70 },
            { skill: "Express JS", ratingPercentage: 70 },
            { skill: "HTML", ratingPercentage: 80 },
            { skill: "Mongodb", ratingPercentage: 70 },
            { skill: "CSS", ratingPercentage: 80 },
            { skill: "Tailwind css", ratingPercentage: 70 },
            { skill: "Bootstrap", ratingPercentage: 70 },
            { skill: "java", ratingPercentage: 70 },
            { skill: "python", ratingPercentage: 80 },
          ];
        
          const projectsDetails = [
            {
              title: "Personal Portfolio Website",
              duration: { fromDate: "2023-MAR", toDate: "2022-APR" },
              description:
                "A Personal Portfolio website to showcase all my details and projects at one place.",
              subHeading: "Technologies Used: React JS, Bootsrap ,node, render",
              linkgit:"https://github.com/likhith-cool",
              linklive:"https://likhith-portfolio.onrender.com/",
            },
            {
              title: "Hotel Website ",
              duration: { fromDate: "2023-APR", toDate: "2023-JUN" },
              description:
                "Online hotel website where people can search for hotels by places and book them .Admin account is used to create faHelicopterSymbol, rooms and accept bookings.",
              subHeading:
                "Technologies Used: Mongodb,Node,Express,React,Redux-toolkit,tailwind-css,cloudinary,stripe,jwt,render",
              linkgit:"https://github.com/likhith-cool/likhith_hotel",
              linklive:"https://likhith-hotel.onrender.com/",
            },
          ];
        
          const resumeDetails = [
            <div className="resume-screen-container" key="education">
              <ResumeHeading
                heading={"VELLORE INSTITUTE OF TECHNOLOGY"}
                subHeading={"BACHELOR OF TECHNOLOGY"}
                fromDate={"2018"}
                toDate={"2022"}
              />
        
              <ResumeHeading
                heading={"SRI VEMA JUNIOR COLLEGE"}
                subHeading={"INTERMEDIATE"}
                fromDate={"2016"}
                toDate={"2018"}
              />
              <ResumeHeading
                heading={"SRI VEMA HIGH SCHOOL "}
                subHeading={"10TH"}
                fromDate={"2015"}
                toDate={"2016"}
              />
            </div>,
        
            /* WORK EXPERIENCE */
            <div className="resume-screen-container" key="work-experience">
              <div className="experience-container">
                <ResumeHeading
                  heading={"TCS INTERN"}
                  subHeading={"DJANGO DEVELOPER,JQUERY,MYSQL"}
                  fromDate={"2022-FEB"}
                  toDate={"2022-APR"}
                />
                <div className="experience-description">
                  <span className="resume-description-text">
                    Created a table in mysql and made it available on frontend by django with pagination and search functionalities using jquery tables
                  </span>
                </div>
              </div>
              <div className="experience-container">
                <ResumeHeading
                  heading={"TCS FULL-TIME"}
                  subHeading={"JAVA DEVELOPER"}
                  fromDate={"2022-MAY"}
                  toDate={"PRESENT"}
                />
                <div className="experience-description">
                  <span className="resume-description-text">
                    Working on malaysian airlines catering website both as a java developer and oracle db support.
                  </span>
                </div>
              </div>
            </div>,
        
            /* PROGRAMMING SKILLS */
            <div
              className="resume-screen-container programming-skills-container"
              key="programming-skills"
            >
              {programmingSkillsDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                  <div className="heading-bullet"></div>
                  <span>{skill.skill}</span>
                  <div className="skill-percentage">
                    <div
                      style={{ width: skill.ratingPercentage + "%" }}
                      className="active-percentage-bar"
                    ></div>
                  </div>
                </div>
              ))}
            </div>,
        
            /* PROJECTS */
            <div className="resume-screen-container" key="projects">
              {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                  key={index}
                  heading={projectsDetails.title}
                  subHeading={projectsDetails.subHeading}
                  description={projectsDetails.description}
                  fromDate={projectsDetails.duration.fromDate}
                  toDate={projectsDetails.duration.toDate}
                  linkgit={projectsDetails.linkgit}
                  linklive={projectsDetails.linklive}
                />
                
              ))}
            </div>,
        
            /* Interests */
            <div className="resume-screen-container" key="interests">
              <ResumeHeading
                heading="Teaching"
                description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
              />
              <ResumeHeading
                heading="Music"
                description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
              />
              <ResumeHeading
                heading="Competitive Gaming"
                description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
              />
            </div>,
          ];
        
          const handleCarousal = (index) => {
            let offsetHeight = 360;
        
            let newCarousalOffset = {
              style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
            };
        
            setCarousalOffsetStyle(newCarousalOffset);
            setSelectedBulletIndex(index);
          };
          const getBullets = () => {
            return resumeBullets.map((bullet, index) => (
              <div
                onClick={() => handleCarousal(index)}
                className={
                  index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
                }
                key={index}
              >
                <img
                  className="bullet-logo"
                  src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
                 
                />
                <span className="bullet-label">{bullet.label}</span>
              </div>
            ));
          };
          const getResumeScreens = () => {
            return (
              <div
                style={carousalOffsetStyle.style}
                className="resume-details-carousal"
              >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
              </div>
            );
          };
    return(
      <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
