import React from 'react'

const Job = ({key , type, url, createdAt, company, company_url, location, title, description}) => {
    let color = "red";
    if (type === "Full Time") {
        color = "green";
    }
    return (
        <li key={key}>
            <ul>
                <li><b>Title:</b> {title}</li>
                <li><b>Company:</b> {company} <span className={color}>{type}</span></li>
                <li><b>Location:</b> {location}</li>
                <li><b>Description:</b> {description}</li>
                <li id="more_info"><a href="{company_url}">More Info</a></li>
            </ul>
        </li>
    )
};

export default Job;