import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Panel from "./Panel";
import CustomForm from "./CustomForm";
import Resume from "./Resume";

export default function PersonalDetails() {

    useEffect(() => {
        document.title = "Resume Builder";
    })

    const details = {
        title: "Personal Details",
        fname: "Enter your full name",
        phone: "Enter your phone number",
        designation: "Enter your designation",
        portfolio: "Add portfolio link",
        email: "Enter email address",
        subtitle: "Additional Details",
        ghub: "Github Profile",
        linkedin: "LinkedIn Profile"
    }

    return (
        <>
        <Nav />
        <div className="main-page">
            <div className="fillers">
                <Panel page="personal" />
                {/* <CustomForm details={
                    {
                        title: "Personal Details",
                        fname: "Enter your full name",
                        phone: "Enter your phone number",
                        designation: "Enter your designation",
                        portfolio: "Add portfolio link",
                        email: "Enter email address",
                        subtitle: "Additional Details",
                        ghub: "Github Profile",
                        linkedin: "LinkedIn Profile"
                    }
                } /> */}
                <div className="form">
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
                        <input className="resume-input" type={isLinkField ? 'url' : 'text'} id={key} name={key} placeholder={details[key]} />
                        </div>
                    );
                    })}
                </div>
            </div>
            <div className="res-parent">
                <Resume />
            </div>
        </div>
        </>
    )
}