import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import Resume from "./Resume/Resume";
import GetStartedBtn from "../homepage/GetStartedBtn";
import { useParams } from "react-router-dom";
import Resume2 from "./Resume2/Resume2";
import RoundBtn from "../RoundBtn";

export default function ProjectDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const initialdetails = {
        title: "Project Details",
        project: "Project Title",
        company: "Project Institue",
        startYear: "Start year",
        startMonth: "Start month",
        endYear: "End year",
        endMonth: "End month",
        desc: "Description"
    }

    const [proinputs, setProInputs] = useState([initialdetails]);

    const addProSection = ()=>{
        setProInputs([...proinputs, initialdetails])
    }

    const deleteProSection = (index)=>{
        const updateSection = [...proinputs];
        updateSection.splice(index,1);
        setProInputs(updateSection)
    }

    const {resumeType} = useParams();

    const render = () => {
        if(resumeType === "resume") {
            return <Resume />
        } else if (resumeType === "resume2") {
            return <Resume2 />
        }
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="projects" resume={resumeType} />
                <div className="form">
                    {proinputs.map((details,index)=>(
                        <div key={index} className="experience-section">
                {Object.keys(details).map((key, index) => {
                    if (key === 'title' || key === 'subtitle') {
                        if (key === 'subtitle') {
                            return <p className="subtitle" key={index}>{details[key]}</p>;
                        }
                        return <p className="title" key={index}>{details[key]}</p>;
                    }
                    
                    const isLinkField = key === 'portfolio' || key === 'ghub' || key === 'linkedin';

                    return (
                        <div key={index} className="inputs">
                        <label htmlFor={key} className="resume-label">{details[key]}</label>
                        <input className="resume-input" type={isLinkField ? 'url' : 'text'} id={key} name={key} />
                        </div>
                    );
                    })}
                    {index>0 && (<button type="button" className="w-100" onClick={()=>deleteProSection(index)}>
                            <GetStartedBtn extraClass="add align-right red-btn" btn="Remove" />
                        </button>)}
                     </div>
                    ))}
                    <div className="btns">
                        <button type="button" className="w-50">
                            <GetStartedBtn extraClass="add align-left w-50" btn="Save" />
                        </button>
                        <button type="button" className="w-50" onClick={addProSection}>
                            <GetStartedBtn extraClass="add align-right w-50 transparent" btn="Add more" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="res-parent">
                {render()}
            </div>
            <RoundBtn />
        </div>
        </>
    )
}